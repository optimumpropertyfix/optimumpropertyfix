from os import access
from typing import Tuple
from flask import jsonify, request
from flask_jwt_extended import create_access_token, unset_jwt_cookies
from sqlalchemy import text
from app import database_engine
from app import app

def serialize_user(first_name, last_name, net_id, contact_email, isStudent): 
    
    user = {
        "first_name": first_name,
        "last_name": last_name,
        "net_id": net_id,
        "contact_email": contact_email,
        "isStudent": isStudent,
    }

    return user

def login_user(given_net_id, given_password):

    connection = database_engine.connect()
    user_query = text(f'SELECT DISTINCT first_name, last_name, net_id, contact_email, isStudent, password FROM user WHERE net_id = "{given_net_id}";')
    
    user_record = connection.execute(user_query).first()

    if user_record == None:
        return False

    first_name = user_record['first_name']
    last_name = user_record['last_name']
    net_id = user_record['net_id']
    contact_email = user_record['contact_email']
    isStudent = int(user_record[4]) == 1 if  True else False
    password = user_record['password']

    if (given_password == password):

        user = serialize_user(
            first_name=first_name, 
            last_name=last_name, 
            net_id=net_id, 
            contact_email=contact_email, 
            isStudent=isStudent)

        access_token = access_token = create_access_token(identity = net_id)

        return tuple((user, access_token))


    return False

@app.route("/token", methods=["POST"])
def process_incoming_login():

    unauthorized_user_response = jsonify({"success":False}), 401

    # https://docs.sqlalchemy.org/en/20/orm/session_basics.html 
    # https://flask-jwt-extended.readthedocs.io/en/stable/basic_usage/

    credentials = request.get_json()
    net_id = credentials.get("net_id")
    password = credentials.get("password")

    authenticated_user = login_user(
        given_net_id=net_id, 
        given_password=password)

    if authenticated_user == False:

        return unauthorized_user_response

    user = authenticated_user[0]
    access_token = authenticated_user[1]

    if authenticated_user: 

        authorized_user_response = jsonify({
            "success":True, 
            "access_token": access_token,
            "user": user}), 200

        return authorized_user_response
    
    else:

        return unauthorized_user_response

@app.route("/revoke", methods=["POST"])
def process_incoming_logout():

    revoke_user_response = jsonify({"msg":"Authorization Revoked"})
    unset_jwt_cookies(revoke_user_response)

    return revoke_user_response, 200
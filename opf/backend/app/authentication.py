from flask import jsonify, request
from flask_jwt_extended import create_access_token, unset_jwt_cookies, get_jwt_identity, jwt_required
from sqlalchemy import text
from app import database_engine
from app import app
from app.serializers import serialize_authorization
from app.backend_operations import view_session

def login_user(given_net_id, given_password):

    connection = database_engine.connect()
    user_query = text(f'SELECT DISTINCT isStudent, password FROM user WHERE net_id = "{given_net_id}";')
    user_record = connection.execute(user_query).first()
    connection.close()

    if user_record == None:
        return False

    isStudent = int(user_record['isStudent']) == 1 if  True else False
    password = user_record['password']

    if (given_password == password):

        access_token = access_token = create_access_token(identity = given_net_id)

        authorization = serialize_authorization(
            access_token = access_token, 
            isStudent = isStudent)

        return authorization


    return False

@app.route("/token", methods=["POST"])
def process_incoming_login():

    # https://docs.sqlalchemy.org/en/20/orm/session_basics.html 
    # https://flask-jwt-extended.readthedocs.io/en/stable/basic_usage/

    credentials = request.get_json()
    net_id = credentials.get("net_id")
    password = credentials.get("password")

    authorization = login_user(
        given_net_id=net_id, 
        given_password=password)

    if authorization == False:

        unauthorized_user_response = jsonify({"success":False}), 401

        return unauthorized_user_response

    authorized_user_response = jsonify(authorization), 200

    return authorized_user_response

@app.route("/revoke", methods=["POST"])
def process_incoming_logout():

    revoke_user_response = jsonify({"msg":"Authorization Revoked"})
    unset_jwt_cookies(revoke_user_response)

    return revoke_user_response, 200

@app.route("/session", methods=["GET"])
@jwt_required()
def process_incoming_viewSession():

  current_user = get_jwt_identity()

  session = view_session(current_user)

  current_session_response = jsonify(session), 201

  return current_session_response
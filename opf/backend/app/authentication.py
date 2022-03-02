from flask import jsonify, request
from flask_jwt_extended import create_access_token, unset_jwt_cookies
from sqlalchemy import create_engine, text
from app import app

def login_user(netid, password):

    engine = create_engine('sqlite:///app/database.db')
    
    with engine.connect() as connection:
        command = f'SELECT DISTINCT first_name, last_name, net_id, contact_email, isStudent, password FROM user WHERE net_id = "{netid}";'
        result = connection.execute(text(command))
        for row in result:
            print(row['password'])

    return True
# check if netid password from 

@app.route("/token", methods=["POST"])
def generate_token():

    credentials = request.get_json()
    netid = credentials.get("netid")
    password = credentials.get("password")

    login_user(netid=netid, password=password)

    # https://docs.sqlalchemy.org/en/20/orm/session_basics.html 
    # https://flask-jwt-extended.readthedocs.io/en/stable/basic_usage/
    # https://dev.to/nagatodev/how-to-add-login-authentication-to-a-flask-and-react-application-23i7

    #if database.session.query(User.id).filter_by(net_id = net_id).first() == None:
    #    return unauthorized_user_response

    #if database.session.query(User.id).filter_by(net_id).first().password != password:
    #    return unauthorized_user_response
    unauthorized_user_response = jsonify({'success':False, "msg":"Authentication Failed"}), 401
    if netid != "net_id":
        print("Failed")
        return unauthorized_user_response

    if password != "password":
        print("Failed")
        return unauthorized_user_response

    #access_token = create_access_token(identity = net_id)

    #authenticated_user_response = jsonify({"token": access_token, "msg": "Authorization Granted"}), 200
    
    return unauthorized_user_response


@app.route("/revoke", methods=["POST"])
def revoke_token():

    revoke_user_response = jsonify({"msg":"Authorization Revoked"})
    unset_jwt_cookies(revoke_user_response)

    return revoke_user_response, 200
from flask import jsonify, request
from flask_jwt_extended import create_access_token, unset_jwt_cookies
from api import api, database
from api.models.user_model import User

@api.route("/token", methods=["POST"])
def create_token():

    net_id = request.get_json().get("net_id")
    password = request.get_json().get("password")
    unauthorized_user_response = jsonify({'success':False, "msg":"Authentication Failed"}), 401

    # https://docs.sqlalchemy.org/en/20/orm/session_basics.html 
    # https://flask-jwt-extended.readthedocs.io/en/stable/basic_usage/
    # https://dev.to/nagatodev/how-to-add-login-authentication-to-a-flask-and-react-application-23i7

    #if database.session.query(User.id).filter_by(net_id = net_id).first() == None:
    #    return unauthorized_user_response

    #if database.session.query(User.id).filter_by(net_id).first().password != password:
    #    return unauthorized_user_response

    if net_id != "testing net_id":
        return unauthorized_user_response

    if password != "testing password":
        return unauthorized_user_response


    access_token = create_access_token(identity = net_id)

    authenticated_user_response = jsonify({access_token: access_token, "msg": "Authorization Granted"}), 200
    
    return authenticated_user_response


@api.route("/login", methods=["POST"])
def login_user():

    revoke_user_response = jsonify({"msg":"Revoked Authorization"}), 200

    unset_jwt_cookies(revoke_user_response)

    return revoke_user_response
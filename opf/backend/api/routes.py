from crypt import methods
import json
from flask import Flask, jsonify, request
from sqlalchemy import null
from api import api, database
from api.models.user_model import User
from api.serializers.user_serializer import user_serializer

response_successful = json.dumps({'success':True}), 200, {'ContentType':'application/json'}
response_unsuccessful = json.dumps({'success':True}), 200, {'ContentType':'application/json'}

@api.route("/debug/create_user/<string:new_name>", methods=["POST"])
def view_debug(new_name):

    nshe_id = request.get_json().get('nshe_id')

    if new_name == "" or new_name == null:

        return response_unsuccessful

    user_record = User(first_name=new_name);

    database.session.add(user_record)
    database.session.commit()
    print(f"Name: {new_name} - {nshe_id} is successfully added.")
    return response_successful

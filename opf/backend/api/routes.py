from flask import request
from flask_jwt_extended import jwt_required
from api import api, database
from api.models.user_model import User
from api.serializers.user_serializer import user_serializer

successful_response = json.dumps({'success':True}), 200, {'ContentType':'application/json'}
unsuccessful_response = json.dumps({'success':False}), 421, {'ContentType':'application/json'}

@api.route("/debug/create_user/<string:new_name>", methods=["POST"])
@jwt_required()
def view_debug(new_name):

    nshe_id = request.get_json().get('nshe_id')

    if new_name == "":

        return unsuccessful_response

    user_record = User(first_name=new_name);

    database.session.add(user_record)
    database.session.commit()
    print(f"Name: {new_name} - {nshe_id} is successfully added.")
    return successful_response
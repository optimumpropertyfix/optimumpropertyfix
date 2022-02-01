from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
#from flask_migrate import Migrate #https://pypi.org/project/Flask-Migrate/

api = Flask(__name__)
api.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
api.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
api.config['JWT_SECRET_KEY'] = 'development-test'
database = SQLAlchemy(api)
jwt = JWTManager(api)
#Migrate(api, database)
#when migrating $flask database migrate  -m "created user or whatever message"
#Run migration $flask database upgrade

# Accessing comamnd for User Model => 'from api.models.user_model import User' within backend base folder (within python environment).
from api.models.user_model import User
from api.models.ticket_model import Ticket
from api.models.building_model import Building
from api.models.room_model import Room
from api.models.tag_model import Tag
from api.serializers.user_serializer import user_serializer, ticket_serializer, building_serializer, room_serializer, tag_serializer
from api import routes, user_test, ticket_test, building_test, room_test, tag_test

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager

api = Flask(__name__)
api.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
api.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
api.config['JWT_SECRET_KEY'] = 'development-test'
database = SQLAlchemy(api)
jwt = JWTManager(api)

# Accessing comamnd for User Model => 'from api.models.user_model import User' within backend base folder (within python environment).

from api.models.user_model import User
from api.serializers.user_serializer import user_serializer

from api import routes
from api import authentication
import imp
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

api = Flask(__name__)
api.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
api.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
database = SQLAlchemy(api)

# Accessing comamnd for User Model => 'from api.models.user_model import User' within backend base folder (within python environment).

from api.models.user_model import User
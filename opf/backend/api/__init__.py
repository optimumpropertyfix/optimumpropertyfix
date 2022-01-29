import imp
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

api = Flask(__name__)
api.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
api.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
database = SQLAlchemy(api)

# from models.user_model import *
# from api import models, routes
# from api import models

from api.models.user_model import User
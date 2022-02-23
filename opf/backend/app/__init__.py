from flask import Flask
from flask_sqlalchemy import SQLAlchemy
#from flask_jwt_extended import JWTManager


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'development-test'
database = SQLAlchemy(app)
#jwt = JWTManager(app)


from app import authentication


from app.models import User, Ticket
from app import routes
from app import test
from app import serializers

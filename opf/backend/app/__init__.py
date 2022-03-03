from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from flask_jwt_extended import JWTManager


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'development-test'
database = SQLAlchemy(app)
jwt = JWTManager(app)
database_engine = create_engine('sqlite:///app/database.db')


from app import authentication
from app.models import User, Ticket, Appointment, Building, Unit, Announcement, FAQ
from app import backend_operations
from app import routes
from app import test
from app import serializers

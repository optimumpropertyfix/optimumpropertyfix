from flask import Flask
from flask_jwt_extended import JWTManager
from mysql.connector import MySQLConnection, Error
from configparser import ConfigParser

# Setting Up Library Backend Objects
app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'development-test'
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = False
jwt = JWTManager(app)

# Setting Up Custom Backend Objects
from app.controllers import AnnouncementController, AppointmentController, BuildingController, FaqController, FeedbackController, TicketController, UnitController, UserController
from app import Routes

# Dependencies for SQL Connection
from app import DatabaseConfiguration
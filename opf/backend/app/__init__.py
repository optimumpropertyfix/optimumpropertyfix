from flask import Flask
#from flask_sqlalchemy import SQLAlchemy
#from sqlalchemy import create_engine
from flask_jwt_extended import JWTManager


app = Flask(__name__)
#app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
#app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'development-test'
#database = SQLAlchemy(app)
jwt = JWTManager(app)


from app.controllers import AnnouncementController, AppointmentController, BuildingController, FaqController, FeedbackController, TicketController, UnitController, UserController
from app import Routes

####################################################################
# ACTION | 'REST TERM' | Definition :
# Create | 'POST' | Creates a new object
# Read | 'GET' | Read information about object (or multiple objects)
# Update | 'PUT | Updates info about existing object
# Delete | 'DELETE' | Delete an object
#####################################################################
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask import Flask, jsonify, request

from app import app
from app.controllers.AnnouncementController import AnnouncementController
from app.controllers.AppointmentController import AppointmentController
from app.controllers.BuildingController import BuildingController
from app.controllers.FaqController import FaqController
from app.controllers.FeedbackController import FeedbackController
from app.controllers.TicketController import TicketController
from app.controllers.UnitController import UnitController
from app.controllers.UserController import UserController

announcement_controller = AnnouncementController()
appointment_controller = AppointmentController()
building_controller = BuildingController()
faq_controller = FaqController()
feedback_controller = FeedbackController()
ticket_controller = TicketController()
unit_controller = UnitController()
user_controller = UserController()
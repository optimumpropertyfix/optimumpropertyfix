####################################################################
# ACTION | 'REST TERM' | Definition :
# Create | 'POST' | Creates a new object
# Read | 'GET' | Read information about object (or multiple objects)
# Update | 'PUT | Updates info about existing object
# Delete | 'DELETE' | Delete an object
#####################################################################
from crypt import methods
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

@app.route("/announcements", methods=["GET"])     
def view_all_announcement_route():

    return "All Announcements"

@app.route("/announcements/latest", methods=["GET"])     
def view_latest_announcement_route():

    return "Latest Announcements"

@app.route("/announcements/<int:ticket_id>", methods=["GET"])     
def view_individual_announcement_route(ticket_id):

    return f'{ticket_id}'

@app.route("/announcements/<int:ticket_id>/update", methods=["PATCH"])     
def edit_individual_announcement_route(ticket_id):

    announcement = request.get_json()
    title = announcement.get('announcement_title')
    message = announcement.get('announcement_message')

    return "Edit Announcement"

@app.route("/announcements/<int:ticket_id>/delete", methods=["DELETE"])     
def delete_individual_announcement_route(ticket_id):

    return "Delete Announcement"

@app.route("/announcements/create", methods=["POST"])
def create_announcement_route():

    announcement = request.get_json()
    title = announcement.get('announcement_title')
    message = announcement.get('announcement_message')
####################################################################
# ACTION | 'REST TERM' | Definition :
# Create | 'POST' | Creates a new object
# Read | 'GET' | Read information about object (or multiple objects)
# Update | 'PUT | Updates info about existing object
# Delete | 'DELETE' | Delete an object
#####################################################################
from distutils.log import error
from msilib.schema import Error
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
def view_all_announcements_route():
    annoucement_objects = announcement_controller.view_all_announcements()
    return jsonify(annoucement_objects)


@app.route("/announcements/latest", methods=["GET"])     
def view_latest_announcement_route():
    annoucement_objects = announcement_controller.view_latest_announcements()
    return jsonify(annoucement_objects)


@app.route("/announcements/<int:announcement_id>", methods=["GET"])     
def view_individual_announcement_route(announcement_id):
   annoucement_objects = announcement_controller.view_announcement_by_id(announcement_id=announcement_id)
   return jsonify(annoucement_objects)


'''
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

'''

@app.route("/appointment", methods=["GET"])
def view_all_appointment_route():
    net_id = "1"
    appointment_objects = appointment_controller.view_all_appointments(net_id = net_id)
    return jsonify(appointment_objects)


@app.route("/appointment/<int:ticket_id>/read", methods=["GET"])
def view_individual_appointment_route(ticket_id):
    appointment_objects = appointment_controller.view_individual_appointment(ticket_id = ticket_id)
    return jsonify(appointment_objects)

'''
@app.route("/appointment/filter/ticket_created", methods=["GET"])
def view_all_appointments_by_datetime_route():
    appointment_objects = appointment_controller.view_all_appointments_by_datetime()
    return jsonify(appointment_objects)
'''


@app.route("/appointment/filter/ticket_status/<string:status>", methods=["GET"])
def view_all_appointments_by_status_route(status):
    appointment_objects = appointment_controller.view_all_appointments_by_status(status = status)
    return jsonify(appointment_objects)


'''
@app.route("/appointment/<int:ticket_id>/update", methods=["PATCH"])
def edit_appointment_route(ticket_id):
    appointment = request.get_json()
    start_time = appointment.get('appointment_start_time')
    end_time = appointment.get('appointment_end_time')
    is_cancelled = appointment.get('appointment_is_cancelled')
    is_cancelled_reason = appointment.get('appointment_is_cancelled_reason')
    return f'Edit Appointment {ticket_id}' 


@app.route("/appointments/<int:ticket_id>/create", methods=["POST"])
def create_appointment_route(ticket_id):
    appointment = request.get_json()
    start_time = appointment.get('appointment_start_time')
    end_time = appointment.get('appointment_end_time')
    return f'Create Appointment {ticket_id}' 


@app.route("/appointments/<int:ticket_id>/delete", methods=["DELETE"])
def delete_appointment_route(ticket_id):
    return f'Delete Appointment {ticket_id}' 
'''

@app.route("/buildings", methods=["GET"])
def view_all_buildings_route():
    building_objects = building_controller.view_all_buildings()
    return jsonify(building_objects) 


@app.route("/buildings/<int:building_id>", methods=["GET"])
def view_individual_building_route(building_id):
    building_objects = building_controller.view_individual_building(building_id = building_id)
    return jsonify(building_objects)


'''
@app.route("/buildings/create", methods=["POST"])
def create_building_route():
    building = request.get_json()
    name = building.get('building_name')
    abbreviation = building.get('building_abbreviation')
    year = building.get('building_year')
    address = building.get('building_address')
    capacity = building.get('building_capacity')
    map_number = building.get('building_map_number')
    return f'Create Building' 

@app.route("/buildings/<int:building_id>/update", methods=["PATCH"])
def edit_building_route(building_id):
    building = request.get_json()
    name = building.get('building_name')
    abbreviation = building.get('building_abbreviation')
    year = building.get('building_year')
    address = building.get('building_address')
    capacity = building.get('building_capacity')
    map_number = building.get('building_map_number')
    return f'Edit Building {building_id}' 

@app.route("/buildings/<int:building_id>/delete", methods=["DELETE"])
def delete_building_route(building_id):
    return f'Delete Building {building_id}' 
'''

@app.route("/faq", methods=["GET"])
def view_all_faqs_route():
    faq_objects = faq_controller.view_all_faqs()
    return jsonify(faq_objects)


@app.route("/faq/<int:faq_id>", methods=["GET"])
def view_individual_faq_route(faq_id):
    faq_objects = faq_controller.view_individual_faq(faq_id=faq_id)
    return jsonify(faq_objects)

'''
@app.route("/faq/create", methods=["POST"])
def create_faq_route():
    faq = request.get_json()
    question = faq.get('faq_question')
    answer = faq.get('faq_answer')
    return f'Create FAQ'


@app.route("/faq/<int:faq_id>/update", methods=["PATCH"])
def edit_faq_route(faq_id):
    faq = request.get_json()
    question = faq.get('faq_question')
    answer = faq.get('faq_answer')
    return f'Edit FAQ {faq_id}'


@app.route("/faq/<int:faq_id>/delete", methods=["DELETE"])
def delete_faq_route(faq_id):
    return f'Delete FAQ {faq_id}'
'''

@app.route("/feedback", methods=["GET"])
def view_all_feedback_route():
    feedback_objects = feedback_controller.view_all_feedback()
    return jsonify(feedback_objects)


@app.route("/feedback/<int:ticket_id>", methods=["GET"])
def view_individual_feedback_route(ticket_id):
    feedback_objects = feedback_controller.view_individual_feedback(ticket_id = ticket_id)
    return jsonify(feedback_objects)


'''
@app.route("/feedback/<int:ticket_id>/create", methods=["POST"])
def create_feedback_route(ticket_id):
    return f'Create Feedback {ticket_id}'

@app.route("/feedback/<int:ticket_id>/update", methods=["PATCH"])
def edit_feedback_route(ticket_id):
    return f'Edit Feedback {ticket_id}'

@app.route("/feedback/<int:ticket_id>/delete", methods=["DELETE"])
def delete_feedback_route(ticket_id):
    return f'Delete Feedback {ticket_id}'
'''


@app.route("/tickets", methods=["GET"])
def view_all_tickets_route():
    ticket_objects = ticket_controller.get_all_tickets(net_id = "araamzaremehjardi", is_student = False)
    return jsonify(ticket_objects)


@app.route("/tickets/<int:ticket_id>", methods=["GET"])
def view_individual_ticket_route(ticket_id):
    ticket_objects = ticket_controller.get_all_tickets_by_ticket_id(net_id = "araamzaremehjardi", is_student = False, ticket_id = ticket_id)
    return jsonify(ticket_objects)


@app.route("/tickets/filter/severity/<string:severity>", methods=["GET"])
def view_individual_tickets_by_severity_route(severity):
    ticket_objects = ticket_controller.get_all_tickets_by_severity(net_id = 'araamzaremehjardi', is_student = True, severity = severity)
    return jsonify(ticket_objects)


@app.route("/tickets/filter/status/<string:status>", methods=["GET"])
def view_all_tickets_by_status_route(status):
    ticket_objects = ticket_controller.get_all_tickets_by_status(net_id = 'araamzaremehjardi', is_student = True, status = status)
    return jsonify(ticket_objects)


@app.route("/tickets/filter/user/<string:net_id>", methods=["GET"])
def view_all_tickets_by_user_route(net_id):
    ticket_objects = ticket_controller.get_all_tickets_by_net_id( is_student = False, net_id = net_id)
    return jsonify(ticket_objects)


'''
@app.route("/tickets/create", methods=["POST"])
def create_ticket_route():
    ticket = request.get_json()
    title = ticket.get('ticket_title')
    description = ticket.get('ticket_description')
    severity = ticket.get('ticket_severity')
    location = ticket.get('ticket_location')
    building_name = ticket.get('ticket_building_name')
    unit_number = ticket.get('ticket_unit_number')
    additonal_notes = ticket.get('ticket_additonal_notes')
    ticket_status = ticket.get('ticket_ticket_status')
    return f'Create Ticket'


@app.route("/tickets/<int:ticket_id>/update", methods=["PATCH"])
def edit_ticket_route( location, building_name, unit_number, additional_notes):
    ticket = request.get_json()
    title = ticket.get('ticket_title')
    description = ticket.get('ticket_description')
    severity = ticket.get('ticket_severity')
    location = ticket.get('ticket_location')
    building_name = ticket.get('ticket_building_name')
    unit_number = ticket.get('ticket_unit_number')
    additonal_notes = ticket.get('ticket_additonal_notes')
    ticket_status = ticket.get('ticket_ticket_status')


@app.route("/tickets/<int:ticket_id>/delete", methods=["DELETE"])
def delete_ticket_route(ticket_id):
    return f'Delete Ticket {ticket_id}'
'''

@app.route("/unit/<int:building_id>", methods=["GET"])
def view_all_units_route(building_id):
    unit_objects = unit_controller.view_all_units(building_id = building_id)
    return jsonify(unit_objects)


@app.route("/unit/<int:building_id>/<int:unit_id>", methods=["GET"])
def view_individual_unit_route(building_id, unit_id):
    unit_objects = unit_controller.view_individual_unit(building_id = building_id, unit_id = unit_id)
    return jsonify(unit_objects)


'''
@app.route("/unit/<int:building_id>/create", methods=["POST"])
def create_unit_route(building_id):
    unit = request.get_json()
    type = unit.get('unit_type')
    number = unit.get('unit_number')
    letter = unit.get('unit_letter')
    occupancy = unit.get('unit_occupancy')
    return f'Create Unit {building_id}'


@app.route("/unit/<int:building_id>/<int:unit_id>/delete", methods=["DELETE"])
def delete_unit_route(building_id, unit_id):
    return f'Delete Unit {building_id} - {unit_id}'
'''


@app.route("/user", methods=["GET"])
def view_current_user_route():
    net_id = 'joannalopez'
    user_objects = user_controller.view_current_user(net_id = net_id)
    return jsonify(user_objects)

'''
@app.route("/user/create", methods=["POST"])
def create_user_route():
    user = request.get_json()
    first_name = user.get('user_first_name')
    last_name = user.get('user_last_name')
    is_student = user.get('user_is_student')
    contact_email = user.get('user_contact_email')
    nshe_id = user.get('user_nshe_id')
    gender = user.get('user_gender')
    year = user.get('user_year')
    password = user.get('user_password')
    return f'Create User'
'''


@app.route("/user/all", methods=["GET"])
def view_all_users_route():

    return f'View Users'

@app.route("/user/<int:user_id>", methods=["GET"])
def view_individual_user_route(user_id):
    return f'View User {user_id}'


'''
@app.route("/user/delete", methods=["DELETE"])
def student_delete_user_route():
    return f'Delete Self User';


@app.route("/user/update", methods=["PATCH"])
def student_edit_user_route():
    return f'Edit Self User';


@app.route("/user/<int:user_id>/delete", methods=["DELETE"])
def admin_delete_user_route(user_id):
    return f'Delete Self User {user_id}';


@app.route("/user/<int:user_id>/update", methods=["PATCH"])
def admin_edit_user_route(user_id):
    return f'Edit Self User {user_id}';


@app.route("/login", methods=["POST"])
def login_route():
    return f'Login User';


@app.route("/logout", methods=["POST"])
def logout_route():
    return f'Logout User';


@app.route("/reset_password", methods=["POST"])
def reset_password_route():
    credentials = request.get_json();
    contact_email = credentials.get('user_contact_email')
    nshe_id = credentials.get('user_nshe_id')
    password = credentials.get('user_password')
    return f'Reset User Password';
'''
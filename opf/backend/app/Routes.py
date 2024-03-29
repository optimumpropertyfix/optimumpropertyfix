from distutils.log import error
from msilib.schema import Error
from netrc import netrc
import json
from flask_jwt_extended import jwt_required, get_jwt_identity, unset_jwt_cookies
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
from app.controllers.KanbanController import KanbanController

announcement_controller = AnnouncementController()
appointment_controller = AppointmentController()
building_controller = BuildingController()
faq_controller = FaqController()
feedback_controller = FeedbackController()
ticket_controller = TicketController()
unit_controller = UnitController()
user_controller = UserController()
kanban_controller = KanbanController()

response_successful = json.dumps({'success':True}), 200, {'ContentType':'application/json'}
response_unsuccessful = json.dumps({'success':False}), 400, {'ContentType':'application/json'}

@app.route("/announcements", methods=["GET"])     
@jwt_required()
def view_all_announcements_route():

    annoucement_objects = announcement_controller.view_all_announcements()
    return jsonify(annoucement_objects)

@app.route("/admin_announcements", methods=["GET"])
def admin_view_all_announcements_route():

    annoucement_objects = announcement_controller.admin_view_all_announcements()
    return jsonify(annoucement_objects)

'''
@app.route("/announcements/<int:announcement_id>", methods=["GET"])     
def view_individual_announcement_route(announcement_id):
   annoucement_objects = announcement_controller.view_announcement_by_id(announcement_id=announcement_id)
   return jsonify(annoucement_objects)
'''


'''
@app.route("/announcements/<int:announcement_id>/update", methods=["PATCH"])     
def edit_individual_announcement_route(announcement_id):
    title='test'
    message='TEST'
    annoucement_objects = announcement_controller.edit_individual_announcement(announcement_id = announcement_id, title = title, message = message)
    return jsonify(annoucement_objects)
'''
@app.route("/announcements/<int:announcement_id>", methods=["GET"])
def admin_view_individual_announcement_route(announcement_id):

    annoucement_object = announcement_controller.admin_view_individual_announcement(announcement_id_param = announcement_id)
    return jsonify(annoucement_object)

@app.route("/announcements/create", methods=["POST"])
@jwt_required()
def admin_create_announcement():

    current_user = get_jwt_identity()
    user_id = current_user[5]

    announcement = request.get_json()
    title = announcement.get('announcement_title')
    message = announcement.get('announcement_message')

    if (announcement_controller.admin_create_announcement(user_id_param=user_id, announcement_message_param=message, announcement_title_param=title) != -1):
        return response_successful
    else:
        return response_unsuccessful



@app.route("/announcements/<int:announcement_id>/update", methods=["PATCH"])
@jwt_required()
def admin_edit_individual_announcement_route(announcement_id):

    announcement = request.get_json()
    title = announcement.get('announcement_title')
    message = announcement.get('announcement_message')

    if (announcement_controller.admin_edit_individual_announcement(announcement_id_param=announcement_id, announcement_message_param=message, announcement_title_param=title ) != -1):
        return response_successful
    else:
        return response_unsuccessful

@app.route("/appointment", methods=["GET"])
@jwt_required()
def view_all_appointment_route():
    current_user = get_jwt_identity()
    print(current_user)
    user_is_student = current_user[4]
    user_id = current_user[5]

    appointment_objects = appointment_controller.view_all_appointments(user_id=user_id, is_student=user_is_student)
    return jsonify(appointment_objects)


@app.route("/appointment/<int:appointment_id>", methods=["GET"])
@jwt_required()
def view_individual_appointment_route(appointment_id):
    current_user = get_jwt_identity()
    user_is_student = current_user[4]
    user_id = current_user[5]

    appointment_objects = appointment_controller.view_individual_appointment(appointment_id=appointment_id, user_id=user_id, is_student=user_is_student)
    return jsonify(appointment_objects)


@app.route("/appointment/scheduled_appointments", methods=["GET"])
@jwt_required()
def user_view_latest_appointment_route():
    current_user = get_jwt_identity()
    user_id = current_user[5]
    appointment_objects = appointment_controller.user_view_latest_appointment(user_id=user_id)
    return jsonify(appointment_objects)


'''
@app.route("/appointment/filter/ticket_status/<string:status>", methods=["GET"])
def view_all_appointments_by_status_route(status):
    appointment_objects = appointment_controller.view_all_appointments_by_status(status = status)
    return jsonify(appointment_objects)
'''


'''
@app.route("/appointment/<int:ticket_id>/update", methods=["PATCH"])
def edit_appointment_route(ticket_id):
    ticket_id = '1'
    title='test'
    message='TEST'
    annoucement_objects = appointment_controller.edit_individual_appointment(ticket_id = ticket_id, title = title, message = message)
    return jsonify(annoucement_objects)
'''


'''
@app.route("/appointments/<int:ticket_id>/create", methods=["POST"])
def create_appointment_route(ticket_id):
    appointment = request.get_json()
    start_time = appointment.get('appointment_start_time')
    end_time = appointment.get('appointment_end_time')
    return f'Create Appointment {ticket_id}' 
'''


'''
@app.route("/appointments/<int:ticket_id>/delete", methods=["DELETE"])
def delete_appointment_route(ticket_id):
    return f'Delete Appointment {ticket_id}' 
'''


'''
@app.route("/buildings", methods=["GET"])
@jwt_required()
def view_all_buildings_route():
    building_objects = building_controller.view_all_buildings()
    return jsonify(building_objects) 
'''


'''
@app.route("/buildings/<int:building_id>", methods=["GET"])
def view_individual_building_route(building_id):
    building_objects = building_controller.view_individual_building(building_id = building_id)
    return jsonify(building_objects)
''' 



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
'''

'''
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
'''

'''
@app.route("/buildings/<int:building_id>/delete", methods=["DELETE"])
def delete_building_route(building_id):
    return f'Delete Building {building_id}' 
'''



@app.route("/faq", methods=["GET"])
@jwt_required()
def view_all_faqs_route():
    faq_objects = faq_controller.admin_view_all_faq()
    return jsonify(faq_objects)

@app.route("/faq/<int:faq_id>", methods=["GET"])
@jwt_required()
def admin_view_individual_faq_route(faq_id):
    faq_object = faq_controller.admin_view_individual_faq(faq_id_param=faq_id)
    return jsonify(faq_object)

@app.route("/faq/<int:faq_id>", methods=["PATCH"])
@jwt_required()
def admin_edit_individual_faq_route(faq_id):

    faq = request.get_json()
    question = faq.get('faq_question')
    answer = faq.get('faq_answer')

    if (faq_controller.admin_edit_individual_faq(faq_id_param=faq_id, faq_answer_param=answer, faq_question_param=question) != -1):
        return response_successful
    else:
        return response_unsuccessful

@app.route("/faq/create", methods=["POST"])
@jwt_required()
def admin_create_individual_faq_route():

    faq = request.get_json()
    question = faq.get('faq_question')
    answer = faq.get('faq_answer')

    current_user = get_jwt_identity()
    user_id = current_user[5]

    if (faq_controller.admin_create_faq(user_id_param=user_id, faq_answer_param=answer, faq_question_param=question) != -1):
        return response_successful
    else:
        return response_unsuccessful

'''
@app.route("/faq/<int:faq_id>", methods=["GET"])
def view_individual_faq_route(faq_id):
    faq_objects = faq_controller.view_individual_faq(faq_id=faq_id)
    return jsonify(faq_objects)
'''


'''
@app.route("/faq/create", methods=["POST"])
def create_faq_route():
    faq = request.get_json()
    question = faq.get('faq_question')
    answer = faq.get('faq_answer')
    return f'Create FAQ'
'''

'''
@app.route("/faq/<int:faq_id>/update", methods=["PATCH"])
def edit_faq_route(faq_id):
    faq = request.get_json()
    question = faq.get('faq_question')
    answer = faq.get('faq_answer')
    return f'Edit FAQ {faq_id}'
'''

'''
@app.route("/faq/<int:faq_id>/delete", methods=["DELETE"])
def delete_faq_route(faq_id):
    return f'Delete FAQ {faq_id}'
'''

@app.route("/feedback", methods=["GET"])
def view_all_feedback_route():
    feedback_objects = feedback_controller.view_all_feedback()
    return jsonify(feedback_objects)


@app.route("/feedback/<int:ticket_id>", methods=["GET"])
@jwt_required()
def view_individual_feedback_route(ticket_id):
    feedback_objects = feedback_controller.user_view_individual_feedback(ticket_id = ticket_id)
    return jsonify(feedback_objects)


@app.route("/feedback/<int:ticket_id>/create", methods=["POST"])
def create_feedback_route(ticket_id):
    return f'Create Feedback {ticket_id}'


@app.route("/feedback/<int:ticket_id>/update", methods=["PATCH"])
def edit_feedback_route(ticket_id):
    return f'Edit Feedback {ticket_id}'

'''
@app.route("/feedback/<int:ticket_id>/delete", methods=["DELETE"])
def delete_feedback_route(ticket_id):
    return f'Delete Feedback {ticket_id}'
'''

@app.route("/tickets", methods=["GET"])
@jwt_required()
def view_all_tickets_route():

    current_user = get_jwt_identity()
    user_net_id = current_user[3]
    user_is_student = current_user[4]

    ticket_objects = ticket_controller.get_all_tickets(net_id = user_net_id, is_student = user_is_student)
    return jsonify(ticket_objects)


@app.route("/tickets/<int:ticket_id>", methods=["GET"])
@jwt_required()
def view_individual_ticket_route(ticket_id):

    current_user = get_jwt_identity()
    user_net_id = current_user[3]
    user_is_student = current_user[4]

    ticket_objects = ticket_controller.get_individual_ticket_by_ticket_id(net_id = user_net_id, is_student = user_is_student, ticket_id = ticket_id)
    return jsonify(ticket_objects)


@app.route("/tickets/filter/status/<string:status>", methods=["GET"])
@jwt_required()
def view_all_tickets_by_status_route(status):

    current_user = get_jwt_identity()
    user_net_id = current_user[3]
    user_is_student = current_user[4]

    ticket_objects = ticket_controller.get_all_tickets_by_status(net_id = user_net_id, is_student = user_is_student, status = status)
    return jsonify(ticket_objects)


@app.route("/tickets/filter/user/<string:net_id>", methods=["GET"])
def view_all_tickets_by_user_route(net_id):
    ticket_objects = ticket_controller.get_all_tickets_by_net_id( is_student = False, net_id = net_id)
    return jsonify(ticket_objects)


@app.route("/tickets/create", methods=["POST"])
@jwt_required()
def create_ticket_route():
    current_user = get_jwt_identity()
    user_id = current_user[5]

    ticket = request.get_json()
    title = ticket.get('ticket_title')
    description = ticket.get('ticket_description')
    location = ticket.get('ticket_location')
    building_name = ticket.get('ticket_building_name')
    unit_number = ticket.get('ticket_unit_number')
    additonal_notes = ticket.get('ticket_additonal_notes')

    ticket_controller.user_create_ticket(user_id_param=user_id, title_param=title,location_param=location, description_param=description, building_name_param= building_name, unit_number_param=unit_number, additional_notes_param=additonal_notes)
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

'''
@app.route("/tickets/<int:ticket_id>/delete", methods=["DELETE"])
def delete_ticket_route(ticket_id):
    return f'Delete Ticket {ticket_id}'
'''

#views current user log into opf
@app.route("/user", methods=["GET"])
@jwt_required()
def view_current_user_route():

    current_user = get_jwt_identity()
    user_id = current_user[5]

    user_objects = user_controller.view_individual_user(user_id = user_id)
    return jsonify(user_objects)


@app.route("/user/all", methods=["GET"])
def view_all_users_route():
    user_objects = user_controller.view_all_users()
    return jsonify(user_objects)


@app.route("/user/<int:user_id>", methods=["GET"])
@jwt_required()
def view_individual_user_route(user_id):
    user_objects = user_controller.view_individual_user(user_id = user_id)
    return jsonify(user_objects)

@app.route("/user/update_account_password", methods=["PATCH"])
@jwt_required()
def user_update_password():

    current_user = get_jwt_identity()
    user_id = current_user[5]

    credentials = request.get_json()
    current_password = credentials.get('user_current_password')
    new_password = credentials.get('user_new_password')

    if (user_controller.user_update_password(user_id_param=user_id, current_password_param=current_password, new_password_param=new_password)):

        return json.dumps({'success':True}), 200, {'ContentType':'application/json'}

    else: 

        return json.dumps({'success':False}), 400, {'ContentType':'application/json'}

#creates a new user in the opf system :)
@app.route("/new_user", methods=["POST"])
def create_user_route():
    user = request.get_json()
    first_name = user.get('user_first_name')
    last_name = user.get('user_last_name')
    contact_email = user.get('user_contact_email')
    net_id = user.get('user_net_id')
    nshe_id = user.get('user_nshe_id')
    gender = user.get('user_gender')
    year = user.get('user_year')
    password = user.get('user_password')
    user_controller.create_new_user(first_name_param=first_name, last_name_param=last_name, contact_email_param=contact_email, net_id_param=net_id, nshe_id_param=nshe_id, gender_param=gender, year_param=year, password_param=password)

    return f'Create User'

# user account info :)
@app.route("/user/update_account_info", methods=["PATCH"])
@jwt_required()
def user_reset_account_info_route():
    current_user = get_jwt_identity()
    user_id = current_user[5]
    user = request.get_json()
    first_name = user.get('user_first_name')
    last_name = user.get('user_last_name')
    contact_email = user.get('user_contact_email')
    gender = user.get('user_gender')

    user_controller.user_reset_account_info(user_id_param= user_id, first_name_param=first_name, last_name_param=last_name, contact_email_param=contact_email, gender_param=gender)
    return f'Edit Account Information'

'''@app.route("/user/<int:user_id>/update", methods=["PATCH"])
def admin_edit_user_route(user_id):
    return f'Edit Self User {user_id}';'''


#login given credentials for a user :)
@app.route("/login", methods=["POST"])
def login_route():
    credentials = request.get_json()
    net_id = credentials.get('user_net_id')
    password = credentials.get('user_password')
    response_data = user_controller.login_user(net_id_param=net_id, password_param=password)

    if (response_data == None):
        return response_unsuccessful

    return jsonify(response_data)


#user logout route :)
@app.route("/logout", methods=["POST"])
def logout_route():
    revoke_user_response = jsonify({"msg":"Authorization Revoked"})
    unset_jwt_cookies(revoke_user_response)
    
    return revoke_user_response, 200


#reset the users password given fields for login :)
@app.route("/reset_password", methods=["POST"])
def reset_password_route():
    credentials = request.get_json()
    net_id = credentials.get('user_net_id')
    nshe_id = credentials.get('user_nshe_id')
    password = credentials.get('user_password')
    user_controller.reset_user_password(net_id_param=net_id, nshe_id_param=nshe_id, password_param=password)

    return f'Reset User Password'

@app.route("/buildings", methods=["GET"])
@jwt_required()
def view_dormitories_route():

    building_objects = building_controller.view_all_dormitories()

    return jsonify(building_objects)

@app.route("/buildings/create", methods=["POST"])
@jwt_required()
def admin_create_dormitory_route():
    building = request.get_json()
    name = building.get('building_name')
    abbreviation = building.get('buidling_abbreviation')
    year = building.get('building_year')
    address = building.get('building_address')
    capacity = building.get('building_capacity')
    map_number = building.get('building_map_number')

    if (building_controller.admin_create_dormitory(building_name_param=name, building_abbreviation_param=abbreviation, building_year_param=year, building_address_param=address, building_capacity_param=capacity, building_map_number_param=map_number) != -1):
        return response_successful
    else: 
        return response_unsuccessful

@app.route("/buildings/<int:building_id>/edit", methods=['PATCH'])
@jwt_required()
def edit_individual_dormitory_route(building_id):
    building = request.get_json()
    name = building.get('building_name')
    abbreviation = building.get('buidling_abbreviation')
    year = building.get('building_year')
    address = building.get('building_address')
    capacity = building.get('building_capacity')
    map_number = building.get('building_map_number')

    if (building_controller.edit_individual_dormitory(building_id_param=building_id, building_name_param=name, building_abbreviation_param=abbreviation, building_year_param=year, building_address_param=address, building_capacity_param=capacity, building_map_number_param=map_number) != -1):
        return response_successful
    else: 
        return response_unsuccessful

@app.route("/buildings/<int:building_id>", methods=['GET'])
@jwt_required()
def view_individual_dormitory_route(building_id):

    building_object = building_controller.view_individual_dormitory(building_id_param=building_id)

    return jsonify(building_object)

@app.route("/units/<int:building_id>", methods=['GET'])
@jwt_required()
def view_dormitory_units_route(building_id):

    unit_objects = unit_controller.view_dormitory_units(building_id_param=building_id)

    return jsonify(unit_objects)

@app.route("/units/<int:building_id>/create", methods=['POST'])
@jwt_required()
def admin_create_unit_route(building_id):

    unit = request.get_json()
    type = unit.get('unit_type')
    number = unit.get('unit_number')
    occupancy = unit.get('unit_occupancy')

    unit_objects = unit_controller.admin_create_unit(unit_building_param=building_id, unit_type_param=type, unit_number_param=number, unit_occupancy_param=occupancy)

    return jsonify(unit_objects)

@app.route("/admin_appointments", methods=['GET'])
@jwt_required()
def admin_view_all_appointments_route():

    appointment_objects = appointment_controller.admin_view_all_appointments()

    return jsonify(appointment_objects)

@app.route("/admin_appointments/filter/appointment_status/<string:status>", methods=['GET'])
@jwt_required()
def admin_view_all_appointments_by_status(status):
    appointment_objects = appointment_controller.admin_view_all_appointments_by_status(status = status)
    return jsonify(appointment_objects)
    

@app.route("/admin/users", methods=['GET'])
@jwt_required()
def view_all_opf_users_route():
    user_objects = user_controller.view_all_opf_users()
    return jsonify(user_objects)

'''
@app.route("/admin/users/<int:>", methods = ['PATCH'])
@jwt_required()
def view_opf_reset_password(): 
    return
'''
@app.route("/admin_tickets", methods=['GET'])
def admin_get_all_tickets_route():

    ticket_objects = ticket_controller.admin_get_all_tickets()
    return jsonify(ticket_objects)

@app.route("/admin_tickets/filter/ticket_status/<string:status>", methods=['GET'])
@jwt_required()
def admin_view_all_tickets_by_status_route(status):
    appointment_objects = ticket_controller.admin_get_all_tickets_status(status = status)
    return jsonify(appointment_objects)

@app.route("/kanban_board/tickets", methods=['GET'])
@jwt_required()
def kanban_receive_all_tickets_route():

    ticket_objects = kanban_controller.kanban_receive_all_tickets()

    return jsonify(ticket_objects)

@app.route("/kanban_board/<int:ticket_id>/<string:status>", methods=['PATCH'])
@jwt_required()
def change_ticket_kanban_status(ticket_id, status):

    if (kanban_controller.change_ticket_kanban_status(ticket_id_param=ticket_id, status_param=status) != -1):
        return response_successful
    else: 
        return response_unsuccessful

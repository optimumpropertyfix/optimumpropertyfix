####################################################################
# ACTION | 'REST TERM' | Definition :
# Create | 'POST' | Creates a new object
# Read | 'GET' | Read information about object (or multiple objects)
# Update | 'PUT | Updates info about existing object
# Delete | 'DELETE' | Delete an object
#####################################################################
from crypt import methods
import json
from flask import Flask, jsonify, request
from app import app, database
from app.models import User, Ticket, Appointment, Building, Unit, Announcement, FAQ
from app.serializers import ticket_serializer
from app.backend_operations import student_createTicket, admin_createTicket, get_AllTickets, student_deleteTicket

@app.route("/student/<string:netid>/tickets/create", methods=["POST"])
def process_incoming_studentTicket(netid):

  title = request.get_json("title")
  description = request.get_json("description")
  additional_notes = request.get_json("additional_notes")
  appointment_time = request.get_json("appointment_time")
  appointment_date = request.get_json("appointment_date")
  building = request.get_json("building")
  location = request.get_json("location")
  unit_number = request.get_json("unit_number")
  severity = request.get_json("severity")
  contact_email = request.get_json("contact_email")
  creation_date_time = request.get_json("creation_date_time")

  ticket_successful = student_createTicket(
    netid = netid, 
    title = title,
    description = description,
    additional_notes = additional_notes,
    appointment_time = appointment_time,
    appointment_date = appointment_date, 
    building = building,
    location = location, 
    unit_number = unit_number, 
    severity = severity, 
    contact_email = contact_email,
    creation_date_time = creation_date_time
  )

  if ticket_successful:
    return json.dumps({'success':True}), 200, {'ContentType':'application/json'}
  else: 
    return json.dumps({'success':False}), 501, {'ContentType':'application/json'}

@app.route("/admin/<string:netid>/tickets/create", methods=["POST"])
def process_incoming_adminTicket(netid):

  title = request.get_json("title")
  description = request.get_json("description")
  additional_notes = request.get_json("additional_notes")
  appointment_time = request.get_json("appointment_time")
  appointment_date = request.get_json("appointment_date")
  building = request.get_json("building")
  location = request.get_json("location")
  unit_number = request.get_json("unit_number")
  severity = request.get_json("severity")
  contact_email = request.get_json("contact_email")
  creation_date_time = request.get_json("creation_date_time")

  ticket_successful = admin_createTicket(
    netid = netid, 
    title = title,
    description = description,
    additional_notes = additional_notes,
    appointment_time = appointment_time,
    appointment_date = appointment_date, 
    building = building,
    location = location, 
    unit_number = unit_number, 
    severity = severity, 
    contact_email = contact_email,
    creation_date_time = creation_date_time
  )

  if ticket_successful:
    return json.dumps({'success':True}), 200, {'ContentType':'application/json'}
  else: 
    return json.dumps({'success':False}), 501, {'ContentType':'application/json'}

@app.route("/student/<string:netid>/tickets")
def process_outgoing_studentTickets(netid):

  tickets = get_AllTickets(netid)

  return jsonify(tickets)

@app.route("/admin/<string:netid>/tickets")
def process_outgoing_adminTickets(netid):

  tickets = get_AllTickets(netid)

  return jsonify(tickets)

@app.route("/student/<string:netid>/tickets/<int:ticket_id>/delete")
def process_incoming_deleteTicket(netid, ticket_id):

  ticket_delete_successful = student_deleteTicket(netid, ticket_id)

  if ticket_delete_successful:
    return json.dumps({'success':True}), 200, {'ContentType':'application/json'}
  else: 
    return json.dumps({'success':False}), 501, {'ContentType':'application/json'}

#@app.route("/maintenanceticket", methods=["GET"])
#def view_tickets():
#  ticket_records = database.session.query(Ticket).all()
#  return jsonify([*map(ticket_serializer, ticket_records)])



#@app.route("/maintenanceticket/<int:ticket_id>", methods=["GET"])
#def view_ticket(ticket_id):
#  ticket_records = Ticket.query.filter_by(id = ticket_id)
#  return jsonify(ticket_serializer(ticket_records))

@app.route("/new_user", methods=["POST"])
def create_user():
  user = request.get_json()
  processed_isStudent = False
  processed_isAdmin = False
  processed_Gender = ""

  print(int(request.get_json().get("year")))
  print(user)

  if user.get("user_type") == "Student":
    processed_isStudent = True
    processed_isAdmin = False

  else: 
    processed_isStudent = False
    processed_isAdmin = True

  if user.get("gender") == "Male":
    processed_Gender = "M"
  else:
    processed_Gender = "F"


  user_record = User(
  first_name = user.get("first_name"), 
  last_name = user.get("last_name"), 
  isStudent = processed_isStudent, 
  isAdmin = processed_isAdmin, 
  email = user.get("email"), 
  net_id = user.get("net_id"),
  nshe_id = user.get("nshe_id"),
  gender = processed_Gender, 
  year = int(user.get("year")),
  password = user.get("password"))

  return json.dumps({'success':True}), 200, {'ContentType':'application/json'}

####################################################################
# ACTION | 'REST TERM' | Definition :
# Create | 'POST' | Creates a new object
# Read | 'GET' | Read information about object (or multiple objects)
# Update | 'PUT | Updates info about existing object
# Delete | 'DELETE' | Delete an object
#####################################################################
import json
from flask import Flask, jsonify, request
from app import app, database
from app.models import User, Ticket, Appointment, Building, Unit
from app.serializers import ticket_serializer


@app.route("/maintenanceticket", methods=["GET"])
def view_tickets():
  ticket_records = database.session.query(Ticket).all()
  return jsonify([*map(ticket_serializer, ticket_records)])


@app.route("/maintenanceticket/<int:ticket_id>", methods=["GET"])
def view_ticket(ticket_id):
  ticket_records = Ticket.query.filter_by(id = ticket_id)
  return jsonify(ticket_serializer(ticket_records))

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

####################################################################
# ACTION | 'REST TERM' | Definition :
# Create | 'POST' | Creates a new object
# Read | 'GET' | Read information about object (or multiple objects)
# Update | 'PUT | Updates info about existing object
# Delete | 'DELETE' | Delete an object
#####################################################################
import json
from flask import Flask, jsonify
from app import app, database
from app.models import User, Ticket
from app.serializers import ticket_serializer


@app.route("/maintenanceticket", methods=["GET"])
def view_tickets():
  ticket_records = database.session.query(Ticket).all()
  return jsonify([*map(ticket_serializer, ticket_records)])


@app.route("/maintenanceticket/<int:ticket_id>", methods=["GET"])
def view_ticket(ticket_id):
  ticket_records = Ticket.query.filter_by(id = ticket_id)
  return jsonify(ticket_serializer(ticket_records))
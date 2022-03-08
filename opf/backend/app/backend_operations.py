from datetime import datetime
from sqlalchemy import desc, text
from app import database_engine
from flask_jwt_extended import get_jwt_identity, jwt_required
from flask import jsonify
from app.serializers import serialize_session
from app.models import Ticket, User
from app import database
'''
def student_createTicket(
    netid, 
    title, 
    description, 
    additional_notes, 
    appointment_time, 
    appointment_date,
    building,
    location,
    unit_number,
    severity,
    contact_email,
    creation_date_time):


def student_CreateTicket(
    netid, 
    title, 
    description,
    severity, 
    location,
    building,
    unit_number,
    additional_notes, 
    ):
        connection = database_engine.connect()
        createStudentTicket_command = text(f'INSERT INTO ticket(netid, title, description, severity, location, building, unit_number, additional_notes) VALUES ("{netid}", "{title}", "{description}", "{severity}", "{location}", "{building}", "{unit_number}", "{additional_notes}");')
        connection.execute(createStudentTicket_command)
        connection.close()

'''
def student_ViewAllTickets():
    connection = database_engine.connect()
    createStudentTicket_command = text(f"SELECT ticket.id, title, description, severity_level, location, building_name, additional_notes FROM ticket, building, user WHERE net_id= 'net_id';")
    connection.execute(createStudentTicket_command)
    connection.close()
'''

def student_ViewTicket():
    connection = database_engine.connect()
    createStudentTicket_command = text(f"SELECT ticket.id, title, description, severity_level, location, building_name, additional_notes FROM ticket, building, user WHERE net_id= 'net_id' AND ticket_id = 'ticket_id';")
    connection.execute(createStudentTicket_command)
    connection.close()


def admin_CreateTicket(
    netid, 
    title, 
    description,
    severity, 
    location,
    building,
    unit_number,
    additional_notes, 
    ):
        connection = database_engine.connect()
        createAdminTicket_command = text(f'INSERT INTO ticket(netid, title, description, severity, location, building, unit_number, additional_notes) VALUES ("{netid}", "{title}", "{description}", "{severity}", "{location}", "{building}", "{unit_number}", "{additional_notes}");')
        connection.execute(createAdminTicket_command)
        connection.close()

'''
def admin_ViewAllTickets():
    connection = database_engine.connect()
    createAdminTicket_command = text(f"SELECT ticket.id, title, description, severity_level, location, building_name, additional_notes FROM ticket, building, user WHERE net_id= 'net_id';")
    connection.execute(createAdminTicket_command)
    connection.close()
'''

def admin_ViewTicket():
        connection = database_engine.connect()
        createAdminTicket_command = text(f"SELECT ticket.id, title, description, severity_level, location, building_name, unit_number, additional_notes FROM unit, ticket, building, user WHERE net_id= 'net_id' AND ticket_id = 'ticket_id';")
        connection.execute(createAdminTicket_command)
        connection.close()
'''

def create_account(
    first_name, 
    last_name,
    isStudent,
    contact_email,
    net_id,
    gender,
    year,
    password,
    nshe_id = ""):
    connection = database_engine.connect()
    account_command = text(f'INSERT INTO user (first_name, last_name, isStudent, contact_email, net_id, nshe_id, gender, year, password) VALUES ("{first_name}","{last_name}","{isStudent}","{contact_email}","{net_id}","{nshe_id}","{gender}","{year}","{password}");')
    connection.execute(account_command)
    connection.close()

def view_session(given_net_id):
    
    connection = database_engine.connect()
    user_query = text(f'SELECT DISTINCT first_name, last_name, net_id, isStudent FROM user WHERE net_id = "{given_net_id}";')
    user_record = connection.execute(user_query).first()
    connection.close()

    first_name = user_record['first_name']
    last_name = user_record['last_name']
    net_id = user_record['net_id']
    isStudent = user_record['isStudent']

    if isStudent == 1:
        isStudent = True
    else:
        isStudent = False

    session = serialize_session(
    first_name=first_name,
    last_name=last_name,
    net_id=net_id,
    isStudent=isStudent)

    return session

def student_create_ticket(
    net_id,
    title, 
    description, 
    severity,
    location,
    building,
    unit_number,
    additional_notes):

    ticket_record = Ticket(
    title=title, 
    status = "Pending",
    description=description,
    severity_level=severity,
    location=location,
    additional_notes=additional_notes)

    user_record = User.query.filter_by(net_id = net_id).first()

    user_record.ticket_creator.append(ticket_record)
    database.session.commit()

    #ticket_record = Ticket()

    #connection = database_engine.connect()
    #ticket_command = text(f'INSERT INTO ticket(netid, title, description, severity, location, building, unit_number, additional_notes) VALUES ("{net_id}", "{title}", "{description}", "{severity}", "{location}", "{building}", "{unit_number}", "{additional_notes}");')
    #connection.execute(ticket_command)
    #connection.close()


    


    


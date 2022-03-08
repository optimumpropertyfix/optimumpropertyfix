from sqlalchemy import text
from app import database_engine
from flask_jwt_extended import get_jwt_identity
from flask import jsonify
from app.serializers import serialize_session
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
    createStudentTicket_command = text(f"SELECT ticket.id, title, description, severity_level, location, building_name, unit_number, additional_notes FROM unit, ticket, building, user WHERE net_id= 'net_id';")
    connection.execute(createStudentTicket_command)
    connection.close()
'''

def student_ViewTicket():
    connection = database_engine.connect()
    createStudentTicket_command = text(f"SELECT ticket.id, title, description, severity_level, location, building_name, unit_number, additional_notes FROM unit, ticket, building, user WHERE net_id= 'net_id' AND ticket_id = 'ticket_id';")
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
    createAdminTicket_command = text(f"SELECT ticket.id, title, description, severity_level, location, building_name, unit_number, additional_notes FROM unit, ticket, building, user WHERE net_id= 'net_id';")
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



    


    


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

    print("Added New Ticket")
    print(netid)
    print(contact_email)

    return True

def admin_createTicket(
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

    print("Added New Ticket")
    print(netid)
    print(contact_email)

    return True

def get_AllTickets(netid):

    tickets = json.dumps([*map(serialize_ticket, ticket_record)])

    return tickets

def student_deleteTicket(netid, ticket_id):

    # Backend logic to delete ticket

    return True
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



    


    


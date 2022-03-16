from ast import arg
from time import strftime
from turtle import title
from xml.etree.ElementTree import tostring
from mysql.connector import MySQLConnection, Error
from app.DatabaseConfiguration import database_configuration
from flask import Flask, jsonify 
import json


# General Structure of Controller: 
#   General Logic
#   Write Query
#   Read Query
#   Serializer


class TicketController:
        # Query Database for All Tickets Depending if its a Admin or Student User
        # Prepare query to be serialized
        # Functions Returns JSON Object
    def get_all_tickets(self, net_id, is_student):

        tickets = None
        if (is_student):
            query = "user_get_all_tickets"
            args = [net_id]
            tickets = self.query_database(query, args)
        else:
            query = "admin_get_all_tickets"
            tickets = self.query_database(query)

        ticket_objects = list()

        for ticket in tickets:
            ticket_id = ticket[0]
            ticket_title = ticket[1]
            ticket_status = ticket[2]
            ticket_created = ticket[3].strftime("%m %d %Y %H %M %S")
            ticket_location = ticket[4]
            ticket_severity = ticket[5]

            ticket_json = self.serialize_ticket(
                id = ticket_id,
                title = ticket_title,
                status =  ticket_status, 
                created = ticket_created,
                location = ticket_location,
                severity = ticket_severity,
            )
            ticket_objects.append(ticket_json)
        return ticket_objects


    def query_database(self, query, args = None): 
        query_result = None

        try:
            db_config = database_configuration
            connection = MySQLConnection(**db_config)
            cursor = connection.cursor()
            if (args == None): 
                cursor.callproc(query)
            else:
                cursor.callproc(query, args)
            # print out the result

            for result in cursor.stored_results():
                query_result = list(result.fetchall())


        except Error as error:
            print(error)

            
        finally:
            cursor.close()
            connection.close()
            return query_result


    def serialize_ticket(self, id = None, title = None, description = None, severity = None, location = None, building_name = None, unit_number = None, additional_notes = None, status = None, created = None):
        ticket = {
            "ticket_id": id,
            "ticket_title": title,
            "ticket_description": description, 
            "ticket_severity": severity,
            "ticket_location": location,
            "ticket_building_name": building_name,
            "ticket_unit_number": unit_number,
            "ticket_additional_notes": additional_notes, 
            "ticket_status": status,
            "ticket_created": created,
        }
        return ticket
         

    def __init__(self):
        print("DEBUG: TicketController Loaded.")
        self.get_all_tickets("joannalopez", True)
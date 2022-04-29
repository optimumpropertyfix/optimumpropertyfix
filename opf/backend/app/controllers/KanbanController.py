from datetime import date
from mysql.connector import MySQLConnection, Error
from app.DatabaseConfiguration import database_configuration
from flask import Flask, jsonify 
from time import strftime
import json

class KanbanController:

    def change_ticket_kanban_status(self, status_param, ticket_id_param):

        commit = "kanban_update_ticket_status"
        values = [status_param, ticket_id_param]

        return self.commit_database(commit, values)

    def kanban_receive_all_tickets(self):
        tickets = None
        query = "kanban_receive_all_tickets"
        tickets = self.query_database(query)

        ticket_objects = []

        for ticket in tickets:
            ticket_id = ticket[0]
            ticket_title = ticket[1]
            ticket_description = ticket[2]
            ticket_severity = ticket[3]
            ticket_location = ticket[4]
            tikcet_building_name = ticket[5]
            ticket_unit_number = ticket[6]
            ticket_status = ticket[7]
            ticket_created = ticket[8].strftime("%m %d %Y %H %M %S")

            ticket_json = self.serialize_ticket(
                id = ticket_id,
                title = ticket_title,
                description=ticket_description,
                building_name=tikcet_building_name,
                unit_number=ticket_unit_number,
                status =  ticket_status, 
                created = ticket_created,
                location = ticket_location,
                severity = ticket_severity,
            )
            ticket_objects.append(ticket_json)
        
        return ticket_objects

    def query_database(self, query, args = None): 
        query_result = None

        connection = None
        cursor = None

        try:
            print("ATTEMPT FOR CONNECTION START")
            db_config = database_configuration
            connection = MySQLConnection(**db_config)
            cursor = connection.cursor()

        except:
            return -1

        try:
            print("CURSOR ACTIVE")
            print(args)
            if (args == None): 
                print("EVAL 1")
                cursor.callproc(query)
            else:
                cursor.callproc(query, args)

            for result in cursor.stored_results():
                query_result = list(result.fetchall())

        except Error as error:
            print(error)
            return -1

        finally:
            print("CURSOR CLOSED")
            cursor.close()
            connection.close()
            return query_result

    def commit_database(self, commit, values = None):
        commit_result = None

        connection = None
        cursor = None

        try:
            print("ATTEMPT FOR CONNECTION START")
            db_config = database_configuration
            connection = MySQLConnection(**db_config)
            cursor = connection.cursor()

        except:
            return -1

        try:
            print("CURSOR ACTIVE")
            if (values == None): 
                print("EVAL 1")
                cursor.callproc(commit)
            else:
                cursor.callproc(commit, values)

            commit_result = connection.commit()

        except Error as error:
            print(error)
            return -1

        finally:
            print("CURSOR CLOSED")
            cursor.close()
            connection.close()
            return commit_result

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
        print("DEBUG: Kanban Controller Loaded.")


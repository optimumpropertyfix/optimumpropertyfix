from time import strftime
from mysql.connector import MySQLConnection, Error
from app.DatabaseConfiguration import database_configuration
from flask import Flask, jsonify 
import json


# General Structure of Controller: 
#   General Logic
#   Helper Functions
#   Write Query
#   Read Query
#   Serializer


class TicketController:

    def admin_get_all_tickets_status(self, status):
        tickets = None
        query = "admin_get_all_tickets_status"
        args = [status]
        tickets = self.query_database(query, args)

        ticket_objects = []

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

    def admin_get_all_tickets(self):
        query = "admin_get_all_tickets"
        args = []
        tickets = self.query_database(query, args)
        ticket_objects = []

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



    def get_all_tickets(self, net_id = None, is_student = True):
        tickets = None
        if (is_student):
            query = "user_get_all_tickets"
            args = [net_id]
            tickets = self.query_database(query, args)
        else:
            query = "admin_get_all_tickets"
            tickets = self.query_database(query)

        ticket_table = self.generate_ticket_objects(tickets)
        return ticket_table


    def get_all_tickets_by_ticket_id(self, ticket_id, net_id = None, is_student = True): 
        tickets = None
        if (is_student):
            query = "get_ticket_id"
            args = [ticket_id]
            tickets = self.query_database(query, args)
        else:
            query = "get_ticket_id"
            args = [ticket_id]
            tickets = self.query_database(query, args)
            
        ticket_table = self.generate_ticket_objects(tickets)
        return ticket_table

    def get_individual_ticket_by_ticket_id(self, ticket_id, net_id = None, is_student = True): 
        ticket = None
        if (is_student):
            query = "view_individual_ticket"
            args = [ticket_id]
            ticket = self.query_database(query, args)
        else:
            query = "view_individual_ticket"
            args = [ticket_id]
            ticket = self.query_database(query, args)
            
        ticket_table = self.generate_ticket_object(ticket)
        return ticket_table


    def get_all_tickets_by_severity(self, severity, net_id = None, is_student = True): 
        tickets = None
        if (is_student):
            query = "user_get_all_tickets_severity"
            args = [net_id, severity]
            tickets = self.query_database(query, args)
        else:
            query = "admin_get_all_tickets_severity"
            args = [severity]
            tickets = self.query_database(query, args)

        ticket_table = self.generate_ticket_objects(tickets)
        return ticket_table


    def get_all_tickets_by_status(self, status, net_id = None, is_student = True): 
        tickets = None
        if (is_student):
            query = "user_get_all_tickets_status"
            args = [net_id, status]
            tickets = self.query_database(query, args)
        else:
            query = "admin_get_all_tickets_status"
            args = [status]
            tickets = self.query_database(query, args)

        ticket_table = self.generate_ticket_objects(tickets)
        return ticket_table


    def get_all_tickets_by_net_id(self, net_id, is_student = True): 
        tickets = None
        query = "admin_get_all_tickets_net_id"
        args = [net_id]
        tickets = self.query_database(query, args)

        ticket_table = self.generate_ticket_objects(tickets)
        return ticket_table

    def user_create_ticket(self, user_id_param, title_param, description_param, location_param, building_name_param, unit_number_param, additional_notes_param):
        print("DEBUG: create_ticket Function Called.")
        commit = "user_create_ticket"
        values = [user_id_param, title_param, description_param, location_param, building_name_param, unit_number_param, additional_notes_param]
        
        print(self.commit_database(commit, values))

    def generate_ticket_objects(self, tickets):
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

    def generate_ticket_object(self, tickets):

        for ticket in tickets:
            ticket_id = ticket[0]
            ticket_title = ticket[1]
            ticket_status = ticket[2]
            ticket_created = ticket[3].strftime("%m %d %Y %H %M %S")
            ticket_location = ticket[4]
            ticket_severity = ticket[5]
            ticket_description = ticket[6]
            ticket_building_name = ticket[7]
            ticket_unit_number = ticket[8]
            ticket_additional_notes = ticket[9]

            ticket_json = self.serialize_ticket(
                id = ticket_id,
                title = ticket_title,
                status =  ticket_status, 
                created = ticket_created,
                location = ticket_location,
                severity = ticket_severity,
                description=ticket_description,
                building_name=ticket_building_name,
                unit_number=ticket_unit_number,
                additional_notes=ticket_additional_notes,
            )

        
        return ticket_json

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
        print("DEBUG: TicketController Loaded.")
        #print(self.get_all_tickets_by_status('araamzaremehjardi', True, 'Received'))
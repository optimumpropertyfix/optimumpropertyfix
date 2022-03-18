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


class AppointmentController:
    def view_all_appointments(self, net_id = None, is_student = True):
        appointments = None
        if (is_student):
            query = "user_view_all_appointments"
            args = [net_id]
            appointments = self.query_database(query, args)
        else:
            query = "admin_view_all_appointments"
            appointments = self.query_database(query)

        appointments_table = self.generate_appointment_objects(appointments)
        return appointments_table       
   
   
    def view_individual_appointment(self, ticket_id = None, is_student = True):
        appointments = None
        if (is_student):
            query = "user_view_individual_appointment"
            args = [ticket_id]
            appointments = self.query_database(query, args)
        else:
            query = "admin_view_individual_appointment"
            appointments = self.query_database(query)

        appointments_table = self.generate_appointment_objects(appointments)
        return appointments_table 


    def view_all_appointments_by_datetime(self):
        appointments = None
        query = "admin_view_all_appointments_by_datetime"
        appointments = self.query_database(query)

        appointments_table = self.generate_appointment_objects(appointments)
        return appointments_table 
        

    def view_all_appointments_by_status(self, status = None, is_student = True):
        appointments = None
        query = "admin_view_all_appointments_by_status"
        args = [status]
        appointments = self.query_database(query, args)

        appointments_table = self.generate_appointment_objects(appointments)
        return appointments_table 


    def generate_appointment_objects(self, appointments):
        appointment_objects = list()

        for appointment in appointments:
            appointment_id = appointment[0]
            appointment_start_time = appointment[1].strftime("%m %d %Y %H %M %S")
            appointment_end_time = appointment[2].strftime("%m %d %Y %H %M %S")
            appointment_status = appointment[3]
            appointment_is_cancelled = appointment[4]
            appointment_cancelled_reason = appointment[5]
            
            appointment_json = self.serialize_appointment(
                id = appointment_id,
                start_time = appointment_start_time,
                end_time = appointment_end_time,
                status = appointment_status,
                is_cancelled = appointment_is_cancelled, 
                cancelled_reason = appointment_cancelled_reason,

            )
            appointment_objects.append(appointment_json)
        
        return appointment_objects

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

            for result in cursor.stored_results():
                query_result = list(result.fetchall())

        except Error as error:
            print(error)

        finally:
            cursor.close()
            connection.close()
            return query_result


    def serialize_appointment(self, id = None, start_time = None, end_time = None, status = None,  is_cancelled = None, cancelled_reason = None):
        appointment = {
            "appointment_id": id,
            "appointment_start_time": start_time,
            "appointment_end_time": end_time,
            "appointment_status": status,
            "appointment_is_cancelled": is_cancelled,
            "appointment_cancelled_reason": cancelled_reason,
        }
        return appointment
         
    def __init__(self):
        print("DEBUG: Appointment Controller Loaded.")
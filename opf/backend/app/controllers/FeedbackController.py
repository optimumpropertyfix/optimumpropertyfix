from datetime import date
from mysql.connector import MySQLConnection, Error
from app.DatabaseConfiguration import database_configuration
from flask import Flask, jsonify 
from time import strftime
import json

class FeedbackController:

    def view_all_feedback(self): 
        feedbacks = None
        query = "view_all_feedback"
        feedbacks = self.query_database(query)

        feedback_table = self.generate_feedback_objects(feedbacks)
        return feedback_table


    def user_view_individual_feedback(self, ticket_id = None): 
        feedbacks = None
        query = "user_view_individual_feedback"
        args = [ticket_id]
        feedbacks = self.query_database(query, args)

        feedback_table = self.generate_feedback_object(feedbacks)
        return feedback_table


    def generate_feedback_objects(self, feedbacks):
        feedback_objects = list()

        for feedback in feedbacks:
            feedback_id = feedback[0]
            feedback_satisfaction_rating = feedback[1]
            feedback_message = feedback[2]
            feedback_date = feedback[3].strftime("%m %d %Y %H %M %S")
            feedback_admin_date = feedback[4].strftime("%m %d %Y %H %M %S")
            feedback_admin_message = feedback[5]

            feedback_json = self.serialize_feedback(
                id = feedback_id,
                satisfaction_rating = feedback_satisfaction_rating, 
                message = feedback_message,
                date = feedback_date, 
                admin_date=feedback_admin_date, 
                admin_message=feedback_admin_message,
            )
            feedback_objects.append(feedback_json)
        
        return feedback_objects

    def generate_feedback_object(self, feedbacks):
        for feedback in feedbacks:
            feedback_id = feedback[0]
            feedback_message = feedback[1]
            feedback_satisfaction_rating = feedback[2]
            feedback_date = feedback[3].strftime("%m %d %Y %H %M %S")
            feedback_admin_date = feedback[4].strftime("%m %d %Y %H %M %S")
            feedback_admin_message = feedback[5]

            feedback_json = self.serialize_feedback(
                id = feedback_id,
                satisfaction_rating = feedback_satisfaction_rating, 
                message = feedback_message,
                date = feedback_date, 
                admin_date=feedback_admin_date, 
                admin_message=feedback_admin_message,
            )
        return feedback_json


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


    def serialize_feedback(self, id = None, satisfaction_rating = None, message = None, date = None, admin_date = None, admin_message = None):
        feedback = {
            "feedback_id": id,
            "feedback_message": message, 
            "feedback_satisfaction" : satisfaction_rating, 
            "feedback_date": date,  
            "feedback_admin_date": admin_date, 
            "feedback_admin_message": admin_message, 
        }
        return feedback


    def __init__(self):
        print("DEBUG: Feedback Controller Loaded.")
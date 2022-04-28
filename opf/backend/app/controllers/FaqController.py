from mysql.connector import MySQLConnection, Error
from app.DatabaseConfiguration import database_configuration
from flask import Flask, jsonify 
import json


class FaqController:

    # Edit individual FAQ for admin - /admin/forms/frequently_asked_questions/:faq_id
    def admin_edit_individual_faq(self, faq_id_param, faq_question_param, faq_answer_param):

        commit = "edit_individual_faq"
        values = [faq_id_param, faq_question_param, faq_answer_param]

        return self.commit_database(commit, values)
    
    # View individual FAQ for admin - /admin/forms/frequently_asked_questions/:faq_id
    def admin_view_individual_faq(self, faq_id_param):

        query = "view_individual_faq"
        args = [faq_id_param]
        faqs = self.query_database(query, args=args)

        faq_object = None

        for faq in faqs:
            faq_answer = faq[0]
            faq_question = faq[1]
            user_first_name = faq[2]
            user_last_name = faq[3]
            faq_id = faq[4]
            
            faq_json = self.serialize_faq(
                question = faq_question,
                answer = faq_answer,
                id = faq_id,
                first_name = user_first_name,
                last_name = user_last_name
            )

            faq_object = faq_json

        return faq_object

    # Get all the FAQ for admin - /admin/forms/announcements
    def admin_view_all_faq(self):

        faqs = None
        query = "view_all_faq"
        faqs = self.query_database(query)

        faqs_objects = []

        for faq in faqs:
            faq_question = faq[0]
            faq_answer = faq[1]
            user_first_name = faq[2]
            user_last_name = faq[3]
            faq_id = faq[4]
            
            faq_json = self.serialize_faq(
                question = faq_question,
                answer = faq_answer,
                id = faq_id,
                first_name = user_first_name,
                last_name = user_last_name
            )
            faqs_objects.append(faq_json)
        
        return faqs_objects

    # Get all the FAQ for admin - /admin/forms/announcements/create
    def admin_create_faq(self, user_id_param, faq_question_param, faq_answer_param):

        commit = "admin_create_faq"
        values = [user_id_param, faq_question_param, faq_answer_param]

        return self.commit_database(commit, values)


    '''
    def view_all_faqs(self):
        faqs = None
        query = "view_all_faq"
        faqs = self.query_database(query)

        faq_table = self.generate_faq_objects(faqs)
        return faq_table
        '''

    '''
    def view_individual_faq(self, faq_id = None):
        faqs = None
        query = "view_individual_faq"
        args = [faq_id]
        faqs = self.query_database(query, args)

        faq_table = self.generate_faq_objects(faqs)
        return faq_table
        '''


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

    def generate_faq_objects(self, faqs):
        faq_objects = list()

        for faq in faqs:
            faq_id = faq[0]
            faq_question = faq[1]
            faq_answer = faq[2]

            
            faq_json = self.serialize_faq(
                id = faq_id,
                question = faq_question, 
                answer = faq_answer, 

            )
            faq_objects.append(faq_json)
        
        return faq_objects


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


    def serialize_faq(self, id = None, question = None, answer = None, first_name = None, last_name = None):
        faq = {
            "faq_id": id,
            "faq_answer" : answer, 
            "faq_question": question,
            "user_first_name": first_name,
            "user_last_name": last_name          
        }
        return faq
         
    def __init__(self):
        print("DEBUG: FAQ Controller Loaded.")
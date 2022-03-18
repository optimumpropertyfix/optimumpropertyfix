from mysql.connector import MySQLConnection, Error
from app.DatabaseConfiguration import database_configuration
from flask import Flask, jsonify 
import json


class FaqController:
    def view_all_faqs(self):
        faqs = None
        query = "view_all_faq"
        faqs = self.query_database(query)

        faq_table = self.generate_faq_objects(faqs)
        return faq_table


    def view_individual_faq(self, faq_id = None):
        faqs = None
        query = "view_individual_faq"
        args = [faq_id]
        faqs = self.query_database(query, args)

        faq_table = self.generate_faq_objects(faqs)
        return faq_table


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


    def serialize_faq(self, id = None, question = None, answer = None):
        faq = {
            "faq_id": id,
            "faq_name" : question, 
            "faq_abbreviation": answer,          
        }
        return faq

         
    def __init__(self):
        print("DEBUG: FAQ Controller Loaded.")
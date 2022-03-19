from mysql.connector import MySQLConnection, Error
from app.DatabaseConfiguration import database_configuration
from flask import Flask, jsonify 
import json
from time import strftime


class UserController:
    def view_current_user(self, net_id):
        users = None
        query = "view_current_user"
        args = [net_id]
        users = self.query_database(query, args)

        user_table = self.generate_user_objects(users)
        return user_table

    def generate_user_objects(self, users):
        user_objects = list()

        for user in users:
            user_id = user[0]
            user_first_name = user[1]
            user_last_name = user[2]
            user_is_student = user[3]
            user_contact_email = user[4]
            user_net_id = user[5]
            user_nshe_id = user[6]
            user_gender = user[7]
            user_year = user[8]
            user_account_created = user[9].strftime("%m %d %Y %H %M %S")
            
            user_json = self.serialize_user(
                id = user_id,
                first_name = user_first_name,
                last_name = user_last_name,
                is_student = user_is_student, 
                contact_email = user_contact_email, 
                net_id = user_net_id, 
                nshe_id = user_nshe_id, 
                gender = user_gender, 
                year = user_year, 
                account_created = user_account_created,  
            )
            user_objects.append(user_json) 
              
        return user_objects


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

    def serialize_user(self, id = None, first_name = None, last_name = None, is_student = None, contact_email = None, net_id = None, nshe_id = None, gender = None, year = None, account_created = None):
        user = {
            "user_id": id,
            "user_first_name": first_name, 
            "user_last_name": last_name, 
            "user_is_student": is_student, 
            "user_contact_email": contact_email, 
            "user_net_id": net_id, 
            "user_nshe_id": nshe_id,
            "user_gender": gender, 
            "user_year": year, 
            "user_account_created": account_created,
        }
        return user

    def __init__(self):
        self.isStudent = None
        print("DEBUG: User Controller Loaded.")
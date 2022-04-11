from mysql.connector import MySQLConnection, Error
from app.DatabaseConfiguration import database_configuration
from flask import Flask, jsonify 
import json
from time import strftime

from flask_jwt_extended import create_access_token


class UserController:
    def view_current_user(self, net_id):
        users = None
        query = "view_current_user"
        args = [net_id]
        users = self.query_database(query, args)

        user_table = self.generate_user_objects(users)
        return user_table

    def view_all_users(self):
        users = None
        query = "view_all_users"
        users = self.query_database(query)

        user_table = self.generate_user_objects(users)
        return user_table

    def view_individual_user(self, user_id):
        users = None
        query = "view_individual_user"
        args = [user_id]
        users = self.query_database(query, args)

        user_table = self.generate_user_objects(users)
        return user_table




    def generate_user_objects(self, users):
        user_objects = list()

        for user in users:
            user_id = user[0]
            user_first_name = user[1]
            user_last_name = user[2]
            user_contact_email = user[3]
            user_net_id = user[4]
            user_nshe_id = user[5]
            user_gender = user[6]
            user_year = user[7]
            user_account_created = user[8].strftime("%m %d %Y %H %M %S")
            
            user_json = self.serialize_user(
                id = user_id,
                first_name = user_first_name,
                last_name = user_last_name,
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

    def serialize_user(self, id = None, first_name = None, last_name = None, contact_email = None, net_id = None, nshe_id = None, gender = None, year = None, account_created = None, is_student = None, access_token = None):
        user = {
            "user_id": id,
            "user_first_name": first_name, 
            "user_last_name": last_name, 
            "user_contact_email": contact_email, 
            "user_net_id": net_id, 
            "user_nshe_id": nshe_id,
            "user_gender": gender, 
            "user_year": year, 
            "user_account_created": account_created,
            "user_is_student": is_student,
            "access_token": access_token
        }
        return user

    def create_new_user(self, first_name_param, last_name_param, contact_email_param, net_id_param, nshe_id_param, gender_param, year_param, password_param):
        
        print("DEBUG: create_new_user Function Called.")
        commit = "create_new_user"
        values = [first_name_param, last_name_param, contact_email_param, nshe_id_param, net_id_param, gender_param, year_param, password_param]
        # -1 is for database error
        print(self.commit_database(commit, values))

    def reset_user_password(self, net_id_param, nshe_id_param, password_param):

        print("DEBUG: reset_user_password Function Called.")
        commit = "user_reset_password"
        values = [net_id_param, nshe_id_param, password_param]
        print(self.commit_database(commit, values))

    def login_user(self, net_id_param, password_param):

        print("DEBUG: login_user Function Called.")

        query = "account_login"
        values = [net_id_param, password_param]
        basic_user_information = self.query_database(query, values)[0]
        
        user_first_name = basic_user_information[0]
        user_last_name = basic_user_information[1]
        user_nshe_id = basic_user_information[2]
        user_net_id = basic_user_information[3]
        user_is_student = basic_user_information[4]
        access_token = create_access_token(identity = [user_first_name, user_last_name, user_nshe_id, user_net_id, user_is_student])

        basic_user_information = self.serialize_user(is_student=user_is_student,
        access_token=access_token)

        return basic_user_information


    def __init__(self):
        print("DEBUG: User Controller Loaded.")
from time import strftime
from turtle import title
from mysql.connector import MySQLConnection, Error
from app.DatabaseConfiguration import database_configuration
from flask import Flask, jsonify 
import json


class AnnouncementController:

    #query to view all announcements: 
        # no param
        # newest 1st
    def view_all_announcements(self):
        announcements = None
        query = "view_all_announcements"
        announcements = self.query_database(query)

        announcement_table = self.generate_announcement_objects(announcements)
        return announcement_table

    # Edit individual announcement for admin - /admin/forms/announcements/:announcement_id
    def admin_edit_individual_announcement(self, announcement_id_param, announcement_title_param, announcement_message_param):

        commit = "edit_individual_announcement"
        values = [announcement_id_param, announcement_title_param, announcement_message_param]

        return self.commit_database(commit, values)
    
    # View individual announcement for admin - /admin/forms/announcements/:announcement_id
    def admin_view_individual_announcement(self, announcement_id_param):

        query = "admin_view_announcement_by_id"
        args = [announcement_id_param]
        announcements = self.query_database(query, args=args)

        announcement_object = None

        for announcement in announcements:
            announcement_id = announcement[0]
            announcement_title = announcement[1]
            announcement_message = announcement[2]
            announcement_date = announcement[3].strftime("%m %d %Y %H %M %S")

            
            announcement_json = self.serialize_announcement(
                title = announcement_title,
                message = announcement_message,
                date = announcement_date,
                id = announcement_id,
            )

            announcement_object = announcement_json

        return announcement_object

    # Get all the announcements for admin - /admin/forms/announcements
    def admin_view_all_announcements(self):

        announcements = None
        query = "admin_view_all_announcements"
        announcements = self.query_database(query)

        announcements_objects = []

        for announcement in announcements:
            announcement_title = announcement[0]
            announcement_message = announcement[1]
            announcement_date = announcement[2].strftime("%m %d %Y %H %M %S")
            announcement_id = announcement[3]
            announcement_first_name = announcement[4]
            announcement_last_name = announcement[5]

            
            announcement_json = self.serialize_announcement(
                title = announcement_title,
                message = announcement_message,
                date = announcement_date,
                id = announcement_id,
                first_name = announcement_first_name,
                last_name = announcement_last_name
            )

            announcements_objects.append(announcement_json)
        
        return announcements_objects

    # Get all the announcements for admin - /admin/forms/announcements/create
    def admin_create_announcement(self, user_id_param, announcement_title_param, announcement_message_param):

        commit = "admin_create_announcement"
        values = [announcement_title_param, announcement_message_param, user_id_param]

        return self.commit_database(commit, values)

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



    '''
    #NOT BEING USED!!! (NOT SURE IF TESTED?)
    #query to view announcements by  announcement ID: 
        # IN: announcement_id_parameter INT
        # RETURN: announcement.id, announcement_title, announcement_message, announcement_date 
    def view_announcement_by_id(self, announcement_id = None):
        announcements = None
        query = "view_announcement_by_id"
        args = [announcement_id]
        announcements = self.query_database(query, args)
        
        announcement_table = self.generate_announcement_objects(announcements)
        return announcement_table 
    '''


    '''
    #NOT BEING USED!!! (NOT SURE IF TESTED?)
    #query to edit announcement: 
        # IN: announcement_id_parameter INT, title_parameter VARCHAR(255), message_parameter VARCHAR(255)
    def edit_individual_announcement(self, announcement_id = None, title = None, message = None):
        announcements = None
        query = "edit_individual_announcement"
        args = [announcement_id, title, message]
        announcements = self.query_database(query, args)

        announcements_table = self.generate_announcement_objects(announcements)
        return announcements_table '''


    def generate_announcement_objects(self, announcements):
        announcement_objects = list()

        for announcement in announcements:
            announcement_id = announcement[0]
            announcement_title = announcement[1]
            announcement_message = announcement[2]
            announcement_date= announcement[3].strftime("%m %d %Y %H %M %S")
            
            announcement_json = self.serialize_announcement(
                id = announcement_id,
                title = announcement_title,
                message = announcement_message,
                date = announcement_date,
            )
            announcement_objects.append(announcement_json)
        
        return announcement_objects

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


    def serialize_announcement(self, id = None, title = None, message = None, date = None, first_name = None, last_name = None):
        announcement = {
             "announcement_id": id,
            "announcement_title": title,
            "announcement_message": message,
            "announcement_date": date,
            "announcement_first_name": first_name,
            "announcement_last_name": last_name,
        }
        return announcement
         
    def __init__(self):
        print("DEBUG: Announcement Controller Loaded.")
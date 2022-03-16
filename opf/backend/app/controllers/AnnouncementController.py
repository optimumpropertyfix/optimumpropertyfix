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


class AnnouncementController:
    def view_all_announcements(self):
        announcements = None
        query = "view_all_announcements"
        announcements = self.query_database(query)

        announcement_table = self.generate_announcement_objects(announcements)
        return announcement_table


    def view_latest_announcements(self):
        announcements = None
        query = "view_latest_announcements"
        announcements = self.query_database(query)

        announcement_table = self.generate_announcement_objects(announcements)
        return announcement_table


    def view_announcement_by_id(self, announcement_id = None):
        announcements = None
        query = "view_announcement_by_id"
        args = [announcement_id]
        announcements = self.query_database(query, args)
        

        announcement_table = self.generate_announcement_objects(announcements)
        return announcement_table 

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
            # print out the result

            for result in cursor.stored_results():
                query_result = list(result.fetchall())


        except Error as error:
            print(error)


        finally:
            cursor.close()
            connection.close()
            return query_result


    def serialize_announcement(self, id = None, title = None, message = None, date = None):
        announcement = {
             "announcement_id": id,
            "announcement_title": title,
            "announcement_message": message,
            "announcement_date": date,
        }
        return announcement
         
    def __init__(self):
        print("DEBUG: Announcement Controller Loaded.")
        #print(self.view_all_announcements())
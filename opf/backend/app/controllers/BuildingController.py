from mysql.connector import MySQLConnection, Error
from app.DatabaseConfiguration import database_configuration
from flask import Flask, jsonify 
import json


class BuildingController:

    def view_individual_dormitory(self, building_id_param):

        buildings = None
        query = "view_individual_dormitory"
        args = [building_id_param]
        buildings = self.query_database(query, args=args)

        building_object = None

        for building in buildings:
            building_name = building[0]
            building_address = building[1]
            building_abbreviation = building[2]
            building_year = building[3]
            building_map_number = building[4]
            building_capacity = building[5]
            
            building_json = self.serialize_building(
                address=building_address,
                year=building_year,
                name = building_name, 
                abbreviation = building_abbreviation, 
                capacity = building_capacity, 
                map_number = building_map_number,
            )

            building_object = building_json

        return building_object


    def edit_individual_dormitory(self, building_id_param, building_name_param, building_abbreviation_param, building_year_param, building_address_param, building_capacity_param, building_map_number_param):
        
        commit = "edit_individual_dormitory"
        values = [building_id_param, building_name_param, building_abbreviation_param, building_year_param, building_address_param, building_capacity_param, building_map_number_param]

        return self.commit_database(commit, values) 

    def admin_create_dormitory(self, building_name_param, building_abbreviation_param, building_map_number_param, building_address_param, building_year_param, building_capacity_param):

        commit = "admin_create_dormitory"
        values = [building_name_param, building_abbreviation_param, building_map_number_param, building_address_param, building_year_param, building_capacity_param]

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

    def view_all_dormitories(self):
        buildings = None
        query = "view_all_dormitories"
        buildings = self.query_database(query)

        building_objects = []

        for building in buildings:
            building_name = building[0]
            building_abbreviation = building[1]
            building_map_number = building[2]
            building_capacity = building[3]
            building_id = building[4]
            
            building_json = self.serialize_building(
                id = building_id,
                name = building_name, 
                abbreviation = building_abbreviation, 
                capacity = building_capacity, 
                map_number = building_map_number,
            )
            building_objects.append(building_json)

        return building_objects
    

    def view_individual_building(self, building_id = None):
        buildings = None
        query = "admin_view_individual_building"
        args = [building_id]
        buildings = self.query_database(query, args)

        building_table = self.generate_building_objects(buildings)
        return building_table

    def generate_building_objects(self, buildings):
        building_objects = list()

        for building in buildings:
            building_id = building[0]
            building_name = building[1]
            building_abbreviation = building[2]
            building_year = building[3]
            building_address = building[4]
            building_capacity = building[5]
            building_map_number = building[5]
            
            building_json = self.serialize_building(
                id = building_id,
                name = building_name, 
                abbreviation = building_abbreviation, 
                year = building_year, 
                address = building_address, 
                capacity = building_capacity, 
                map_number = building_map_number,
            )
            building_objects.append(building_json)
        
        return building_objects


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


    def serialize_building(self, id = None, name = None, abbreviation = None, year = None, address = None , capacity = None, map_number = None):
        building = {
            "building_id": id,
            "building_name" : name, 
            "building_abbreviation": abbreviation, 
            "building_year" : year, 
            "building_address": address, 
            "building_capacity" : capacity,
            "building_map_number": map_number,         
        }
        return building

    def __init__(self):
        print("DEBUG: building Controller Loaded.")
from mysql.connector import MySQLConnection, Error
from app.DatabaseConfiguration import database_configuration
from flask import Flask, jsonify 
import json


class BuildingController:

    def view_all_buildings(self):
        buildings = None
        query = "admin_view_all_buildings"
        buildings = self.query_database(query)

        building_table = self.generate_building_objects(buildings)
        return building_table
    

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
            "building_ capacity" : capacity,
             "building_map_number": map_number,         
        }
        return building

         
    def __init__(self):
        print("DEBUG: building Controller Loaded.")
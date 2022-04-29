from mysql.connector import MySQLConnection, Error
from app.DatabaseConfiguration import database_configuration
from flask import Flask, jsonify 
import json


class UnitController:

    def admin_create_unit(self, unit_building_param, unit_type_param, unit_number_param, unit_occupancy_param):

        commit = "admin_create_unit"
        values = [unit_building_param, unit_type_param, unit_number_param, unit_occupancy_param]

        return self.commit_database(commit, values)

    def view_dormitory_units(self, building_id_param):
        units = None
        query = "view_dormitory_units"
        args = [building_id_param]
        units = self.query_database(query, args)

        unit_objects = []

        for unit in units:
            unit_number = unit[0]
            unit_type = unit[1]
            unit_occupancy = unit[2]
            unit_id = unit[3]

            unit_json = self.serialize_unit(
                id = unit_id,
                type = unit_type,
                number = unit_number,
                occupancy = unit_occupancy,
            )
            unit_objects.append(unit_json) 

        return unit_objects

    def view_all_units(self, building_id = None):
        units = None
        query = "view_all_units"
        args = [building_id]
        units = self.query_database(query, args)

        unit_table = self.generate_unit_objects(units)
        return unit_table


    def view_individual_unit(self, building_id = None, unit_id = None):
        units = None
        query = "view_individual_unit"
        args = [building_id, unit_id]
        units = self.query_database(query, args)

        unit_table = self.generate_unit_objects(units)
        return unit_table


    def generate_unit_objects(self, units):
        unit_objects = list()

        for unit in units:
            unit_id = unit[0]
            unit_type = unit[1]
            unit_number = unit[2]
            unit_occupancy = unit[3]

            unit_json = self.serialize_unit(
                id = unit_id,
                type = unit_type,
                number = unit_number,
                occupancy = unit_occupancy,
            )
            unit_objects.append(unit_json) 

        return unit_objects


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

    def serialize_unit(self, id = None, type = None, number = None, occupancy = None):
        unit = {
            "unit_id": id,
            "unit_type": type, 
            "unit_number": number,
            "unit_occupancy": occupancy,
        }
        return unit


    def __init__(self):
        print("DEBUG: Unit Controller Loaded.")
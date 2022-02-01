#####################################################################################################
# Creating a new room model
#####################################################################################################
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
#from flask_migrate import Migrate
from api import database

class Room(database.Model):
    __tablename__ = 'room'
    id = database.Column(database.Integer, primary_key = True)
    #building = database.Column(database.Integer, database.ForeignKey('building.id'), nullable = False)
    type_room = database.Column(database.String(50), nullable = False, unique = True)
    number = database.Column(database.Integer, nullable = False, unique = True)
    location = database.Column(database.String(50), nullable = False, unique = True)

    def __init__(self, type_room, number, location):
        #self.building = building
        self.type_room = type_room
        self.number = number
        self.location = location
    
    #for debugging
    def __repr__(self):
        return f'[Room number {self.number} with room type {self.type_room} with issue in location: {self.location}]'

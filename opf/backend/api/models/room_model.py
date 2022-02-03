
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from api import database
#####################################################################################################
# Creating a new ticket model
#####################################################################################################
class Room(database.Model):
    __tablename__ = 'room'
    id = database.Column(database.Integer, primary_Key = True)
    building = database.Column(database.Integer, database.ForeignKey('building.id'), nullable = False)
    type_room = database.Colomn(database.String(50), nullable = False, unique = True)
    number = database.Colomn(database.Integer, nullable = False, unique = True)
    location = database.Colomn(database.String(50), nullable = False, unique = True)

    def __init__(self, building, type_room, number, location):
        self.building = building
        self.type_room = type_room
        self.number = number
        self.location = location
    
    #for debugging
    def __repr__(self):
        return f'Room number {self.number} with room type {self.type_room} in building {self.building} with location {self.location}'

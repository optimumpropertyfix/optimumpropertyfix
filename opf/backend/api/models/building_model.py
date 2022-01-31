from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from api import database
#####################################################################################################
# Creating a new ticket model
#####################################################################################################
class Building(database.Model):
    __tablename__ = 'building'
    id = database.Column(database.Integer, primary_Key = True)
    room = database.Column(database.Integer, database.ForeignKey('room.id'), nullable = False)
    name = database.Colomn(database.String(50), nullable = False, unique = True)
    number = database.Colomn(database.Integer, nullable = False, unique = True)
    year = database.Column(database.Integer,nullable = False)
    date_renovation = database.Column(database.DateTime, nullabble = False)
    isRenovated = database.Column(database.Boolean)
    tags = database.Colomn(database.Integer, database.ForeignKey('tag.id'))

    #relationship
    building_room = database.relationship("Room", backref= "building", lazy= "dynamic", cascade="all, delete")

    def __init__(self, room, name, number, year, date_renovation, isRenovated, tags): 
        self.room = room
        self.name = name
        self.number = number
        self.year = year
        self.date_renovation = date_renovation
        self.isRenovated = isRenovated
        self.tags = tags

    #for debugging
    def __repr__(self):
        return f' Building {self.name} is renovated {self.isRenovated} with room {self.room} and number {self.number} was built in {self.year} & renovated {self.date_renovation}'

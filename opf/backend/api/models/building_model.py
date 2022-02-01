from flask import Flask
from flask_sqlalchemy import SQLAlchemy
#from flask_migrate import Migrate
from api import database
#####################################################################################################
# Creating a new building model
#####################################################################################################
class Building(database.Model):
    __tablename__ = 'building'
    id = database.Column(database.Integer, primary_key = True)
    #room = database.Column(database.Integer, database.ForeignKey('room.id'), nullable = False)
    name = database.Column(database.String(50), nullable = False, unique = True)
    number = database.Column(database.Integer, nullable = False, unique = True)
    year = database.Column(database.Integer,nullable = False)
    date_renovation = database.Column(database.DateTime, nullable = False)
    isRenovated = database.Column(database.Boolean)
    #tags = database.Colomn(database.Integer, database.ForeignKey('tag.id'))

    #Relationship
        # ONE to MANY
        # Building to many ___.
    #building_room = database.relationship('Room', backref= 'building', uselist = False)
        # ONE to One
        # Building to one ___.

    def __init__(self, name, number, year, date_renovation, isRenovated): 
        #self.room = room
        self.name = name
        self.number = number
        self.year = year
        self.date_renovation = date_renovation
        self.isRenovated = isRenovated
        #self.tags = tags

    #for debugging
    def __repr__(self):
        return f'[Building {self.name} is renovated {self.isRenovated} and number {self.number} was built in {self.year} & renovated {self.date_renovation}]'

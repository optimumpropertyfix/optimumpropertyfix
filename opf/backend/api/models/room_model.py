
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from api import database

# Creating a new ticket model

class Room(database.Model):

    id = database.Column(database.Integer, primary_Key = True)
    building = database.Column(database.Integer, database.ForeignKey('building.id'), nullable = False)
    type_room = database.Colomn(database.String(50), nullable = False, unique = True)
    number = database.Colomn(database.Integer, nullable = False, unique = True)
    location = database.Colomn(database.String(50), nullable = False, unique = True)
    
    #for debugging
    #def __repr__(self):
        #return 

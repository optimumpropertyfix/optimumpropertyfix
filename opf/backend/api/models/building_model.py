
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from api import database

# Creating a new ticket model

class Building(db.Model):

    id = database.Column(database.Integer, primary_Key = True)
    room = database.Column(database.Integer, database.ForeignKey('room.id'), nullable = False)
    name = database.Colomn(database.String(50), nullable = False, unique True)
    number = database.Colomn(database.Integer, nullable = False, unique True)
    year = database.Column(database.Integer,nullable = False)
    date_renovation = database.Column(database.DateTime, nullabble = False)
    isRenovated = database.Column(database.Boolean)
    tags = database.Colomn(database.Integer, ForeignKey(tag.id))

    building_room = database.relationship("Room", backref= "building", lazy= "dynamic", cascade="all, delete")

    #for debugging
    #def __repr__(self):
    #    return 

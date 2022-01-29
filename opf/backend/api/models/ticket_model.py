
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from api import database

# Creating a new ticket model

class Ticket(database.Model):

    id = database.Column(database.Integer, primary_Key = True)
    creator = database.Colomn(database.Integer, database.ForeignKey('user.id'),nullable = False)
    building = database.Column(database.Integer. database.ForeignKey('building.id'), nullable = False)
    room = database.column(database.Integer, database.ForeignKey('room.id'), nullable = False)
    date = database.Colomn(database.DateTime, nullable = False)
    time = database.Colomn(database.Time, nullable = False)
    status = database.Colomn(database.String(25), nullable = False)
    severity_level = database.Colomn(database.String(25), nullable = False)
    priority_level = database.Colomn(database.String(25), nullable = False)
    description = database.Colomn(database.Text, nullable = False)
    title = database.Colomn(database.String(25), nullable = False)
    #tags = database.Colomn(database.Integer, ForeignKey(tag.id))
 
    ticket_building = database.relationship("Building", backref= "ticket", lazy= "dynamic")
    #ticket_tag = database.relationship("Tag", backref= "ticket", lazy= "dynamic", cascade="all, delete")

    #for debugging
    #def __repr__(self):
    #    return 


from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from api import database
#####################################################################################################
# Creating a new ticket model
#####################################################################################################
class Ticket(database.Model):
    __tablename__ = 'ticket'
    id = database.Column(database.Integer, primary_Key = True)
    creator = database.Colomn(database.Integer, database.ForeignKey('user.id'),nullable = False)
    building = database.Column(database.Integer, database.ForeignKey('building.id'), nullable = False)
    room = database.column(database.Integer, database.ForeignKey('room.id'), nullable = False)
    date = database.Colomn(database.DateTime, nullable = False)
    time = database.Colomn(database.Time, nullable = False)
    status = database.Colomn(database.String(25), nullable = False)
    severity_level = database.Colomn(database.String(25), nullable = False)
    priority_level = database.Colomn(database.String(25), nullable = False)
    description = database.Colomn(database.Text, nullable = False)
    title = database.Colomn(database.String(25), nullable = False)
    
    #relationship
    ticket_building = database.relationship("Building", backref= "ticket", lazy= "dynamic")

    def __init__(self, creator, building, room, date, time, status, severity_level, priority_level, description, title):
        self.creator = creator
        self.building = building
        self.room = room
        self.date= date
        self.time = time
        self.status = status
        self.severity_level = severity_level
        self.priority_level = priority_level
        self.description = description
        self. title = title

    #for debugging
    def __repr__(self):
        return f'<Ticket creator {self.creator} creates a ticket in {self.building}'
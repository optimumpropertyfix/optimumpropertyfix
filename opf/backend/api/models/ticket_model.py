#####################################################################################################
# Creating a new ticket model
#####################################################################################################
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
#from flask_migrate import Migrate
from api import database

class Ticket(database.Model):
    __tablename__ = 'ticket'
    id = database.Column(database.Integer, primary_key = True)
    #creator = database.Column(database.Integer, database.ForeignKey('user.id'),nullable = False)
    #building = database.Column(database.Integer, database.ForeignKey('building.id'), nullable = False)
    #room = database.Column(database.Integer, database.ForeignKey('room.id'), nullable = False)
    date = database.Column(database.DateTime, nullable = False)
    status = database.Column(database.String(25), nullable = False)
    severity_level = database.Column(database.String(25), nullable = False)
    description = database.Column(database.Text, nullable = False)
    title = database.Column(database.String(25), nullable = False)
    
    #Relationships 
        # ONE to MANY
        # Ticket to many ___.
    #ticket_tag = database.relationship('Tag', backref = 'ticket', lazy = 'dynamic')
        # ONE to ONE
        # Ticket to one ___.
    #ticket_building = database.relationship('Building', backref= 'ticket', useList = False)
    #ticket_room = database.relationship('Room', backref = 'ticket', useList = False)

    def __init__(self, date, status, severity_level, description, title):
        #self.creator = creator
        #self.building = building
        #self.room = room
        self.date= date
        self.status = status
        self.severity_level = severity_level
        self.description = description
        self. title = title

    #debug- string representation of ticket model
    def __repr__(self):
        return f'[Ticket date & time: {self.date}, status:{self.status}, severity_level:{self.severity_level}, description:{self.description}, title:{self.title}.]'

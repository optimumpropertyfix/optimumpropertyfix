from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from app import database
import datetime


class User(database.Model):
    __tablename__ = 'user'
    id = database.Column(database.Integer, primary_key = True)
    first_name = database.Column(database.VARCHAR(50), nullable = False)
    last_name = database.Column(database.VARCHAR(50), nullable = False)
    isStudent = database.Column(database.Boolean)
    isAdmin = database.Column(database.Boolean)
    email = database.Column(database.VARCHAR(50), nullable = False)
    net_id = database.Column(database.VARCHAR(50), nullable = False)
    nshe_id = database.Column(database.VARCHAR(50))
    gender = database.Column(database.Enum('M', 'F'), nullable = False)
    year = database.Column(database.Integer)
    password = database.Column(database.VARCHAR(50), nullable = False)


    ticketcreator = database.relationship('Ticket', backref= 'user', lazy = 'dynamic', cascade= "all, delete")


    def __init__(self, first_name, last_name, isStudent, isAdmin, email, net_id, nshe_id, gender, year, password):
        self.first_name = first_name
        self.last_name = last_name
        self.isStudent = isStudent
        self.isAdmin = isAdmin
        self.email = email
        self.net_id = net_id
        self.nshe_id = nshe_id
        self.gender = gender
        self.year = year
        self.password = password
 

    #debug- string representation of user model
    def __repr__(self):
        return f'<User {self.first_name} and {self.last_name} is a {self.gender} with an email {self.email} with net id {self.net_id}, nsheid {self.nshe_id} completed {self.year} years at UNR with password {self.password}'


class Ticket(database.Model):
    __tablename__ = 'ticket'
    id = database.Column(database.Integer, primary_key = True)
    creator_id = database.Column(database.Integer, database.ForeignKey('user.id'),nullable = False)
    date = database.Column(database.Date, nullable = False)
    status = database.Column(database.Text, nullable = False)
    severity_level = database.Column(database.Text, nullable = False)
    description = database.Column(database.Text, nullable = False)
    title = database.Column(database.Text, nullable = False)
    location = database.Column(database.Text, nullable = False)


    def __init__(self, creator_id, date, status, severity_level, description, title, location):
        self.creator_id = creator_id
        self.date= date
        self.status = status
        self.severity_level = severity_level
        self.description = description
        self. title = title
        self.location = location


    #debug- string representation of ticket model
    def __repr__(self):
        return f'[Ticket date & time: {self.date}, creator: {self.creator_id}, status:{self.status}, severity_level:{self.severity_level}, description:{self.description}, title:{self.title} located: {self.location}]'
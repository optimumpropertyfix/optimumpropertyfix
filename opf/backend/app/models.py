from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from app import database
import datetime


class User(database.Model):
    __tablename__ = 'user'
    id = database.Column(database.Integer, primary_key = True)
    first_name = database.Column(database.String(50), nullable = False)
    last_name = database.Column(database.String(50), nullable = False)
    isStudent = database.Column(database.Boolean, nullable = False)
    contact_email = database.Column(database.String(120), nullable = False)
    net_id = database.Column(database.String(50), nullable = False)
    nshe_id = database.Column(database.String(50))
    gender = database.Column(database.Enum('M', 'F'), nullable = False)
    year = database.Column(database.Integer)
    password = database.Column(database.String(50), nullable = False)


    ticketcreator = database.relationship('Ticket', backref= 'user', lazy = 'dynamic', cascade= "all, delete")


    def __init__(self, first_name, last_name, isStudent, contact_email, net_id, nshe_id, gender, year, password):
        self.first_name = first_name
        self.last_name = last_name
        self.isStudent = isStudent
        self.contact_email = contact_email
        self.net_id = net_id
        self.nshe_id = nshe_id
        self.gender = gender
        self.year = year
        self.password = password
 

    #debug- string representation of user model
    def __repr__(self):
        return f'<User {self.first_name} and {self.last_name} is a {self.gender} with an email {self.contact_email} with net id {self.net_id}, nsheid {self.nshe_id} completed {self.year} years at UNR with password {self.password}'


class Ticket(database.Model):
    __tablename__ = 'ticket'
    id = database.Column(database.Integer, primary_key = True)
    creator_id = database.Column(database.Integer, database.ForeignKey('user.id'),nullable = False)
    date = database.Column(database.DateTime, nullable = False, default = datetime.datetime.utcnow)
    status = database.Column(database.String(25), nullable = False)
    severity_level = database.Column(database.String(50), nullable = False)
    description = database.Column(database.Text, nullable = False)
    title = database.Column(database.Text, nullable = False)
    location = database.Column(database.String(50), nullable = False)
    additional_notes = database.Column(database.Text, nullable = True)
    facility_notes = database.Column(database.Text, nullable = True)


    def __init__(self, creator_id, date, status, severity_level, description, title, location, additional_notes, facility_notes):
        self.creator_id = creator_id
        self.date= date
        self.status = status
        self.severity_level = severity_level
        self.description = description
        self. title = title
        self.location = location
        self.additional_notes = additional_notes
        self._facility_notes = facility_notes


    #debug- string representation of ticket model
    def __repr__(self):
        return f'[Ticket date & time: {self.date}, creator: {self.creator_id}, status:{self.status}, severity_level:{self.severity_level}, description:{self.description}, title:{self.title} located: {self.location}, additional_notes: {self.additional_notes}, facility_notes: {self.facility_notes}]'


class Appointment(database.Model):
    __tablename__ = 'appointment'
    id = database.Column(database.Integer, primary_key = True)
    appointment_date = database.Column(database.DateTime, nullable = False)
    

    def __init__(self, appointment_date):
        self.appointment_date = appointment_date

    
    #debug- string representation of appointment model
    def __repr__(self):
         return f'[Appointment date:{self.appointment_date}]'


class Building(database.Model):
    __tablename__ = 'building'
    id = database.Column(database.Integer, primary_key = True)
    building_name = database.Column(database.String(50), nullable = False)
    building_unit = database.Column(database.Integer, database.ForeignKey('unit.id'),nullable = False)


    buildingroom = database.relationship('Unit', backref= database.backref('building', lazy = 'dynamic'))


    def __init__(self, building_name, building_unit):
        self.building_name = building_name
        self.building_unit = building_unit

    
    #debug- string representation of building model
    def __repr__(self):
        return f'[Building name: {self.building_name}, unit#: {self.building_unit}]'


class Unit(database.Model):
    __tablename__ = 'unit'
    id = database.Column(database.Integer, primary_key = True)
    unit_number = database.Column(database.Integer, nullable = False)
    

    def __init__(self, unit_number):
        self.unit_number = unit_number

    
    #debug- string representation of room model
    def __repr__(self):
        return f'[Unit number: {self.unit_number}]'


class Announcement(database.Model):
    __tablename__ = 'announcement'
    id = database.Column(database.Integer, primary_key = True)
    title = database.Column(database.String(50), nullable = False)
    content = database.Column(database.String(250), nullable = False)
    date = database.Column(database.DateTime, nullable = False, default = datetime.datetime.utcnow)

    def __init__(self, title, content, date):
        self.title = title
        self.content = content
        self.date= date

    
    #debug- string representation of building model
    def __repr__(self):
        return f'[Announcement title: {self.title}, content: {self.content}, date: {self.date}]'


class FAQ(database.Model):
    __tablename__ = 'faq'
    id = database.Column(database.Integer, primary_key = True)
    question = database.Column(database.String(50), nullable = False)
    answer = database.Column(database.String(250), nullable = False)


    def __init__(self, question, answer):
        self.question = question
        self.answer = answer

    
    #debug- string representation of building model
    def __repr__(self):
        return f'[FAQ question: {self.question}, answer: {self.answer}]'
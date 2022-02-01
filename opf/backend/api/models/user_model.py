from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from api import database
#####################################################################################################
# Creating a new user model
#####################################################################################################
class User(database.Model):
    __tablename__ = 'user'
    id = database.Column(database.Integer, primary_key = True)
    first_name = database.Column(database.String(50), nullable = False)
    last_name = database.Column(database.String(50), nullable = False)
    isStudent = database.Column(database.Boolean)
    isAdmin = database.Column(database.Boolean)
    email = database.Column(database.String(50), nullable = False)
    net_id = database.Column(database.String(50), nullable = False, unique =True)
    nshe_id = database.Column(database.String(50), unique =True )
    gender = database.Column(database.String(50), nullable = False)
    year = database.Column(database.Integer)
    password = database.Column(database.String(50), nullable = False)

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

    #Relationships:
        # ONE to MANY
        # User to many ___.
    user_ticket = database.relationship('Ticket', backref= 'user', lazy = 'dynamic')
    user_tag = database.relationship('Tag', backref = 'user', lazy = 'dynamic')
        # ONE to One
        # User to one ___.
   

    #debug- string representation of user model
    def __repr__(self):
        return f'<User {self.first_name} and {self.last_name} is a {self.gender} with an email {self.email} with net id {self.net_id}, nsheid {self.nshe_id} completed {self.year} years at UNR with password {self.password}'



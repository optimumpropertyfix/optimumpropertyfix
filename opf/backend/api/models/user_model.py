
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from api import database

# Creating a new user model

class User(db.Model):

    id = database.Column(database.Integer, primary_Key = True)
    first_name = database.Column(database.String(50), nullable = False)
    last_name = database.Column(database.String(50), nullable = False)
    isStudent = database.Column(database.Boolean)
    isAdmin = database.Column(database.Boolean)
    email = database.Column(database.String(50), nullable = False)
    net_id = database.Column(database.String(50), nullable = False, unique =True)
    nshe_id = database.Column(database.String(50), unique =True )
    gender = database.Column(database.String(50), nullable = True)
    year = database.Colomn(database.Integer)

    user_tickets = database.relationship("Ticket", backref= "user", lazy= "dynamic", cascade = "all, delete")

    #for debugging
    #def __repr__(self):
    #    return f'<User - {self.id}> {self.first_name}



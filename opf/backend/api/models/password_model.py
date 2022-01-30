from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from api import database

# Creating a new user model
print("MODEL ACCESSED - Password")
class Password(database.Model):
  
    password_id = database.Column(database.Integer, primary_key = True)
    creator = database.Colomn(database.Integer, database.ForeignKey('user.id'),nullable = False)
    password = database.Column(database.VARCHAR(50), nullable = False)
    password_question = database.Column(database.String(50), nullable = False)
    password_answer = database.Column(database.String(50), nullable = False)
    active = database.Column(database.Boolean)
    create_date = database.Column(database.DateTime, nullable= False)

    password_user = database.relationship("User", backref= "password", lazy= "dynamic", cascade = "all, delete")

    #def __repr__(self):
        #return f'<User - {self.id}> {self.first_name}'

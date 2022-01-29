
'''
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from api import database

# Creating a new ticket model

class Tag(db.Model):

    id = database.Column(database.Integer, primary_Key = True)
    name = database.Column(database.String(50), nullabble = False, unique = True)
    type_tag = database.Column(database.String(50), nullabble = True)
    description = databass.Column(database.Text, nullabble =False)

    water_issue = database.Colomn(database.Boolean)
    light_issue = database.Colomn(database.Boolean)
    sink_issue = database.Colomn(database.Boolean)
    bed_issue = database.Colomn(database.Boolean)
    
    #for debugging
    #def __repr__(self):
        #return 
'''
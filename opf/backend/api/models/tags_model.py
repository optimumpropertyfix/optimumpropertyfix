from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from api import database
#####################################################################################################
# Creating a new ticket model
#####################################################################################################
class Tag(database.Model):
    __tablename__ = 'tag'
    id = database.Column(database.Integer, primary_Key = True)
    creator = database.Colomn(database.Integer, database.ForeignKey('user.id'),nullable = False)
    name = database.Column(database.String(50), nullabble = False, unique = True)
    type_tag = database.Column(database.String(50), nullabble = True)
    description = database.Column(database.Text, nullabble =False)
    
    def __init__(self, creator, name, type_tag, description):
        self.creator = creator
        self.name = name
        self.type_tag = type_tag
        self.description = description

    #for debugging
    def __repr__(self):
        return f'Tags by {self.creator} with name {self.name}, type tag {self.type_tag}, and description {self.description}'
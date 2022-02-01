from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
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

    #Relationships
        # ONE to MANY
        # Tag to many ___.
    tag_user = database.relationship('User', backref = 'tag', lazy = 'dynamic') 
        # ONE to ONE
        # Tag to one ___.

    #for debugging
    def __repr__(self):
        return f'Tag by {self.creator} with name {self.name}, type tag {self.type_tag}, and description {self.description}.'
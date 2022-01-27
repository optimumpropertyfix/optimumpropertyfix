from flask import Flask

api = Flask(__name__)
api.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite://../database.db'
api.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
database = SQLAlchemy(api)

# from api import models, routes
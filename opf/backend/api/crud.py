from api import api, database
from api.models.user_model import User

##############################################################
# to run:$ python3 crud.py
# Can only run once-> delete sql database file that was created 
##############################################################


#Create an entry
name_user = User('Nasrin', 'Juana', False, True, 'njuana@gmail.com', 'nasrinjuanan', '23456789', 'Female', 4, 'dadada')
database.session.add(name_user)
database.session.commit()

#read ORM filter options 
all_users = User.query.all()
print(all_users)

#select by id
user_one = User.query.get(1)
print(user_one.first_name) #should be araam

#filter by name
user_araam = User.query.filter_by(first_name = 'Araam')
print(user_araam.all()) #should print debug statement from user model
#User {Araam} and {Zara} is a {Male} with an email ...'

# update year 
second_user = User.query.get(2)
second_user.year = 4
database.session.add(second_user)
database.session.commit()

#delete first user
first_user = User.query.get(1)
database.session.delete(first_user)
database.session.commit()

#print all users (Joanna & Nasrin)
all_users = User.query.all()
print(all_users)

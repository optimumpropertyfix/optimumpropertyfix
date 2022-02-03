#######################################################################################################################
# to run:$ python3 user_test.py
#######################################################################################################################
from api import api, database
from api.models.user_model import User
#######################################################################################################################
#create all the table models 
database.create_all()
araam = User('Araam', 'Zara', True, False, 'araam@gmail.com', 'aramzara', '01234567', 'male', 4, 'dance')
joanna = User('Joan', 'Lopez', False, True, 'joanlopez@gmail.com', 'joanlopez', '12345678', 'Female', 1, 'thizzle')
database.session.add_all([araam, joanna])
database.session.commit()

#should print here: 
print(araam.id)
print(joanna.id)

#adding new user:
name_user = User('Nasrin', 'Juana', False, True, 'njuana@gmail.com', 'nasrinjuanan', '23456789', 'Female', 4, 'dadada')
database.session.add(name_user)
database.session.commit()

#read ORM filter options:
all_users = User.query.all()
print(all_users)

#select by id:
user_one = User.query.get(1)
print(user_one.first_name) #should be araam

#filter by name:
user_araam = User.query.filter_by(first_name = 'Araam')
print(user_araam.all())

# update year:
second_user = User.query.get(2)
second_user.year = 4
database.session.add(second_user)
database.session.commit()

#delete first user:
first_user = User.query.get(1)
database.session.delete(first_user)
database.session.commit()

#print all users (Joanna & Nasrin):
all_users = User.query.all()
print(all_users)
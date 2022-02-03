#######################################################################################################################
# to run:$ python3 room_test.py
#######################################################################################################################
from api import api, database
from api.models.room_model import Room
#######################################################################################################################
#create all the table models 
database.create_all()
room_one = Room('Double', 100, 'Kitchen')
room_second = Room('Single', 205, 'Bathroom')
database.session.add_all([room_one, room_second])
database.session.commit()

#should print here: 
print(room_one.id)
print(room_second.id)

#adding new room:
room_three = Room('Tripple', 300, 'Bedroom')
database.session.add(room_three)
database.session.commit()

#read ORM filter options:
all_room = Room.query.all()
print(all_room)

# update year:
room_second = Room.query.get(2)
room_second.location = 'Livingroom'
database.session.add(room_second)
database.session.commit()

#delete first room:
room_one = Room.query.get(1)
database.session.delete(room_one)
database.session.commit()

#print all rooms:
all_room = Room.query.all()
print(all_room)
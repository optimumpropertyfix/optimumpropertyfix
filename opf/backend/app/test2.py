'''
from app import database
from app.models import User, Ticket
import datetime

import json 
'''

'''
    Testing file to test
    convert json data to python object
    push the converted python object into existing db
'''
'''
database.create_all()

araam = User('Araam', 'Zaraman', 1, 0, 'araam@gmail.com', 'aramzaramjardi', '01234567', 'M', 4, '*CatLover24')
joanna = User('Joan', 'Lopez', 0, 1, 'joannalopez@gmail.com', 'joannalopez', '12345678', 'F', 1, '^ThizzleDance')
nasrin = User('Nasrin', 'Juana', 0, 1, 'nasrinjuana@gmail.com', 'nasrinjuana', '23456789', 'F', 4, '$Cashdada')
melissa = User('Melissa', 'Flores', 0, 1, 'melissaflores@gmail.com', 'melissaflores', '23456189', 'F', 4, '#Password123')
aisha = User('Aisha', 'Co', 0, 1, 'aishaco@gmail.com', 'aishaco', '23456789', 'F', 4, 'Vegas*Rocks2022')
erin = User('Erin', 'Keith', 1, 0, 'erinkeith@gmail.com', 'erinkeith', '', 'F', '', 'CSEisAwEsOmE01')
database.session.add_all([araam, joanna, nasrin, melissa, aisha, erin])
database.session.commit()

'''


'''*** The new test code ***'''
'''
deserialie json (converting json to python)
    1.Import the json package.
    2.Read the data with load() or loads().
        -> json obj will convert to dictionalry
        -> json array will convert to lsit 
    3.Process the data.
    4.if need to cenvert back to json
    -> Write the altered data with dump() or dumps()
'''

'''
ticket list and the json.dumps() fuctionality is temporary data to test and check the fuctionality
it will be replaced with the json obj or string obtained from frontend possibly the using the get method in the routes.py file.
'''
'''
ticket_list = [
    {
        'id': 1,
        'date': datetime.date(2020,6,6),
        'status': 'Completed',
        'severity_level':'High',
        'description': 'Leak in kitchen underneath the sink.',
        'title': 'Leaking',
        'location' : 'Kitchen'
    },
    {
        'id': 2,
        'date': datetime.date(2021,2,7),
        'status': 'Pending',
        'severity_level':'Low',
        'description': 'Missing trash can bin and I need it ASAP.',
        'title': 'Mising Item',
        'location' : 'Livingroom'
    },
    {
        'id': 3,
        'date': datetime.date(2021,3,11),
        'status': 'Completed',
        'severity_level':'Medium',
        'description': 'Leaking shower head in bathroom.',
        'title': 'Leaking',
        'location' : 'Bathroom'
    },
    {
        'id': 4,
        'date': datetime.date(2021,3,29),
        'status': 'Pending',
        'severity_level':'Low',
        'description': 'door will not lock',
        'title': 'broken door',
        'location' : 'Bedroom'
    }, 
    {
        'id': 5,
        'date': datetime.date(2021,4,14),
        'status': 'Pending',
        'severity_level':'Low',
        'description': 'stove not turning on and smells like gas',
        'title': 'broken stove',
        'location' : 'Kitcken'
    },
]


for t in range(len(ticket_list)):
    var = json.dumps(ticket_list[t], indent= 4, default = str)
    data = json.loads(var)
    new_id = int(data.get("id"))
    new_date = datetime.datetime.strptime((data.get("date")), '%Y-%m-%d')
    ticket = Ticket(new_id, new_date, data.get("status"), data.get("severity_level"), data.get("description"), data.get("title"), data.get("location"))
   
    database.session.add(ticket)
    database.session.commit()

'''

#######################################################################################################################
# to run:$ python3 ticket_test.py
#######################################################################################################################
from api import api, database
from api.models.ticket_model import Ticket
import datetime
#######################################################################################################################
#create all the table models 
database.create_all()
ticket_one = Ticket(datetime.date(2021, 3, 2), 'pending', 'high', 'Leak in kitchen', 'Kitchen')
ticket_second = Ticket(datetime.date(2021, 3, 3), 'pending', 'low', 'Missing trash can bin in', 'Trash Can')
database.session.add_all([ticket_one, ticket_second])
database.session.commit()

#should print here: 
print(ticket_one.id)
print(ticket_second.id)

#adding new ticket:
ticket_three = Ticket(datetime.date(2021, 3, 4), 'pending', 'medium', 'Leaking shower head', 'Shower Head')
database.session.add(ticket_three)
database.session.commit()

#read ORM filter options:
all_tickets = Ticket.query.all()
print(all_tickets)

# update year:
ticket_second = Ticket.query.get(2)
ticket_second.status = 'completed'
database.session.add(ticket_second)
database.session.commit()

#delete first ticket:
ticket_one = Ticket.query.get(1)
database.session.delete(ticket_one)
database.session.commit()

#print all tickets:
all_tickets = Ticket.query.all()
print(all_tickets)
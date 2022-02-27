from app import database
from app.models import User, Ticket
import datetime


database.create_all()
araam = User('Araam', 'Zaraman', 1, 0, 'araam@gmail.com', 'aramzaramjardi', '01234567', 'M', 4, '*CatLover24')
joanna = User('Joan', 'Lopez', 0, 1, 'joannalopez@gmail.com', 'joannalopez', '12345678', 'F', 1, '^ThizzleDance')
nasrin = User('Nasrin', 'Juana', 0, 1, 'nasrinjuana@gmail.com', 'nasrinjuana', '23456789', 'F', 4, '$Cashdada')
melissa = User('Melissa', 'Flores', 0, 1, 'melissaflores@gmail.com', 'melissaflores', '23456189', 'F', 4, '#Password123')
aisha = User('Aisha', 'Co', 0, 1, 'aishaco@gmail.com', 'aishaco', '23456789', 'F', 4, 'Vegas*Rocks2022')
erin = User('Erin', 'Keith', 1, 0, 'erinkeith@gmail.com', 'erinkeith', '', 'F', '', 'CSEisAwEsOmE01')
database.session.add_all([araam, joanna, nasrin, melissa, aisha, erin])
database.session.commit()


ticket_one = Ticket('1', datetime.date(2021, 1, 2), 'Completed', 'High', 'Leak in kitchen underneath the sink.', 'Leaking', 'Kitchen', 'Extra Notes')
ticket_second = Ticket('2', datetime.date(2021, 2, 27), 'Pending', 'Low', 'Missing trash can bin and I need it ASAP.', 'Mising Item', 'Livingroom', 'Extra Notes')
ticket_three = Ticket('3', datetime.date(2021, 3, 11), 'Completed', 'Mild', 'Leaking shower head in bathroom.', 'Leaking', 'Bathroom','Extra Notes')
ticket_four = Ticket('4', datetime.date(2021, 2, 5), 'Pending', 'Low', 'Leaking shower head in bathroom.', 'Leaking', 'Bedroom', 'Extra Notes')
ticket_five = Ticket('5', datetime.date(2021, 2, 25), 'Deleted', 'Low', 'Leaking shower head in bathroom.', 'Leaking', 'Bedroom', 'Extra Notes')
ticket_six = Ticket('6', datetime.date(2021, 3, 29), 'Pending', 'High', 'Smells like gas by the stove.', 'Leaking', 'Kitchen', ' ')
database.session.add_all([ticket_one, ticket_second, ticket_three, ticket_four, ticket_five, ticket_six])
database.session.commit()
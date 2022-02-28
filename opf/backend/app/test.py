from app import database
from app.models import User, Ticket, Appointment, Building, Unit
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


ticket_one = Ticket('1', datetime.date(2019, 12, 4), 'Completed', 'High', 'Leak in kitchen underneath the sink.', 'Leaking', 'Kitchen', 'Extra Notes', 'Blah')
ticket_second = Ticket('2', datetime.date(2019, 12, 4), 'Pending', 'Low', 'Missing trash can bin and I need it ASAP.', 'Mising Item', 'Livingroom', 'Extra Notes', 'Blah')
ticket_three = Ticket('3', datetime.date(2013, 12, 4), 'Completed', 'Mild', 'Leaking shower head in bathroom.', 'Leaking', 'Bathroom','Extra Notes', 'Blah')
ticket_four = Ticket('4', datetime.date(2022, 12, 4), 'Pending', 'Low', 'Leaking shower head in bathroom.', 'Leaking', 'Bedroom', 'Extra Notes', 'Blah')
ticket_five = Ticket('5', datetime.date(2021, 12, 4), 'Deleted', 'Low', 'Leaking shower head in bathroom.', 'Leaking', 'Bedroom', 'Extra Notes', 'Blah')
ticket_six = Ticket('6', datetime.date(2020, 12, 4), 'Pending', 'High', 'Smells like gas by the stove.', 'Leaking', 'Kitchen', ' ',' ')
database.session.add_all([ticket_one, ticket_second, ticket_three, ticket_four, ticket_five, ticket_six])
database.session.commit()


apt_one = Appointment(datetime.date(2020,1,11))
apt_second = Appointment(datetime.date(2020,12,14))
apt_three = Appointment(datetime.date(2020,4,5))
apt_four = Appointment(datetime.date(2020,10,1))
apt_five = Appointment(datetime.date(2020,3,8))
apt_six = Appointment(datetime.date(2020,9,6))
database.session.add_all([apt_one, apt_second, apt_three, apt_four, apt_five, apt_six])
database.session.commit()


building_one = Building('Argenta Hall','105')
building_two = Building('Canada Hall', '210')
building_three = Building('Nye Hall', '315')
building_four = Building('Sierra Hall', '41A')
building_five = Building('Great Basin', '5C')
building_six = Building('Manzanita Hall', '69F')
database.session.add_all([building_one, building_two, building_three, building_four, building_five, building_six])
database.session.commit()


unit_one = Unit('105')
unit_two = Unit('210')
unit_three = Unit('315')
unit_four = Unit('41A')
unit_five = Unit('5C')
unit_six = Unit('69F')
database.session.add_all([unit_one, unit_two, unit_three, unit_four, unit_five, unit_six])
database.session.commit()
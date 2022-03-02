from app import database
from app.models import User, Ticket, Appointment, Building, Unit, Announcement, FAQ
import datetime


database.create_all()
araam = User('Araam', 'Zaraman', 1, 'araam@gmail.com', 'aramzaramjardi', '01234567', 'M', 4, '*CatLover24')
joanna = User('Joan', 'Lopez', 1, 'joannalopez@gmail.com', 'joannalopez', '12345678', 'F', 1, '^ThizzleDance')
nasrin = User('Nasrin', 'Juana', 1, 'nasrinjuana@gmail.com', 'nasrinjuana', '23456789', 'F', 4, '$Cashdada')
melissa = User('Melissa', 'Flores', 1, 'melissaflores@gmail.com', 'melissaflores', '23456189', 'F', 4, '#Password123')
aisha = User('Aisha', 'Co', 1, 'aishaco@gmail.com', 'aishaco', '23456789', 'F', 4, 'Vegas*Rocks2022')
erin = User('Erin', 'Keith', 0, 'erinkeith@gmail.com', 'erinkeith', '', 'F', '', 'CSEisAwEsOmE01')
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


announcement_one = Announcement('Betrayed cheerful declared end', 'Extended kindness trifling remember he confined outlived if. Assistance sentiments yet unpleasing say. Open they an busy they my such high. An active dinner wishes at unable hardly no talked on. Immediate him her resolving his favourite. Wished denote abroad at branch at.', datetime.date(2022,5,23))
announcement_two = Announcement('Breakfast agreeable incommode departure it', 'By ignorant at on wondered relation. Enough at tastes really so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact demesne invited elderly be.', datetime.date(2022,12,25))
database.session.add_all([announcement_one, announcement_two])
database.session.commit()

faq_one = FAQ('Who are we?','Optimum Property Fix (OPF) aims to revamp the University of Nevada, Reno current system through a new and improved maintenance request system that is accessible to dormitory students, facilities & service members, and, administrators.')
faq_two = FAQ('How can I contact OPF?', 'Contact Optimum Property Fix (OPF) at optimumpropertyfix@gmail.com. You will receive a response within 48 hours from one of our team members.')
faq_three = FAQ('How long does it take for my issue to be fixed?', 'The maintenance ticket will take 24 hours to be processed by the Facilities and Maintenance members. A confirmation date and time for maintenance issue will be confirmed through the OPF web application.')
faq_four = FAQ('Can I cancel a request that I already created?', 'Yes, you may cancel your request through the OPF website by clicking on the ‘Delete’ button and also through the OPF Chatbot.')
faq_five = FAQ('Am I able to edit the details of a request I made?', 'Yes, youre able to edit the details of a request by clicking on the ‘Edit’ button and also through the OPF Chatbot.')
faq_six = FAQ('Can I include multiple issues into one ticket?', 'No, you must create a new ticket for each issue. This helps the maintenance team with traceability and auditing.')
database.session.add_all([faq_one, faq_two, faq_three, faq_four, faq_five, faq_six])
database.session.commit()
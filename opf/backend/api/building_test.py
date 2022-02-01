#######################################################################################################################
# to run:$ python3 building_test.py
#######################################################################################################################
from api import api, database
from api.models.building_model import Building
import datetime
#######################################################################################################################
#create all the table models 
database.create_all()
building_one = Building('Argenta', 1, 1998, datetime.date(2021, 3, 3), True)
building_second = Building('Canada', 2, 1999, datetime.date(2021, 3, 3), False)
database.session.add_all([building_one, building_second])
database.session.commit()

#should print here: 
print(building_one.id)
print(building_second.id)

#adding new building:
building_three = Building('Great Basin', 3, 2000, datetime.date(2021, 3, 3), False)
database.session.add(building_three)
database.session.commit()

#read ORM filter options:
all_building = Building.query.all()
print(all_building)

# update year:
building_second = Building.query.get(2)
building_second.date_renovation = datetime.date(2021, 3, 4)
building_second.isRenovated = True
database.session.add(building_second)
database.session.commit()

#delete first building:
building_one = Building.query.get(1)
database.session.delete(building_one)
database.session.commit()

#print all buildings:
all_building = Building.query.all()
print(all_building)
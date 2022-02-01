#######################################################################################################################
# to run:$ python3 tag_test.py
#######################################################################################################################
from api import api, database
from api.models.tag_model import Tag
#######################################################################################################################
#create all the table models 
database.create_all()
tag_one = Tag('Water', 'Low', 'Water Issue')
tag_second = Tag('Missing', 'High', 'Missing Item')
database.session.add_all([tag_one, tag_second])
database.session.commit()

#should print here: 
print(tag_one.id)
print(tag_second.id)

#adding new tag:
tag_three = Tag('Heat', 'Low', 'Heater Issue')
database.session.add(tag_three)
database.session.commit()

#read ORM filter options:
all_tag = Tag.query.all()
print(all_tag)

# update year:
tag_second = Tag.query.get(2)
tag_second.type_tag = 'Low'
database.session.add(tag_second)
database.session.commit()

#delete first tag:
tag_one = Tag.query.get(1)
database.session.delete(tag_one)
database.session.commit()

#print all tags:
all_tag = Tag.query.all()
print(all_tag)
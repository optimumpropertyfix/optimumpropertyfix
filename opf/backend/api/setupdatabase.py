from api import database, User

#create all the table models 
database.create_all()

araam = User('Araam', 'Zara', True, False, 'araam@gmail.com', 'aramzara', '01234567', 'male', 4, 'dance')
joanna = User('Joan', 'Lopez', False, True, 'joanlopez@gmail.com', 'joanlopez', '12345678', 'Female', 1, 'thizzle')

#should output nothing if done correctly:
print(araam.id)
print(joanna.id)

database.session.add_all([araam, joanna])
database.session.commit()

print(araam.id)
print(joanna.id)
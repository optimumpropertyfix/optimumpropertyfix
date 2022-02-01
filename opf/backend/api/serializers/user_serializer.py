###############################################################
# serializers- Ask @araam if lines 24, & 64 are set up correctly? 
#              & if need to seperate serializers into different files?
###############################################################
print("SERIALIZER ACCESSED - User")
def user_serializer(user):
    return {
      "id": user.id,
      "first_name": user.first_name,
      "last_name": user.last_name,
      "isStudent": user.isStudent,
      "isAdmin": user.isAdmin,
      "email": user.email,
      "net_id": user.net_id,
      "nshe_id": user.nshe_id,
      "gender": user.gender,
      "year": user.year,
      "password": user.password,
    }
#################################################
print("SERIALIZER ACCESSED - Ticket")
def user_serializer(ticket):
    return {
      "id": ticket.id,
      #"creator": user_serializer.id,
      "building": ticket.building,
      "room": ticket.room, 
      "date": ticket.date,
      "time": ticket.time, 
      "status": ticket.status, 
      "severity_level": ticket.severity_level, 
      "priority_level": ticket.priority_level,
      "description": ticket.description,
      "title": ticket.title,
    }
#################################################
print("SERIALIZER ACCESSED - Building")
def user_serializer(building):
    return {  
      "id": building.id,
      "room": building.room,
      "name": building.name, 
      "number": building.number, 
      "year": building.year,
      "date_renovated": building.date_renovated,
      "isRenovated": building.isRenovated,
      "tags": building.tags,
    }
#################################################
print("SERIALIZER ACCESSED - Room")
def user_serializer(room):
    return {
      "id": room.id,
      "building": room.building, 
      "type_room": room.type_room, 
      "number": room.number, 
      "location": room.location,
    }
#################################################
print("SERIALIZER ACCESSED - Tag")
def user_serializer(tag):
  return{
    "id": tag.id, 
    #"creator": user_serializer.id,
    "name": tag.name, 
    "type_tage": tag.type_tag,
    "description": tag.description,
  }
#################################################
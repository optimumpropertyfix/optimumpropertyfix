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


def ticket_serializer(ticket):
    return {
      "id": ticket.id,
      "creator_id": ticket.user.id, 
      "date": ticket.date,
      "status": ticket.status, 
      "severity_level": ticket.severity_level, 
      "description": ticket.description,
      "title": ticket.title,
      "location": ticket.location,
    }

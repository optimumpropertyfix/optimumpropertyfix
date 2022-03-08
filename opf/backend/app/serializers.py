def serialize_session(first_name, last_name, net_id, isStudent): 
    
    session = {
        "first_name": first_name,
        "last_name": last_name,
        "net_id": net_id,
        "isStudent": isStudent,
    }

    return session

def serialize_authorization(access_token, isStudent):

    authorization = {
        "access_token": access_token,
        "isStudent": isStudent,
        "success":True
    }

    return authorization
    
def user_serializer(user):
    return {
      "id": user.id,
      "first_name": user.first_name,
      "last_name": user.last_name,
      "isStudent": user.isStudent,
      "contact_email": user.contact_email,
      "net_id": user.net_id,
      "nshe_id": user.nshe_id,
      "gender": user.gender,
      "year": user.year,
      "password": user.password,
    }  


def ticket_serializer(ticket):
     return {
        "ticket_id": ticket.ticket_id,
        "title": ticket.title,
        "location": ticket.location,
        "severity": ticket.severity,
        "creation_date_time": ticket.creation_date_time,
        "description": ticket.description,
        "additional_notes": ticket.additional_notes,
        "appointment_time": ticket.appointment_time,
        "appointment_date": ticket.appointment_date,
        "building": ticket.building,
        "unit_number": ticket.unit_number,
        "contact_email": ticket.contact_email
    }


def appointment_serializer(appointment):
    return {
       "id": appointment.id,
       "appointment_date": appointment.appointment_date, 
    }


def building_serializer(building):
    return{
      "id": building.id,
      "building_name": building.building_name,
      "building_unit": building.building_unit,
    }

def unit_serializer(unit):
    return{
      "id": unit.id,
      "unit_number": unit.unit_number,
    }

def announcement_serializer(announcement):
    return{
      "id": announcement.id,
      "title": announcement.title, 
      "content": announcement.content, 
      "date" : announcement.date
    }

def faq_serializer(faq):
    return{
      "id": faq.id,
      "question": faq.title, 
      "answer": faq.content, 
    }

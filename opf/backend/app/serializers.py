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
      "id": ticket.id,
      "creator_id": ticket.user.id, 
      "date": ticket.date,
      "status": ticket.status, 
      "severity_level": ticket.severity_level, 
      "description": ticket.description,
      "title": ticket.title,
      "location": ticket.location,
      "additional_notes": ticket.additional_notes,
      "facility_notes": ticket.facility_notes,
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

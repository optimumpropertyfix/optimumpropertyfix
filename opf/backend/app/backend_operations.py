from re import L


def student_createTicket(
netid, 
title, 
description, 
additional_notes, 
appointment_time, 
appointment_date,
building,
location,
unit_number,
severity,
contact_email,
creation_date_time):

    print("Added New Ticket")
    print(netid)
    print(contact_email)

    return True

def admin_createTicket(
netid, 
title, 
description, 
additional_notes, 
appointment_time, 
appointment_date,
building,
location,
unit_number,
severity,
contact_email,
creation_date_time):

    print("Added New Ticket")
    print(netid)
    print(contact_email)

    return True

def serialize_ticket(ticket):

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

def get_AllTickets(netid):

    # Logic to query database for all sticks
    # Get a bulk query of all tickets. Save them to variable ticket_records

    # 
    # ticket_record = query object from the database
    # <ticket - title - description - &934e>
    # <ticket - title - description - &934e>
    #<ticket - title - description - &934e>
    #<ticket - title - description - &934e>

    # ticket_record -> <ticket - title - description - &934e>
    # single_ticket -> serialize_ticket(ticket_record) 
    # map(serialize_ticket(single_ticket) -> JSON Object of Ticket
    # [
    # 1 Round of Map -> single_ticket gets added to the array
    # ]
    # ...
    # [
    #  {single_ticket},
    #  {single_ticket},
    # ...
    #   {
    #       ticket_id: 0, 
    #       ticket_title: "Fix Water Leak",
    #       ...
    #   },
    #   ...
    # ]

    tickets = json.dumps([*map(serialize_ticket, ticket_record)])

    return tickets

def student_deleteTicket(netid, ticket_id):

    # Backend logic to delete ticket

    return True

    
const serialize_ticket = (
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
  creation_date_time
) => {
  let ticket = {
    title: title,
    description: description,
    additional_notes: additional_notes,
    appointment_time: appointment_time,
    appointment_date: appointment_date,
    building: building,
    location: location,
    unit_number: unit_number,
    severity: severity,
    contact_email: contact_email,
    creation_date_time: creation_date_time,
  };

  return JSON.stringify(ticket);
};

const handle_CreateTicket = (url, ticket) => {
  let request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: ticket,
  };

  return fetch(url, request);
};

const get_allTickets = (url) => {
  let request = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, request);
};

const get_single_ticket = (url) => {
  let request = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, request);
};

const handle_deleteTicket = (url) => {
  let request = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url);
};

//const process_ticket = (ticket) => {};

export {
  serialize_ticket,
  handle_CreateTicket,
  get_allTickets,
  get_single_ticket,
  handle_deleteTicket,
};

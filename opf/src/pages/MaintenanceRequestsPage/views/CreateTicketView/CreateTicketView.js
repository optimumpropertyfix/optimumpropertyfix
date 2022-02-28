import React, { useState } from "react";
import { serialize_ticket, handle_CreateTicket } from "../TicketLogic";
import {
  student_create_ticket_route,
  admin_create_ticket_route,
} from "../../../../Routes";

export function AdminCreateTicketView() {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    let ticket = serialize_ticket(
      "TITLE",
      "DESCRIPTION",
      "NOTES",
      "APPOINT_TIME",
      "APPOINT_DATE",
      "BUILDING",
      "LOCATION",
      "UNIT_NUMBER",
      "SEVERITY",
      "CONTACT EMAIL",
      "CREATION DATE TIME"
    );

    const route = admin_create_ticket_route("azaremehrjardi");

    handle_CreateTicket(route, ticket);
  };

  const handleTest = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <p>CreateTicketView</p>
      <textarea onChange={handleTest}></textarea>
      <button onClick={handleSubmit}>TestingButton</button>
    </div>
  );
}

export function StudentCreateTicketView() {
  //first state is content passing in empty string, second is ticket

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [building, setBuilding] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    //const ticket = { title, description, building, notes };

    const route = student_create_ticket_route("azaremehrjardi");

    let ticket = serialize_ticket(
      title,
      description,
      "NOTES",
      "APPOINT_TIME",
      "APPOINT_DATE",
      "BUILDING",
      "LOCATION",
      "UNIT_NUMBER",
      "SEVERITY",
      "CONTACT_EMAIL",
      "CREATION_DATE_TIME"
    );

    handle_CreateTicket(route, ticket);

    console.log(ticket);
  };
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleBuilding = (event) => {
    setBuilding(event.target.value);
  };

  const handleNotes = (event) => {
    setNotes(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Submit a New Maintenance Ticket.</h1>
      <label>Title</label>
      <br></br>
      <input type="title" value={title} onChange={handleTitle} />
      <p>Ticket Description</p>
      <textarea value={description} onChange={handleDescription}></textarea>
      <label>
        <br></br>
        Building
        <br></br>
      </label>
      <select value={building} onChange={handleBuilding}>
        <option value="argenta">Argenta Hall</option>
        <option value="canada">Canada Hall</option>
        <option value="canyon">Canyon Flats</option>
        <option value="greatbasin">Great Basin Hall</option>
        <option value="juniper">Juniper Hall</option>
        <option value="manzanita">Manzanita Hall</option>
        <option value="llc">The Nevada LLC</option>
        <option value="nye">Nye Hall</option>
        <option value="uncommon">Uncommon</option>
        <option value="peavine">Peavine Hall</option>
        <option value="sierra">Sierra Hall</option>
      </select>

      <p>Additional Notes</p>
      <textarea value={notes} onChange={handleNotes}></textarea>
      <br></br>
      <button onClick={handleSubmit}>Submit Ticket!</button>
    </form>
  );
}

export default { AdminCreateTicketView, StudentCreateTicketView };

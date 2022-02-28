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
  const [enterBuilding, setEnterBuilding] = useState("");
  const [building, setBuilding] = useState("");
  const [notes, setNotes] = useState("");
  const [severity, setSeverity] = useState("");
  const [location, setLocation] = useState("");

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

  const handleEnterBuilding = (e) => {
    setEnterBuilding(e.target.value);
  };

  const handleSeverity = (e) => {
    setSeverity(e.target.value);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    let request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serialize_ticket()),
    };
    e.preventDefault();
    fetch("/", request);
  };

  const serialize_ticket = () => {
    return {
      ticket_title: title,
      ticket_description: description,
      enter_building: enterBuilding,
      ticket_building: building,
      ticket_notes: notes,
      ticket_severity: severity,
      ticket_location: location,
    };
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create new ticket</h1>
        <label>
          Title
          <br></br>
          ex. "Faucet Leak"
        </label>
        <br></br>
        <input type="title" value={title} onChange={handleTitle} />
        <br></br>
        <label>Please describe the problem</label>
        <textarea value={description} onChange={handleDescription}></textarea>
        <label>
          <br></br>
          Does our maintenance team have permission to enter your residence
          without your permission?
          <br></br>
        </label>
        <input
          type="radio"
          name="enterBuilding"
          value="Yes"
          onChange={handleEnterBuilding}
        />
        Yes
        <input
          type="radio"
          name="enterBuilding"
          value="No"
          onChange={handleEnterBuilding}
        />
        No
        <br></br>
        <label>Set Severity</label>
        <br></br>
        <select value={severity} onChange={handleSeverity}>
          <option value="low">LOW</option>
          <option value="medium">MEDIUM</option>
          <option value="high">HIGH</option>
        </select>
        <br></br>
        <label>
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
        <br></br>
        <label>
          Location of problem
          <br></br>
        </label>
        <select value={location} onChange={handleLocation}>
          <option value="livingroom">Living room</option>
          <option value="kitchen">Kitchen</option>
          <option value="bathroom">Bathroom</option>
          <option value="bedroom">Bedroom</option>
        </select>
        <br></br>
        <label>Additional Notes</label>
        <textarea value={notes} onChange={handleNotes}></textarea>
        <br></br>
        <button onClick={handleSubmit}>Submit Ticket!</button>
      </form>
    </div>
  );
}

export default { AdminCreateTicketView, StudentCreateTicketView };

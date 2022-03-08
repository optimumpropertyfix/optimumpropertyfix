import React, { useState } from "react";
import { serialize_ticket, handle_CreateTicket } from "../TicketLogic";
import {
  student_create_ticket_route,
  admin_create_ticket_route,
} from "../../../../Routes";
import styles from "./CreateTicketView.module.css";

export function AdminCreateTicketView() {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    let ticket = serialize_ticket(
      title,
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

    const route = admin_create_ticket_route();

    handle_CreateTicket(route, ticket);
  };

  const handleTest = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <p>CreateTicketView</p>
      <p></p>
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

  return (
    <div className={styles.StudentCreateTicketView}>
      <div className={styles.page_header}>
        <p className="text_page_title">Create New Ticket</p>
      </div>
      <div className={styles.ticket_form}>
        <div>
          <div className={`${styles.form} layout_helper_FormGroup`}>
            <label>
              Title <span>ex. "Faucet Leak"</span>
            </label>
            <input type="text" />
          </div>
          <div className={`${styles.form} layout_helper_FormGroup`}>
            <label>Please describe the problem</label>
            <textarea className={styles.description_form} />
          </div>
          <div className={`${styles.form} layout_helper_FormGroup`}>
            <label>Set Severity</label>
            <select className={styles.severity_form}>
              <option type="radio" value="LOW">
                LOW
              </option>
              <option type="radio" value="MILD">
                MILD
              </option>
              <option type="radio" value="HIGH">
                HIGH
              </option>
            </select>
          </div>
        </div>
        <div>
          <div className={`${styles.form} layout_helper_FormGroup`}>
            <label>Location of problem</label>
            <select className={styles.location_form}>
              <option value="livingroom">Living Room</option>
              <option value="bathroom">Bathroom</option>
              <option value="kitchen">Kitchen</option>
              <option value="bedroom">Bedroom</option>
            </select>
          </div>
          <div className={`${styles.form} layout_helper_FormGroup`}>
            <label>Building</label>
            <select className={styles.building_form}>
              <option value="argenta">Argenta Hall</option>
              <option value="nye">Nye Hall</option>
              <option value="greatbasin">Great Basin Hall</option>
              <option value="juniper">Juniper Hall</option>
              <option value="llc">Living Learning Center</option>
              <option value="sierra">Sierra Hall</option>
              <option value="canada">Cananda Hall</option>
              <option value="manzanita">Manzanita Hall</option>
            </select>
          </div>
          <div className={`${styles.form} layout_helper_FormGroup`}>
            <label>Your unit #</label>
            <input type="text" />
          </div>
          <div className={`${styles.form} layout_helper_FormGroup`}>
            <label>Additional Notes</label>
            <textarea className={styles.description_form} />
          </div>
        </div>
      </div>
      <div className={styles.page_footer}>
        <button>Submit Ticket</button>
      </div>
    </div>
  );
}

export default { AdminCreateTicketView, StudentCreateTicketView };

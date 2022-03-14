//create a ticket view for a single ticket
import { useState } from "react";
import { student_new_ticket_route } from "../../../../Routes";
import styles from "./CreateTicketView.module.css";
import { useNavigate } from "react-router-dom";
import TokenManager from "../../../../TokenManager";

export function AdminCreateTicketView() {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Severity, setSeverity] = useState("");
  const [Location, setLocation] = useState("");
  const [Building, setBuilding] = useState("");
  const [Unit, setUnit] = useState("");
  const [Notes, setNotes] = useState("");

  const navigate = useNavigate();

  //serialize account
  const serialize_ticket = (
    title,
    description,
    severity,
    location,
    building,
    unit,
    notes
  ) => {
    let ticket = {
      title: title,
      description: description,
      severity: severity,
      location: location,
      building: building,
      unit: unit,
      notes: notes,
    };

    return JSON.stringify(ticket);
  };

  const ticket = (
    title,
    description,
    severity,
    location,
    building,
    unit,
    notes
  ) => {
    let ticket = serialize_ticket(
      title,
      description,
      severity,
      location,
      building,
      unit,
      notes
    );

    let request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: ticket,
    };

    let route = student_new_ticket_route();

    return fetch(route, request)
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.statusText} - ${response.status}`);
        }
        return true;
      })
      .catch((error) => {
        throw Error(error);
      });
  };

  const handle_Title = (event) => {
    setTitle(event.target.value);
  };

  const handle_Description = (event) => {
    setDescription(event.target.value);
  };

  const handle_Severity = (event) => {
    setSeverity(event.target.value);
  };

  const handle_Location = (event) => {
    setLocation(event.target.value);
  };

  const handle_Building = (event) => {
    setBuilding(event.target.value);
  };

  const handle_Unit = (event) => {
    setUnit(event.target.value);
  };

  const handle_Notes = (event) => {
    setNotes(event.target.value);
  };

  const handle_SubmitTicket = (event) => {
    event.preventDefault();
    ticket(Title, Description, Severity, Location, Building, Unit, Notes)
      .then((successful) => {
        navigate("/admin/maintenance_requests");
      })
      .catch((error) => {
        console.log(error);
      });
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
            <input type="text" onChange={handle_Title} />
          </div>
          <div className={`${styles.form} layout_helper_FormGroup`}>
            <label>Please describe the problem</label>
            <textarea
              className={styles.description_form}
              onChange={handle_Description}
            />
          </div>
          <div className={`${styles.form} layout_helper_FormGroup`}>
            <label>Set Severity</label>
            <select className={styles.severity_form} onChange={handle_Severity}>
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
            <select className={styles.location_form} onChange={handle_Location}>
              <option value="livingroom">Living Room</option>
              <option value="bathroom">Bathroom</option>
              <option value="kitchen">Kitchen</option>
              <option value="bedroom">Bedroom</option>
            </select>
          </div>
          <div className={`${styles.form} layout_helper_FormGroup`}>
            <label>Building</label>
            <select className={styles.building_form} onChange={handle_Building}>
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
            <input type="text" onChange={handle_Unit} />
          </div>
          <div className={`${styles.form} layout_helper_FormGroup`}>
            <label>Additional Notes</label>
            <textarea
              className={styles.description_form}
              onChange={handle_Notes}
            />
          </div>
        </div>
      </div>
      <div className={styles.page_footer}>
        <button onClick={handle_SubmitTicket}>Submit Ticket</button>
      </div>
    </div>
  );
}

export function StudentCreateTicketView() {
  //first state is content passing in empty string, second is ticket
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Severity, setSeverity] = useState("");
  const [Location, setLocation] = useState("");
  const [Building, setBuilding] = useState("");
  const [Unit, setUnit] = useState("");
  const [Notes, setNotes] = useState("");

  const navigate = useNavigate();
  const { get_token } = TokenManager();

  //serialize account
  const serialize_ticket = (
    title,
    description,
    severity,
    location,
    building,
    unit,
    notes
  ) => {
    let ticket = {
      title: title,
      description: description,
      severity: severity,
      location: location,
      building: building,
      unit: unit,
      notes: notes,
    };

    return JSON.stringify(ticket);
  };

  const create_ticket = (
    title,
    description,
    severity,
    location,
    building,
    unit,
    notes
  ) => {
    let ticket = serialize_ticket(
      title,
      description,
      severity,
      location,
      building,
      unit,
      notes
    );

    let request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${get_token()}`,
      },
      body: ticket,
    };

    let route = student_new_ticket_route();

    return fetch(route, request)
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.statusText} - ${response.status}`);
        }
        return true;
      })
      .catch((error) => {
        throw Error(error);
      });
  };

  const handle_Title = (event) => {
    setTitle(event.target.value);
  };

  const handle_Description = (event) => {
    setDescription(event.target.value);
  };

  const handle_Severity = (event) => {
    setSeverity(event.target.value);
  };

  const handle_Location = (event) => {
    setLocation(event.target.value);
  };

  const handle_Building = (event) => {
    setBuilding(event.target.value);
  };

  const handle_Unit = (event) => {
    setUnit(event.target.value);
  };

  const handle_Notes = (event) => {
    setNotes(event.target.value);
  };

  const handle_SubmitTicket = (event) => {
    event.preventDefault();
    create_ticket(Title, Description, Severity, Location, Building, Unit, Notes)
      .then((successful) => {
        navigate("/student/maintenance_requests");
      })
      .catch((error) => {
        console.log(error);
      });
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
            <input type="text" onChange={handle_Title} />
          </div>
          <div className={`${styles.form} layout_helper_FormGroup`}>
            <label>Please describe the problem</label>
            <textarea
              className={styles.description_form}
              onChange={handle_Description}
            />
          </div>
          <div className={`${styles.form} layout_helper_FormGroup`}>
            <label>Set Severity</label>
            <select className={styles.severity_form} onChange={handle_Severity}>
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
            <select className={styles.location_form} onChange={handle_Location}>
              <option value="livingroom">Living Room</option>
              <option value="bathroom">Bathroom</option>
              <option value="kitchen">Kitchen</option>
              <option value="bedroom">Bedroom</option>
            </select>
          </div>
          <div className={`${styles.form} layout_helper_FormGroup`}>
            <label>Building</label>
            <select className={styles.building_form} onChange={handle_Building}>
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
            <input type="text" onChange={handle_Unit} />
          </div>
          <div className={`${styles.form} layout_helper_FormGroup`}>
            <label>Additional Notes</label>
            <textarea
              className={styles.description_form}
              onChange={handle_Notes}
            />
          </div>
        </div>
      </div>
      <div className={styles.page_footer}>
        <button onClick={handle_SubmitTicket}>Submit Ticket</button>
      </div>
    </div>
  );
}

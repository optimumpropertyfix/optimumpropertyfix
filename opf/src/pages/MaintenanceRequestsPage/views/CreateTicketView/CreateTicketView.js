//create a ticket view for a single ticket
import { useState } from "react";
import { student_new_ticket_route } from "../../../../Routes";
import styles from "./CreateTicketView.module.css";
import { useNavigate } from "react-router-dom";
import TokenManager from "../../../../TokenManager";
import { ToggleableCard } from "../../../../components/Card/Card";
import FormGroup from "../../../../components/FormGroup/FormGroup";

export function AdminCreateTicketView() {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
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
  };

  return (
    <div className={styles.StudentCreateTicketView}>
      <div>
        <div className={styles.page_header}>
          <p className="text_page_title">Create New Ticket</p>
        </div>
        <div className={styles.ticket_form}>
          <div>
            <div className={`${styles.form} layout_helper_FormGroup`}>
              <label>Title</label>
              <input type="text" onChange={handle_Title} />
            </div>
            <div className={`${styles.form} layout_helper_FormGroup`}>
              <label>Please describe the problem</label>
              <textarea
                className={styles.description_form}
                onChange={handle_Description}
              />
            </div>
          </div>
          <div>
            <div className={`${styles.form} layout_helper_FormGroup`}>
              <label>Location of problem</label>
              <select
                className={styles.location_form}
                onChange={handle_Location}
              >
                <option value="livingroom">Living Room</option>
                <option value="bathroom">Bathroom</option>
                <option value="kitchen">Kitchen</option>
                <option value="bedroom">Bedroom</option>
              </select>
            </div>
            <div className={`${styles.form} layout_helper_FormGroup`}>
              <label>Building</label>
              <select
                className={styles.building_form}
                onChange={handle_Building}
              >
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
    </div>
  );
}

export function StudentCreateTicketView() {
  //first state is content passing in empty string, second is ticket
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Severity, setSeverity] = useState("Select Severity");
  const [Location, setLocation] = useState("Select Location");
  const [Building, setBuilding] = useState("Select Building");
  const [Unit, setUnit] = useState("Select Unit");
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
      <div className={`${styles.view_container} view_layout`}>
        <p className={`${styles.page_title_text} page_title_text`}>
          Create New Maintenance Ticket
        </p>
        <div className={`${styles.content_container} view_content_layout`}>
          <ToggleableCard
            className={styles.ticket_instructions}
            label="Creating Ticket Instructions"
          >
            <div className={styles.instructions}>
              <div className={styles.instruction}>
                <p>Enter a Descriptive Title</p>
                <p>Example: "Water Leak."</p>
              </div>
              <div className={styles.instruction}>
                <p>A Description of the Problem</p>
                <p>Example: "Water is leaking from the bathroom sink area."</p>
              </div>
              <div className={styles.instruction}>
                <p>Select a Location From The Dropdown Menu</p>
                <p>Example: "Bathroom", "Kitchen", "Bathroom", etc.</p>
              </div>
              <div className={styles.instruction}>
                <p>Select a Severity Level</p>
                <p>
                  Example: "LOW" (4-7 days), "MILD" (2-3 days), "HIGH" (1 day).
                </p>
              </div>
              <div className={styles.instruction}>
                <p>Select a Building From The Dropdown Menu</p>
                <p>
                  Example: "Cananda Hall", "Argenta Hall", "Sierra Hall", etc.
                </p>
              </div>
              <div className={styles.instruction}>
                <p>Select a Unit Number From The Dropdwon Menu</p>
                <p>Example: "300", "1C", "69F", etc.</p>
              </div>
              <div className={styles.instruction}>
                <p>Enter Any Additional Notes</p>
                <p>Example: "The water leak stops when I flush the toilet."</p>
              </div>
            </div>
          </ToggleableCard>
          <div className={styles.ticket_form}>
            <FormGroup
              className={`${styles.form_group} form_group ${styles.title_form}`}
              label="Title"
            >
              <input
                type="text"
                placeholder="Water Leak in Kitchen"
                onChange={handle_Title}
              />
            </FormGroup>
            <FormGroup
              className={`${styles.form_group} form_group ${styles.problem_form}`}
              label="Problem Description"
            >
              <textarea
                placeholder="Water is leaking in the kitchen below the sink. The water currently just leaking to the floor."
                className={styles.description_form}
                onChange={handle_Description}
              />
            </FormGroup>
            <FormGroup
              className={`${styles.form_group} form_group`}
              label="Problem Location"
            >
              <select
                value={Location}
                className={styles.location_form}
                onChange={handle_Location}
              >
                <option value="Select Location" disabled>
                  Select Location
                </option>
                <option value="livingroom">Living Room</option>
                <option value="bathroom">Bathroom</option>
                <option value="kitchen">Kitchen</option>
                <option value="bedroom">Bedroom</option>
              </select>
            </FormGroup>
            <FormGroup
              className={`${styles.form_group} form_group`}
              label="Building"
            >
              <select
                className={styles.building_form}
                onChange={handle_Building}
                value={Building}
              >
                <option value="Select Building" disabled>
                  Select Building
                </option>
                <option value="argenta">Argenta Hall</option>
                <option value="nye">Nye Hall</option>
                <option value="greatbasin">Great Basin Hall</option>
                <option value="juniper">Juniper Hall</option>
                <option value="llc">Living Learning Center</option>
                <option value="sierra">Sierra Hall</option>
                <option value="canada">Cananda Hall</option>
                <option value="manzanita">Manzanita Hall</option>
              </select>
            </FormGroup>
            <FormGroup
              className={`${styles.form_group} form_group`}
              label="Unit"
            >
              <select
                className={`${styles.unit_form}`}
                onChange={handle_Unit}
                value={Unit}
              >
                <option value="Select Unit" disabled>
                  Select Unit
                </option>
                <option value="1A">1A</option>
                <option value="1B">1B</option>
                <option value="1C">1C</option>
                <option value="1D">1D</option>
              </select>
            </FormGroup>
            <FormGroup
              className={`${styles.form_group} form_group ${styles.additional_notes_form}`}
              label="Additional Notes"
            >
              <textarea
                placeholder="There is some water on the floor as you enter in the kitchen."
                className={styles.description_form}
                onChange={handle_Notes}
              />
            </FormGroup>
          </div>
          <div className={styles.ticket_options}>
            <button onClick={handle_SubmitTicket}>Submit Ticket</button>
            <button>Clear Ticket</button>
          </div>
        </div>
      </div>
    </div>
  );
}

//create a ticket view for a single ticket
import { useState } from "react";
import { student_new_ticket_route } from "../../../../Routes";
import styles from "./CreateTicketView.module.css";
import { useNavigate } from "react-router-dom";
import TokenManager from "../../../../TokenManager";
import { ToggleableCard } from "../../../../components/Card/Card";
import FormGroup from "../../../../components/FormGroup/FormGroup";

export function StudentCreateTicketView() {
  const [title, set_title] = useState("");
  const [description, set_description] = useState("");
  const [severity, set_severity] = useState("Select Severity");
  const [location, set_location] = useState("Select Location");
  const [building, set_building] = useState("Select Building");
  const [unit, set_unit] = useState("Select Unit");
  const [notes, set_notes] = useState("");

  const navigate = useNavigate();
  const { get_token } = TokenManager();

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

  const handle_title = (event) => {
    set_title(event.target.value);
  };

  const handle_description = (event) => {
    set_description(event.target.value);
  };

  const handle_severity = (event) => {
    set_severity(event.target.value);
  };

  const handle_location = (event) => {
    set_location(event.target.value);
  };

  const handle_building = (event) => {
    set_building(event.target.value);
  };

  const handle_unit = (event) => {
    set_unit(event.target.value);
  };

  const handle_notes = (event) => {
    set_notes(event.target.value);
  };

  const handle_submit_ticket = (event) => {
    event.preventDefault();
    create_ticket(title, description, severity, location, building, unit, notes)
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
                onChange={handle_title}
              />
            </FormGroup>
            <FormGroup
              className={`${styles.form_group} form_group ${styles.problem_form}`}
              label="Problem Description"
            >
              <textarea
                placeholder="Water is leaking in the kitchen below the sink. The water currently just leaking to the floor."
                className={styles.description_form}
                onChange={handle_description}
              />
            </FormGroup>
            <FormGroup
              className={`${styles.form_group} form_group`}
              label="Problem Location"
            >
              <select
                value={location}
                className={styles.location_form}
                onChange={handle_location}
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
                onChange={handle_building}
                value={building}
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
                onChange={handle_unit}
                value={unit}
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
                onChange={handle_notes}
              />
            </FormGroup>
          </div>
          <div className={styles.ticket_options}>
            <button onClick={handle_submit_ticket}>Submit Ticket</button>
            <button>Clear Ticket</button>
          </div>
        </div>
      </div>
    </div>
  );
}

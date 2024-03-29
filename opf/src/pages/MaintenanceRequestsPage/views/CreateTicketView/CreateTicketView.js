//create a ticket view for a single ticket
import { useEffect, useState } from "react";
import {
  user_create_ticket_route,
  view_all_buildings_route,
} from "../../../../Routes";
import styles from "./CreateTicketView.module.css";
import { useNavigate } from "react-router-dom";
import TokenManager from "../../../../TokenManager";
import { ToggleableCard } from "../../../../components/Card/Card";
import FormGroup from "../../../../components/FormGroup/FormGroup";

export function AdminCreateTicketView() {}

export function StudentCreateTicketView() {
  const [title, set_title] = useState("");
  const [description, set_description] = useState("");
  const [location, set_location] = useState("select");
  const [building, set_building] = useState("select");
  const [unit, set_unit] = useState("select");
  const [notes, set_notes] = useState("");

  const [building_list, set_building_list] = useState([]);
  const [unit_disabled, set_unit_disabled] = useState(false);
  const [unit_list] = useState({});
  const [location_disabled, set_location_disabled] = useState(false);
  const [location_list, set_location_list] = useState([]);

  // Few notes about the operation of this page.
  // ***
  // 1. When the user selects a building, the location and unit fields are
  // updated with information from the database pretaining to
  // what locations and units the building offers.
  // *
  // 1a. Making this happen involves making states for location and unit.
  // The states are used to store an object array which holds the value of
  // each unit and location (id and name).
  // 1b. The fields for location and building are unclickable if building is
  // set at the default. When building field is changed, a request is sent to
  // get the building and units based upon the given building id.
  // ***
  // 2. When the page is rendered, a request is made to the database to grab
  // buildings in which the user can use to select which building to tie their
  // ticket too.
  // *
  // 2a. This makes read operations to the database upon page render and write
  // operations upon sending of the ticket to the database.
  // ***

  useEffect(() => {
    // Function Note
    // ***
    // 1. When the page renders, the list of buildings is received from the database.

    const building_data = [
      {
        building_id: 1,
        buidling_name: "Argenta Hall",
      },
      {
        building_id: 2,
        building_name: "Nye Hall",
      },
    ];

    const location_data_argenta = [
      {
        location_id: 1,
        location_name: "Bedroom",
      },
      {
        location_id: 2,
        location_name: "Restroom",
      },
      {
        location_id: 3,
        location_name: "Living Area",
      },
    ];

    const unit_data_argenta = [
      {
        unit_id: 1,
        unit_name: "1A",
      },
      {
        unit_id: 2,
        unit_name: "1B",
      },
      {
        unit_id: 3,
        unit_name: "1C",
      },
      {
        unit_id: 4,
        unit_name: "1D",
      },
    ];

    const location_data_nye = [
      {
        id: 1,
        value: "Bedroom",
        name: "Bedroom",
      },
      {
        location_id: 2,
        value: "restroom",
        name: "Restroom",
      },
    ];

    const unit_data_nye = [
      {
        unit_id: 1,
        unit_name: "1A",
      },
      {
        unit_id: 2,
        unit_name: "1B",
      },
      {
        unit_id: 3,
        unit_name: "1C",
      },
    ];

    set_location_list(location_data_nye);

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${get_token()}`,
      },
    };
    const route = view_all_buildings_route();

    fetch(route, options)
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.statusText} - ${response.status}`);
        }

        return response.json();
      })
      .then((buildings) => {
        set_building_list(buildings);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const navigate = useNavigate();
  const { get_token } = TokenManager();

  const serialize_ticket = (
    title_param,
    description_param,
    location_param,
    building_param,
    unit_param,
    notes_param
  ) => {
    let ticket = {
      ticket_title: title_param,
      ticket_description: description_param,
      ticket_location: location_param,
      ticket_building_name: building_param,
      ticket_unit_number: unit_param,
      ticket_additonal_notes: notes_param,
    };

    return JSON.stringify(ticket);
  };

  const populate_locations = (building_id) => {};

  const api_user_create_ticket = () => {
    let ticket = serialize_ticket(
      title,
      description,
      location,
      building,
      unit,
      notes
    );

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${get_token()}`,
      },
      body: ticket,
    };
    const route = user_create_ticket_route();

    return fetch(route, options)
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

  const handle_location = (event) => {
    set_location(event.target.value);
  };

  const handle_building = (event) => {
    set_building(event.target.value);
    /*
    if (building != "select") {
      set_location_disabled(false)
      set_unit_disabled(false)
    } else {
      set_location_disabled(true)
      set_unit_disabled(true)
    }*/
  };

  const handle_unit = (event) => {
    set_unit(event.target.value);
  };

  const handle_notes = (event) => {
    set_notes(event.target.value);
  };

  const handle_submit_ticket = (event) => {
    event.preventDefault();
    api_user_create_ticket()
      .then((successful) => {
        navigate("/student/maintenance_requests");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handle_clear_ticket = (event) => {
    set_title("");
    set_description("");
    set_building("select");
    set_location("select");
    set_unit("select");
    set_notes("");
    event.preventDefault();
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
                value={title}
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
                value={description}
                onChange={handle_description}
              />
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
                <option value="select" disabled>
                  Select Building
                </option>
                {building_list.map((building_item) => {
                  return (
                    <option
                      key={building_item.building_id}
                      value={building_item.building_name}
                    >
                      {building_item.building_name}
                    </option>
                  );
                })}
              </select>
            </FormGroup>
            <FormGroup
              className={`${styles.form_group} form_group`}
              label="Problem Location"
            >
              <select
                value={location}
                className={styles.location_form}
                onChange={handle_location}
                disabled={location_disabled}
              >
                <option value="select" disabled>
                  Select Location
                </option>
                <option value="Livingroom">Living Room</option>
                <option value="Bathroom">Bathroom</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Bedroom">Bedroom</option>
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
                disabled={unit_disabled}
              >
                <option value="select" disabled>
                  Select Unit
                </option>
                <option value="1A">1A</option>
                <option value="1C">1C</option>
              </select>
            </FormGroup>
            <FormGroup
              className={`${styles.form_group} form_group ${styles.additional_notes_form}`}
              label="Additional Notes"
            >
              <textarea
                placeholder="There is some water on the floor as you enter in the kitchen."
                className={styles.description_form}
                value={notes}
                onChange={handle_notes}
              />
            </FormGroup>
          </div>
          <div className={styles.ticket_options}>
            <button onClick={handle_submit_ticket}>Submit Ticket</button>
            <button onClick={handle_clear_ticket}>Clear Ticket</button>
          </div>
        </div>
      </div>
    </div>
  );
}

import AppointmentItem from "../../../../components/Appointment/AppointmentItem";
import styles from "./AppointmentView.module.css";
import ItemGroup from "../../../../components/ItemGroup/ItemGroup";
import Widget from "../../../../components/Widget/Widget";
import { useState, useEffect } from "react";
import Ticket from "../../../../components/Ticket/Ticket";
import FormGroup from "../../../../components/FormGroup/FormGroup";
import { view_individual_appointment } from "../../../../Routes"
import TokenManager from "../../../../TokenManager";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function StudentAppointmentView(props) {
  const [appointment, set_appointment] = useState({});
  const [cancellation_message_disabled, set_cancellation_message_disabled] =
  useState(true);
  const [cancellation_message, set_cancellation_message] = useState("");
  const { get_token } = TokenManager()
  let { appointment_id } = useParams();
  const navigate = useNavigate()

  const time_text = (datetime) => {
    let datetime_string = String(datetime).split(" ")
    let year_value = Number(datetime_string[2])
    let date_value = Number(datetime_string[1])
    let month_value = Number(datetime_string[0])-1    
    let hour_value = Number(datetime_string[3])
    let minute_value = Number(datetime_string[4])
    let second_value = Number(datetime_string[5])
    let formatted_value = new Date(year_value, month_value, date_value, hour_value, minute_value, second_value);

    return formatted_value.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  }

  const status_color = (status) => {
    if (status === "Completed") {
      return "complete_status";
    } else if (status === "Scheduled") {
      return "scheduled_status";
    } else {
      return "cancelled_status";
    }
  };

  const status_text = (status) => {
    if (status === "Completed") {
      return "COMPLETED";
    } else if (status === "Scheduled") {
      return "SCHEDULED";
    } else {
      return "CANCELLED";
    }
  };

  const cancellation_message_background = () => {
    if (cancellation_message_disabled) {
      return styles.cancellation_message_disabled;
    }
  };

  const handle_cancellation_message = (event) => {
    set_cancellation_message(event.target.value);
  };

  useEffect(() => {

    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${get_token()}`,
      },
    };
    const route = view_individual_appointment(appointment_id);
    console.log(route)
    fetch(route, options)
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.statusText} - ${response.status}`);
        }
        return response.json();
      })
      .then((appointment) => {
        console.log(appointment)
        set_appointment(appointment)
      })
      .catch((error) => {
        console.log(error);
      });

    set_cancellation_message_disabled(true)
    set_cancellation_message("Testing")

  }, [])

  const view_ticket_click = () => {
    navigate(`/student/maintenance_requests/${appointment.appointment_ticket_id}`)
  }

  return (
    <div className={styles.AppointmentView}>
      <div className={`${styles.view_container} view_layout`}>
        <p className={`${styles.page_title_text} page_title_text`}>
          Viewing Appointment
        </p>
        <div className={`${styles.content_container} view_content_layout`}>
          <div className={styles.appointment_metadata}>
            <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
              Appointment Information
            </p>
            <div className={styles.appointment_metadata_container}>
              <div className={styles.metadata_group}>
                <Widget
                  className={`${styles.status_metadata} ${status_color(
                    appointment.appointment_status
                  )}`}
                  label="Status"
                >
                  {status_text(appointment.appointment_status)}
                </Widget>
                <ItemGroup
                  className={`block_contrast_items`}
                  label="Time Frame"
                  text={`${time_text(appointment.appointment_start_time)} to ${time_text(appointment.appointment_end_time)}`}
                />
                <ItemGroup
                  className={`block_contrast_items`}
                  label="Building"
                  text={appointment.appointment_building_name}
                />
                <ItemGroup
                  className={`block_contrast_items`}
                  label="Unit"
                  text={appointment.appointment_unit_number}
                />
                <ItemGroup
                  className={`block_contrast_items`}
                  label="Location"
                  text={appointment.appointment_location}
                />
                <ItemGroup
                  className={`block_contrast_items ${styles.title_metadata}`}
                  label="Appointment ID"
                  text={appointment.appointment_id}
                />
              </div>
              <div className={styles.metadata_options}>
                <button onClick={view_ticket_click}>View Ticket</button>
              </div>
            </div>
          </div>
          <div className={styles.cancellation}>
            <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
              Cancel Your Appointment
            </p>
              <div
                className={`${styles.cancellation_reason} ${cancellation_message_background()}`}>
                <FormGroup label="Cancellation Reason">
                  <textarea
                    onChange={handle_cancellation_message}
                    disabled={cancellation_message_disabled}
                    rows="10"
                    placeholder="The service was excellent! Only thing I would improve is that the handyman was 15 minutes late."
                    value={cancellation_message}
                  />
                </FormGroup>
                { appointment.appointment_is_cancelled === false ? 
                <button>
                  Submit Cancellation
                </button> : null }
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

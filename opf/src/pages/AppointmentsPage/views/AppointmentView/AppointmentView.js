import AppointmentItem from "../../../../components/Appointment/AppointmentItem";
import styles from "./AppointmentView.module.css";
import ItemGroup from "../../../../components/ItemGroup/ItemGroup";
import Widget from "../../../../components/Widget/Widget";
import { useState, useEffect } from "react";
import Ticket from "../../../../components/Ticket/Ticket";
import FormGroup from "../../../../components/FormGroup/FormGroup";

function AppointmentView(props) {
  const [appointment, set_appointment] = useState({});
  const [cancellation_message_disabled, set_cancellation_message_disabled] =
  useState(true);
  const [cancellation_message, set_cancellation_message] = useState("");

  const data = {
    appointment_id: 1,
    appointment_start_time: "4:00 p.m.",
    appointment_end_time: "5:00 p.m.",
    appointment_building: "Argenta Hall",
    appointment_unit: "1C",
    appointment_location: "Kitchen",
    appointment_status: "Cancelled",
    appointment_date: {
      month: "March",
      day_date: 23,
      day: "Tuesday",
    },
    appointment_is_cancelled: true,
    appointment_cancelled_reason: "Shit was not going to work."
  };

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
    set_appointment(data)
    set_cancellation_message_disabled(data.appointment_is_cancelled)
    set_cancellation_message(data.appointment_cancelled_reason)
  }, []);

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
                  text={`${appointment.appointment_start_time} to ${appointment.appointment_end_time}`}
                />
                <ItemGroup
                  className={`block_contrast_items`}
                  label="Building"
                  text={appointment.appointment_building}
                />
                <ItemGroup
                  className={`block_contrast_items`}
                  label="Unit"
                  text={appointment.appointment_unit}
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
                <button>View Ticket</button>
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

export default AppointmentView;

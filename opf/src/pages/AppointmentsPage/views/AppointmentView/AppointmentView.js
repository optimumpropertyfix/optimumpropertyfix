import AppointmentItem from "../../../../components/Appointment/AppointmentItem";
import styles from "./AppointmentView.module.css";
import ItemGroup from "../../../../components/ItemGroup/ItemGroup";
import Widget from "../../../../components/Widget/Widget";
import { useState, useEffect } from "react";
import Ticket from "../../../../components/Ticket/Ticket";

function AppointmentView(props) {
  const [appointment, set_appointment] = useState({});

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
    if (status === "C") {
      return "complete_status";
    } else if (status === "P") {
      return "pending_status";
    } else {
      return "delete_status";
    }
  };

  const status_text = (status) => {
    if (status === "C") {
      return "COMPLETED";
    } else if (status === "P") {
      return "PENDING";
    } else {
      return "DELETED";
    }
  };

  useEffect(() => {
    set_appointment(data)
  }, []);

  return (
    <div className={`${styles.Timestamps} ${props.className}`}>
      <div className={`${styles.view_container} view_layout`}>
        <p className={`${styles.page_title_text} page_title_text`}>
          Viewing Appointment
        </p>
        <div className={`${styles.content_container} view_content_layout`}>
          <div className={styles.appointment_metadate}>
            <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
              Appointment Information
            </p>
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
                className={`block_contrast_items ${styles.title_metadata}`}
                label="Time Frame"
                text={"4:00 p.m. to 5:00 p.m."}
              />
              <ItemGroup
                className={`block_contrast_items ${styles.title_metadata}`}
                label="Building"
                text={"4:00 p.m. to 5:00 p.m."}
              />
              <ItemGroup
                className={`block_contrast_items ${styles.title_metadata}`}
                label="Unit"
                text={"4:00 p.m. to 5:00 p.m."}
              />
              <ItemGroup
                className={`block_contrast_items ${styles.title_metadata}`}
                label="Location"
                text={"Kitchen"}
              />
              <ItemGroup
                className={`block_contrast_items ${styles.title_metadata}`}
                label="Appointment ID"
                text={11}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentView;

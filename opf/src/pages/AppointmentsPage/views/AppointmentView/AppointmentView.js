import AppointmentItem from "../../../../components/Appointment/AppointmentItem";
import styles from "./AppointmentView.module.css";
import ItemGroup from "../../../../components/ItemGroup/ItemGroup";
import Widget from "../../../../components/Widget/Widget";
import { useState, useEffect } from "react";
import Ticket from "../../../../components/Ticket/Ticket";

function AppointmentView(props) {
  const [ticket, setTicket] = useState({});

  /*
  useEffect(() => {
    setTicket({
      ticket_title: "Fix Water Leak",
      ticket_description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ticket_severity: "HIGH",
      ticket_location: "Restroom",
      ticket_building_name: "Canada Hall",
      ticket_unit_number: "1C",
      ticket_additional_notes: "",
      ticket_id: "800",
      ticket_created: "09/08/2022",
      ticket_status: "C",
    });
  }, []);*/

  const appointment = {
    appointment_id: 1,
    time_frame: "4:00 p.m. to 5:00 p.m.",
    building: "Argenta Hall",
    unit: "1C",
    location: "Kitchen",
    date: {
      month: "March",
      day_date: 23,
      day: "Tuesday",
    },
  };

  return (
    <div className={`${styles.Timestamps} ${props.className}`}>
      <div className={`${styles.view_container} view_layout`}>
        <p className={`${styles.page_title_text} page_title_text`}>
          Viewing Appointment
        </p>
        <div className={`${styles.content_container} view_content_layout`}>
          <AppointmentItem {...appointment}></AppointmentItem>
        </div>
      </div>
    </div>
  );
}

export default AppointmentView;

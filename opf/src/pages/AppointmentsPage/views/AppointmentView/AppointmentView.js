import AppointmentItem from "../../../../components/Appointment/AppointmentItem";
import styles from "./AppointmentView.module.css";
import ItemGroup from "../../../../components/ItemGroup/ItemGroup";
import Widget from "../../../../components/Widget/Widget";
import { useState, useEffect } from "react";
import Ticket from "../../../../components/Ticket/Ticket";

function AppointmentView(props) {
  const [ticket, setTicket] = useState({});

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
  }, []);

  return (
    <div className={`${styles.Timestamps} ${props.className}`}>
      <div className={`${styles.view_container} view_layout`}>
        <p className={`${styles.page_title_text} page_title_text`}>
          View All Your Appointments
        </p>
        <div className={`${styles.content_container} view_content_layout`}>
          <AppointmentItem></AppointmentItem>
          <Ticket></Ticket>
        </div>
      </div>
    </div>
  );
}

export default AppointmentView;

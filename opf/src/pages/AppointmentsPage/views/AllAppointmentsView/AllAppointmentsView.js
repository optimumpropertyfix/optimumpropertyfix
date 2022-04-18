import styles from "./AllAppointmentsView.module.css";
import AppointmentItem from "../../../../components/Appointment/AppointmentItem";
import { useEffect } from "react";

function AllAppointmentsView(props) {
  const appointments = [
    {
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
    },
    {
      appointment_id: 2,
      time_frame: "4:00 p.m. to 5:00 p.m.",
      building: "Argenta Hall",
      unit: "1C",
      location: "Kitchen",
      date: {
        month: "March",
        day_date: 23,
        day: "Tuesday",
      },
    },
  ];

  return (
    <div className={styles.AllAppointmentsView}>
      <div className={`${styles.view_container} view_layout`}>
        <p className={`${styles.page_title_text} page_title_text`}>
          View All Your Appointments
        </p>
        <div className={`${styles.content_container} view_content_layout`}>
          {appointments.map((appointment) => {
            return (
              <AppointmentItem key={appointment.id} {...appointment}>
                <button>VIEW APPOINTMENT</button>
              </AppointmentItem>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AllAppointmentsView;

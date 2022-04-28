import styles from "./AllAppointmentsView.module.css";
import AppointmentItem from "../../../../components/Appointment/AppointmentItem";
import LandingMessage from "../../../../components/LandingMessage/LandingMessage";
import { view_all_appointments } from "../../../../Routes";
import { useEffect, useState } from "react";
import TokenManager from "../../../../TokenManager";

export function AdminAllAppointmentsView(props) {
  return <div></div>;
}

export function StudentAllAppointmentsView(props) {
  const [appointments, set_appointments] = useState([]);
  const { get_token } = TokenManager();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${get_token()}`,
      },
    };
    const route = view_all_appointments();

    fetch(route, options)
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.statusText} - ${response.status}`);
        }
        return response.json();
      })
      .then((appointments) => {
        set_appointments(appointments);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.AllAppointmentsView}>
      <div className={`${styles.view_container} view_layout`}>
        <p className={`${styles.page_title_text} page_title_text`}>
          View All Your Appointments
        </p>
        {appointments.length === 0 ? (
          <LandingMessage>No appointments here...Woo Hoo!</LandingMessage>
        ) : (
          <div className={`${styles.content_container} view_content_layout`}>
            {appointments.map((appointment) => {
              return (
                <AppointmentItem
                  key={appointment.appointment_id}
                  {...appointment}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

import styles from "./AllAppointmentsView.module.css";
import admin_styles from "./AdminAllAppointmentsView.module.css";
import AppointmentItem from "../../../../components/Appointment/AppointmentItem";
import LandingMessage from "../../../../components/LandingMessage/LandingMessage";
import { view_all_appointments, admin_view_all_appointments_route, admin_view_all_appointments_by_status } from "../../../../Routes";
import { useEffect, useState } from "react";
import TokenManager from "../../../../TokenManager";
import FormGroup from "../../../../components/FormGroup/FormGroup";

export function AdminAllAppointmentsView(props) {
  const [appointments, set_appointments] = useState([]);
  const [status_filter, set_status_filter] = useState("select");
  const { get_token } = TokenManager();

  const status_filter_change = (event) => {
    set_status_filter(event.target.value);
    api_get_all_appointments_by_status(event.target.value)
  };

  const clear_filter_click = () => {
    set_status_filter("select");
    api_get_all_appointments()
  };

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${get_token()}`,
      },
    };
    const route = admin_view_all_appointments_route();

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

  const api_get_all_appointments = () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${get_token()}`,
      },
    };
    const route = admin_view_all_appointments_route();

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
  }

  const api_get_all_appointments_by_status = (status) => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${get_token()}`,
      },
    };
    const route = admin_view_all_appointments_by_status(status);

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
  }

  return (
    <div className={admin_styles.AllAppointmentsView}>
      <div className={`${admin_styles.view_container} view_layout`}>
        <p className={`${admin_styles.page_title_text} page_title_text`}>
          View All Student Appointments
        </p>
        <div className={`${admin_styles.content_container} view_content_layout`}>
          <div className={admin_styles.filter_options}>
            <p className={`${admin_styles.page_subtitle_text} page_subtitle_text`}>
              Filter Appointments
            </p>
            <div className={admin_styles.filter_group}>
              <FormGroup label="Status">
                <select
                  onChange={status_filter_change}
                  value={status_filter}
                  className={admin_styles.location_form}
                >
                  <option value="select" disabled>
                    Select Status
                  </option>
                  <option value="Scheduled">Scheduled</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </FormGroup>
            </div>
            <button
              onClick={clear_filter_click}
              className={admin_styles.clear_filter_button}
            >
              Clear Filter
            </button>
          </div>
          <div className={admin_styles.appointments_list}>
            {appointments.map((appointment) => {
              return (
                <AppointmentItem
                  admin={true}
                  key={appointment.appointment_id}
                  {...appointment}
                />
              );
            })}
            {appointments.length == 0 ? (
              <LandingMessage>
                No appointments here...Study and Relax!
              </LandingMessage>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export function StudentAllAppointmentsView(props) {
  const [appointments, set_appointments] = useState([]);
  const [status_filter, set_status_filter] = useState("select");
  const { get_token } = TokenManager();

  const status_filter_change = (event) => {
    set_status_filter(event.target.value);
    // show all tickets with filter condition
  };

  const clear_filter_click = () => {
    set_status_filter("select");
    // show all tickets refresh
  };

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
        <div className={`${styles.content_container} view_content_layout`}>
          <div className={styles.filter_options}>
            <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
              Filter Appointments
            </p>
            <div className={styles.filter_group}>
              <FormGroup label="Status">
                <select
                  onChange={status_filter_change}
                  value={status_filter}
                  className={styles.location_form}
                >
                  <option value="select" disabled>
                    Select Status
                  </option>
                  <option value="Scheduled">Scheduled</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </FormGroup>
            </div>
            <button
              onClick={clear_filter_click}
              className={styles.clear_filter_button}
            >
              Clear Filter
            </button>
          </div>
          <div className={styles.appointments_list}>
            {appointments.map((appointment) => {
              return (
                <AppointmentItem
                  key={appointment.appointment_id}
                  {...appointment}
                />
              );
            })}
            {appointments.length == 0 ? (
              <LandingMessage>
                No appointments here...Study and Relax!
              </LandingMessage>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

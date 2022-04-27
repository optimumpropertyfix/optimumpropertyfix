import Announcement from "../../components/Announcement/Announcement";
import styles from "./DashboardPage.module.css";
import admin_dashboard_styles from "./AdminDashboardPage.module.css";
import AppointmentItem from "../../components/Appointment/AppointmentItem";
import { ToggleableCard } from "../../components/Card/Card";
import background1 from "../../assets/backgrounds/background1.jpeg";
import background2 from "../../assets/backgrounds/background2.jpeg";
import background3 from "../../assets/backgrounds/background3.jpeg";
import background4 from "../../assets/backgrounds/background4.jpeg";
import { useEffect, useState } from "react";
import {
  user_view_latest_appointment_route,
  view_all_announcements_route,
} from "../../Routes";
import TokenManager from "../../TokenManager";
import LandingMessage from "../../components/LandingMessage/LandingMessage";

export function AdminDashboardPage() {
  return (
    <div className={admin_dashboard_styles.AdminDashboardPage}>
      <div className={`${admin_dashboard_styles.view_container} view_layout`}>
        <p
          className={`${admin_dashboard_styles.page_title_text} page_title_text`}
        >
          The Maintenance Dashboard
        </p>
        <div
          className={`${admin_dashboard_styles.content_container} view_content_layout`}
        >
          <div className={admin_dashboard_styles.kanban_board}>
            <div className={admin_dashboard_styles.received_tickets}></div>
            <div className={admin_dashboard_styles.pending_tickets}></div>
            <div className={admin_dashboard_styles.completed_tickets}></div>
            <div className={admin_dashboard_styles.cancelled_tickets}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StudentDashboardPage() {
  const { get_token } = TokenManager();
  const [appointments, set_appointments] = useState([]);
  const [announcements, set_announcements] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${get_token()}`,
      },
    };
    const latest_appointment_route = user_view_latest_appointment_route();
    const all_announcements_route = view_all_announcements_route();

    fetch(latest_appointment_route, options)
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

    fetch(all_announcements_route, options)
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.statusText} - ${response.status}`);
        }
        return response.json();
      })
      .then((announcements) => {
        set_announcements(announcements);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const get_random_number = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const background_switch = () => {
    let images = [background1, background2, background3, background4];

    return {
      backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${
        images[get_random_number(1, 4)]
      })`,
      backgroundSize: "cover",
    };
  };

  return (
    <div className={`${styles.DashboardPage}`} style={background_switch()}>
      <div className={`${styles.view_container} view_layout`}>
        <p className={`${styles.page_title_text} page_title_text`}>
          Your Living Space Dashboard
        </p>
        <div className={`${styles.content_container} view_content_layout`}>
          <div className={styles.announcements_container}>
            <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
              Latest Announcement
            </p>
            <div className={styles.announcements}>
              {announcements.map((announcement) => {
                return (
                  <Announcement
                    className={styles.block_contrast_items_alternative}
                    key={announcement.announcement_id}
                    {...announcement}
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.appointments_container}>
            <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
              Upcoming Appointments
            </p>
            {appointments.length !== 0 ? (
              <div className={styles.appointments}>
                {appointments.map((appointment) => {
                  return (
                    <AppointmentItem
                      className={styles.block_contrast_items_alternative}
                      key={appointment.appointment_id}
                      {...appointment}
                    />
                  );
                })}
              </div>
            ) : (
              <LandingMessage
                image_disable={true}
                className={styles.landing_message}
              >
                There are no appointments.
              </LandingMessage>
            )}
          </div>
          <div className={styles.resources_container}>
            <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
              Student Resources
            </p>
            <div className={styles.resources}>
              <ToggleableCard
                theme="light"
                className={styles.resources_card}
                label="Crisis Services"
              >
                <div className="card_information">
                  <div className="section">
                    <div>
                      <p>
                        If you are experiencing a crisis, please call Counseling
                        Services at (775) 784-4648 between the hours of 8:00
                        a.m. – 6:00 p.m. Monday through Thursday and 8:00 a.m.
                        to 5:00 p.m.
                      </p>
                    </div>
                    <div>
                      <p>
                        <span className="bold">Building:</span> William N.
                        Pennington Student Achievement Center
                      </p>
                      <p>
                        <span className="bold">Room Number:</span> Suite 420
                      </p>
                    </div>
                    <div>
                      <p>
                        <span className="bold">After-Hours Crisis Line:</span>{" "}
                        (775) 297-8315
                      </p>
                      <p>
                        <span className="bold">Emergency Services:</span> 911
                      </p>
                      <p>
                        <span className="bold">
                          Non-Emergency Police Services:
                        </span>{" "}
                        911
                      </p>
                      <p>
                        <span className="bold">
                          National Suicide Prevention Hotline:
                        </span>{" "}
                        (800) 273-8255
                      </p>
                      <p>
                        <span className="bold">Hope Line Network:</span> (800)
                        784-2433
                      </p>
                    </div>
                  </div>
                </div>
              </ToggleableCard>
              <ToggleableCard
                theme="light"
                className={styles.resources_card}
                label="Housing Services"
              >
                <div className="card_information section">
                  <div>
                    <p>
                      Addresses listed below are for receipt of packages by
                      residents during the academic year. Most front desks are
                      closed during winter and summer breaks so packages may be
                      "returned to sender" during these periods.
                    </p>
                  </div>
                  <div>
                    <p className="bold">Argenta Hall</p>
                    <p>1201 N. Virginia St.</p>
                    <p>Reno, NV 89503</p>
                    <p>(775) 784-1219</p>
                  </div>
                  <div>
                    <p className="bold">Canada Hall</p>
                    <p>1255 N. Virginia St.</p>
                    <p>Reno, NV 89503</p>
                    <p>(775) 784-1815</p>
                  </div>
                  <div>
                    <p className="bold">Canyon Flats</p>
                    <p>661 N. Center St.</p>
                    <p>Reno, NV 89501</p>
                    <p>(775) 386-6470</p>
                  </div>
                  <div>
                    <p className="bold">Great Basin Hall</p>
                    <p>1250 N. Virginia St.</p>
                    <p>Reno, NV 89503</p>
                    <p>(775) 682-8327</p>
                  </div>
                  <div>
                    <p className="bold">Manzanita & Juniper Halls</p>
                    <p>1014 N. Virginia</p>
                    <p>Reno, NV 89503</p>
                    <p>(775) 784-1575</p>
                  </div>
                  <div>
                    <p className="bold">LLC Hall</p>
                    <p>1295 N. Virginia St.</p>
                    <p>Reno, NV 89503</p>
                    <p>(775) 682-7884</p>
                  </div>
                  <div>
                    <p className="bold">Nye Hall</p>
                    <p>55 Artemisia Way</p>
                    <p>Reno, NV 89503</p>
                    <p>(775) 784-6739</p>
                  </div>
                  <div>
                    <p className="bold">Peavine Hall</p>
                    <p>38 W. 11th St.</p>
                    <p>Reno, NV 89503</p>
                    <p>(775) 682-8241</p>
                  </div>
                  <div>
                    <p className="bold">Sierra Hall</p>
                    <p>1001 N. Virginia St.</p>
                    <p>Reno, NV 89503</p>
                    <p>(775) 784-8270</p>
                  </div>
                </div>
              </ToggleableCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

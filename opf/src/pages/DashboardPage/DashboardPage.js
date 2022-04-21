import Announcement from "../../components/Announcement/Announcement";
import styles from "./DashboardPage.module.css";
import AppointmentItem from "../../components/Appointment/AppointmentItem";

export function AdminDashboardPage() {
  return (
    <div className={styles.header}>
      <h1>
        Dashboard Page <span className="material-icons">dashboard</span>
      </h1>
    </div>
  );
}

export function StudentDashboardPage() {
  const anno = {
    announcement_title: "Test 1",
    announcement_user: "Test 2",
    announcement_message: "Test 3",
    announcement_date: "03 13 2022 00 45 00",
  };

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
    <div className={`${styles.DashboardPage}`}>
      <div className={`${styles.view_container} view_layout`}>
        <p className={`${styles.page_title_text} page_title_text`}>
          Your Living Space Dashboard
        </p>
        <div className={`${styles.content_container} view_content_layout`}>
          <div className={styles.announcements_container}>
            <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
              Latest Announcement
            </p>
            <Announcement {...anno} />
          </div>
          <div className={styles.appointments_container}>
            <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
              Upcoming Appointments
            </p>
            <div>
              <AppointmentItem {...appointment} />
            </div>
          </div>
          <div className={styles.appointments_container}></div>
        </div>
      </div>
    </div>
  );
}

import Announcement from "../../components/Announcement/Announcement";
import styles from "./DashboardPage.module.css";
import AppointmentItem from "../../components/Appointment/AppointmentItem";
import Card from "../../components/Card/Card"
import background1 from "../../assets/backgrounds/background1.jpeg"
import background2 from "../../assets/backgrounds/background2.jpeg"
import background3 from "../../assets/backgrounds/background3.jpeg"
import background4 from "../../assets/backgrounds/background4.jpeg"

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

  const get_random_number = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const background_switch = () => {

    let images = [background1, background2, background3, background4]


    return { 
      background: `linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${images[get_random_number(1, 4)]})`,
      backgroundSize: "cover"
    }

  }

  return (
    <div className={`${styles.DashboardPage}`} style={ background_switch() }>
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
            <Announcement className={styles.block_contrast_items_alternative} {...anno} />
            <Announcement className={styles.block_contrast_items_alternative} {...anno} />
            <Announcement className={styles.block_contrast_items_alternative} {...anno} />
            <Announcement className={styles.block_contrast_items_alternative} {...anno} />
            <Announcement className={styles.block_contrast_items_alternative} {...anno} />
            <Announcement className={styles.block_contrast_items_alternative} {...anno} />
            </div>
          </div>
          <div className={styles.appointments_container}>
            <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
              Upcoming Appointments
            </p>
            <div className={styles.appointments}>
              <AppointmentItem className={styles.block_contrast_items_alternative} {...appointment} />
            </div>
          </div>
          <div className={styles.resources_container}>
            <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
              Student Resources
            </p>
            <div className={styles.resources}>
              <Card theme="light" className={styles.test} label="Housing Services">

              </Card>
              <Card theme="light" className={styles.test} label="Study Services">

              </Card>
              <Card theme="light" className={styles.test} label="Mental Health Services">

              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

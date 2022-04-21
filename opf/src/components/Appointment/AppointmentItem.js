import styles from "./AppointmentItem.module.css";
import ItemGroup from "../ItemGroup/ItemGroup";
import AppointmentDate from "./AppointmentDate";

//trigger to run again by using state
const AppointmentItem = (props) => {
  return (
    <div className={`${styles.AppointmentItem} block_contrast_items`}>
      <div className={styles.appointment_content}>
        <AppointmentDate
          day_date={props.date.day_date}
          month={props.date.month}
          day={props.date.day}
        />
        <div className={styles.appointment_details}>
          <ItemGroup label="Time Frame" text={props.time_frame} />
          <ItemGroup label="Building" text={props.building} />
          <ItemGroup label="Unit" text={props.unit} />
          <ItemGroup label="Location" text={props.location} />
        </div>
      </div>
      <div className={styles.appointment_options}>{props.children}</div>
    </div>
  );
};
export default AppointmentItem;

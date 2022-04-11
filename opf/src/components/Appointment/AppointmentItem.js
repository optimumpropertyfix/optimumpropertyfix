import styles from "./AppointmentItem.module.css";
import ItemGroup from "../ItemGroup/ItemGroup";
import AppointmentDate from "./AppointmentDate";
import Widget from "../Widget/Widget";

//trigger to run again by using state
const AppointmentItem = (props) => {
  return (
    <div className={`${styles.AppointmentItem} block_contrast_items`}>
      <div className={styles.appointment_content}>
        <AppointmentDate date={props.appointment_date} />
        <div className={styles.appointment_details}>
          <ItemGroup label="Time Frame" text="4:00 p.m. - 5:00 p.m." />
          <ItemGroup label="Building" text="Argenta Hall" />
          <ItemGroup label="Unit" text="1C" />
          <ItemGroup label="Location" text="Kitchen" />
        </div>
      </div>
      <div className={styles.appointment_options}>{props.children}</div>
    </div>
  );
};
export default AppointmentItem;

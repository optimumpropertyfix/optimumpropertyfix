import styles from "./AppointmentItem.module.css";
import AppointmentDate from "./AppointmentDate";

//trigger to run again by using state
const AppointmentItem = (props) => {
  return (
    <div className={styles.item}>
      <AppointmentDate date={props.date} />
      <div className={styles.description}>
        <h2>{props.building}</h2>
        <h2>{props.room}</h2>
        <div className={styles.detail}></div>
      </div>
    </div>
  );
};
export default AppointmentItem;

/* References Used:
[1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
*/
import styles from "./AppointmentDate.module.css";

const AppointmentDate = (props) => {
  //const month = props.date.toLocaleString("en-US", { month: "long" });
  //const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  //const year = props.date.getFullYear();

  return (
    <div className={styles.AppointmentDate}>
      <div className={styles.month}>
        <p>{props.month}</p>
      </div>
      <div className={styles.day_date}>
        <p>{props.day_date}</p>
      </div>
      <div className={styles.day}>
        <p>{props.day}</p>
      </div>
    </div>
  );
};
export default AppointmentDate;

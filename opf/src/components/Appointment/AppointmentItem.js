import styles from "./AppointmentItem.module.css";
import AppointmentDate from "./AppointmentDate";

const AppointmentItem = (props) => {
  const clickHandler = () => {
    console.log("Clicked");
  };

  return (
    <div className={styles.item}>
      <AppointmentDate date={props.date} />
      <div className={styles.description}>
        <h2>{props.building}</h2>
        <div className={styles.detail}>
          <button onClick={clickHandler}>Details</button>
        </div>
      </div>
    </div>
  );
};
export default AppointmentItem;

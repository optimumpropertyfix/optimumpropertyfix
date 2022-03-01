import styles from "./AppointItem.module.css";
import AppointDate from "./AppointDate";

function AppointItem(props) {
  return (
    <div className={styles.item}>
      <AppointDate date={props.date} />
      <div className={styles.description}>
        <h2>{props.building}</h2>
        <div className={styles.detail}>
          <button>Details</button>
        </div>
      </div>
    </div>
  );
}
export default AppointItem;

import styles from "./Announcement.module.css";
import Timestamps from "../Timestamps/Timestamps";

function Announcement(props) {
  return (
    <div className={`block_contrast_items ${props.className} ${styles.Announcement}`}>
      <div className={styles.header}>
        <p>{props.announcement_title}</p>
        <p>Submitted by {props.announcement_user}</p>
      </div>
      <div className={styles.message}>
        <p>{props.announcement_message}</p>
      </div>
      <div className={styles.footer}>
        <Timestamps created_at={props.announcement_date} />
      </div>
    </div>
  );
}

export default Announcement;

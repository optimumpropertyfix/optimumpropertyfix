import styles from "./AdminCreateAnnouncementView.module.css";
import FormGroup from "../../../../../../components/FormGroup/FormGroup";

export function AdminCreateAnnouncementView() {
  return (
    <div className={styles.AdminCreateAnnouncementView}>
      <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
        Create New Announcement
      </p>
      <div className={`${styles.form_container}`}>
        <div className={styles.title_container}>
          <FormGroup label="Announcement Title">
            <input type="text" placeholder="Block Party at the Joe"/>
          </FormGroup>
        </div>
        <div className={styles.message_container}>
          <FormGroup label="Announcement Message">
            <textarea rows="20" placeholder="Please join us at the Joe Crowley Student Union for a Block Party. Bring friends to enjoy food, games, and prizes."/>
          </FormGroup>
        </div>
        <div className={styles.options_container}>
          <button>
            Create Announcement
          </button>
        </div>
      </div>
    </div>
  );
}

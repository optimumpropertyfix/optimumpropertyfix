import ItemGroup from "../ItemGroup/ItemGroup";
import styles from "./AnnouncementItem.module.css";
function AnnouncementItem(props) {
  const view_announcement_click = () => {};

  return (
    <div
      className={`${styles.AnnouncementItem} ${props.className} block_contrast_items`}
    >
      <div className={styles.announcement_content}>
        <div className={styles.announcement_details}>
          <ItemGroup label="Title" text={props.announcement_title} />
          <ItemGroup label="Date" text={props.announcement_date} />
          <ItemGroup label="User" text={props.announcement_user} />
        </div>
        <div className={styles.announcement_options}>
          <button onClick={view_announcement_click}>VIEW ANNOUNCEMENT</button>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementItem;

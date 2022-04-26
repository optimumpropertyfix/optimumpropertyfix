import ItemGroup from "../ItemGroup/ItemGroup";
import styles from "./AnnouncementItem.module.css";
function AnnouncementItem(props) {
  const view_announcement_click = () => {};

  const message_text = (message) => {
    let message_string = new String(message);
    let maximum_length = 40;
    if (message_string.length > maximum_length) {
      return message_string.slice(0, maximum_length).trim() + "...";
    }
    return message_string;
  };

  return (
    <div
      className={`${styles.AnnouncementItem} ${props.className} block_contrast_items`}
    >
      <div className={styles.announcement_content}>
        <div className={styles.announcement_details}>
          <ItemGroup label="Title" text={props.announcement_title} />
          <ItemGroup
            label="Message"
            text={message_text(props.announcement_message)}
          />
          <ItemGroup label="Date" text={props.announcement_date} />
          <ItemGroup label="User" text={props.announcement_user} />
          <ItemGroup label="ID" text={props.announcement_id} />
        </div>
        <div className={styles.announcement_options}>
          <button onClick={view_announcement_click}>VIEW ANNOUNCEMENT</button>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementItem;

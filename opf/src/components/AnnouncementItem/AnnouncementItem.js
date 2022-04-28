import ItemGroup from "../ItemGroup/ItemGroup";
import styles from "./AnnouncementItem.module.css";
import { useNavigate } from "react-router-dom";
function AnnouncementItem(props) {
  const navigate = useNavigate();
  const view_announcement_click = () => {
    navigate(`/admin/forms/announcements/${props.announcement_id}`);
  };

  const message_text = (message) => {
    let message_string = new String(message);
    let maximum_length = 40;
    if (message_string.length > maximum_length) {
      return message_string.slice(0, maximum_length).trim() + "...";
    }
    return message_string;
  };

  const datetime_text = () => {
    //ticket_created: "03 13 2022 00 45 00"
    let datetime_string = String(props.announcement_date).split(" ")
    let year = Number(datetime_string[2])
    let date = Number(datetime_string[1])
    let month = Number(datetime_string[0])-1

    return `${month}/${date}/${year}`
  }

  const full_name_text = () => {
    return `${props.announcement_first_name} ${props.announcement_last_name}`
  }

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
          <ItemGroup label="Date" text={datetime_text()} />
          <ItemGroup label="User" text={full_name_text()} />
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

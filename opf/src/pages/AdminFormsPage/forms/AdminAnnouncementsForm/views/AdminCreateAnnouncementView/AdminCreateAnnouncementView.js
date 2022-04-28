import styles from "./AdminCreateAnnouncementView.module.css";
import FormGroup from "../../../../../../components/FormGroup/FormGroup";
import { useState } from "react";
import TokenManager from "../../../../../../TokenManager";
import { admin_create_announcement_route } from "../../../../../../Routes"

export function AdminCreateAnnouncementView() {

  const { get_token } = TokenManager();
  const [announcement_message, set_announcement_message] = useState("")
  const [announcement_title, set_announcement_title] = useState("")

  const handle_announcement_message = (event) => {
    set_announcement_message(event.target.value)
  }

  const handle_announcement_title = (event) => {
    set_announcement_title(event.target.value)
  }

  const create_announcement_click = () => {
    api_admin_create_announcement()
  }

  const api_admin_create_announcement = () => {
    let announcement = serialize_announcement(
      announcement_title,
      announcement_message
    );

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${get_token()}`,
      },
      body: announcement,
    };

    const route = admin_create_announcement_route();
    console.log(announcement)
    fetch(route, options);

  }

  const serialize_announcement = (
    title_param,
    message_param,
  ) => {
    let announcement = {
      announcement_title: title_param,
      announcement_message: message_param,
    };

    return JSON.stringify(announcement);
  };


  return (
    <div className={styles.AdminCreateAnnouncementView}>
      <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
        Create New Announcement
      </p>
      <div className={`${styles.form_container}`}>
        <div className={styles.title_container}>
          <FormGroup label="Announcement Title">
            <input type="text" placeholder="Block Party at the Joe" onChange={handle_announcement_title} value={announcement_title} />
          </FormGroup>
        </div>
        <div className={styles.message_container}>
          <FormGroup label="Announcement Message">
            <textarea rows="20" placeholder="Please join us at the Joe Crowley Student Union for a Block Party. Bring friends to enjoy food, games, and prizes." onChange={handle_announcement_message} value={announcement_message}/>
          </FormGroup>
        </div>
        <div className={styles.options_container}>
          <button onClick={create_announcement_click}>
            Create Announcement
          </button>
        </div>
      </div>
    </div>
  );
}

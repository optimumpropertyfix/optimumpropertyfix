import styles from "./AdminAnnouncementView.module.css";
import ItemGroup from "../../../../../../components/ItemGroup/ItemGroup";
import FormGroup from "../../../../../../components/FormGroup/FormGroup";
import { useNavigate, useParams } from "react-router-dom";
import { admin_edit_individual_announcement_route, admin_view_individual_announcement_route } from "../../../../../../Routes"
import TokenManager from "../../../../../../TokenManager";
import { useEffect, useState } from "react";

export function AdminAnnouncementView() {

  const [announcement_message, set_announcement_message] = useState("")
  const [announcement_title, set_announcement_title] = useState("")
  const [announcement, set_announcement] = useState({})

  const { get_token } = TokenManager()
  const navigate = useNavigate()
  const { announcement_id } = useParams()

  const close_announcement_click = () => {

    navigate("/admin/forms/announcements/")

  }

  const api_admin_edit_individual_announcement = () => {

    let announcement = serialize_announcement(
      announcement_title,
      announcement_message
    );

    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${get_token()}`,
      },
      body: announcement,
    };

    const route = admin_edit_individual_announcement_route(announcement_id);
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

  const handle_announcement_message = (event) => {
    set_announcement_message(event.target.value)
  }

  const handle_announcement_title = (event) => {
    set_announcement_title(event.target.value)
  }

  const update_announcement_click = () => {
    api_admin_edit_individual_announcement()
    api_view_individual_announcement()
  }

  const api_view_individual_announcement = () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${get_token()}`,
      },
    };

    const route = admin_view_individual_announcement_route(announcement_id);
    fetch(route, options).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }

      return response.json()
    }).then((announcement_data) => {
      set_announcement(announcement_data)
    }).catch((error) => {
      console.log(error)
    });
  }

  useEffect(() => {
    api_view_individual_announcement()
  }, [])

  const datetime_text = () => {
    //ticket_created: "03 13 2022 00 45 00"
    let datetime_string = String(announcement.announcement_date).split(" ")
    let year = Number(datetime_string[2])
    let date = Number(datetime_string[1])
    let month = Number(datetime_string[0])-1

    return `${month}/${date}/${year}`
  }

  return (
    <div className={styles.AdminAnnouncementView}>
      <div className={`${styles.form_container}`}>
        <div className={styles.edit_announcement_container}>
          <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
            Edit Announcement
          </p>
          <div className={styles.edit_announcement}> 
            <div className={styles.announcement_fields}>
              <FormGroup label="Announcement Title">
                <input type="text" placeholder="Block Party at the Joe"  onChange={handle_announcement_title} value={announcement_title}/>
              </FormGroup>
              <FormGroup label="Announcement Message">
                <textarea rows="20" placeholder="Please join us at the Joe Crowley Student Union for a Block Party. Bring friends to enjoy food, games, and prizes." onChange={handle_announcement_message} value={announcement_message}/>
              </FormGroup>
            </div>
            <div className={styles.announcement_options}>
              <button onClick={update_announcement_click}>
                Update Announcement
              </button>
              <button onClick={close_announcement_click}>
                Close Announcement
              </button>
            </div>
          </div>
        </div>
        <div className={styles.announcement_metadata_container}>
          <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
            Announcement Information
          </p>
          <div className={styles.announcement_metadata}>
            <div className={styles.metadata_group}>
              <ItemGroup className={`block_contrast_items`} label="Title" text={announcement.announcement_title} />
              <ItemGroup className={`block_contrast_items`} label="Message" text={announcement.announcement_message} />
              <ItemGroup className={`block_contrast_items`} label="Date" text={datetime_text()} />
              <ItemGroup className={`block_contrast_items`} label="ID" text={announcement.announcement_id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import styles from "./AdminAllAnnouncementsView.module.css";
import AnnouncementItem from "../../../../../../components/AnnouncementItem/AnnouncementItem";
import { admin_view_all_announcements_route } from "../../../../../../Routes";
import TokenManager from "../../../../../../TokenManager";
import { useEffect, useState } from "react";
export function AdminAllAnnouncementsView() {

  const { get_token } = TokenManager();
  const [announcements, set_announcements] = useState([])

  useEffect(() => {

    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${get_token()}`,
      },
    };
    const route = admin_view_all_announcements_route();

    fetch(route, options)
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.statusText} - ${response.status}`);
        }
        return response.json();
      })
      .then((announcements) => {
        set_announcements(announcements)
        console.log(announcements)
      })
      .catch((error) => {
        console.log(error);
      });


  }, [])

  return (
    <div className={styles.AdminAllAnnouncementsView}>
      <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
        View All Announcements
      </p>
      <div className={`${styles.form_container}`}>
        <div className={styles.announcement_list}>
          {announcements.map((announcement) => {
            return <AnnouncementItem key={announcement.announcement_id} {...announcement} />;
          })}
        </div>
      </div>
    </div>
  );
}

import styles from "./AdminViewAllDormitoriesView.module.css";
import BuildingItem from "../../../../../../components/BuildingItem/BuildingItem";
import { useEffect, useState } from "react";
import TokenManager from "../../../../../../TokenManager";
import { view_dormitories_route } from "../../../../../../Routes"

export function AdminViewAllDormitoriesView() {

  const { get_token } = TokenManager();
  const [dormitories, set_dormitories] = useState([])

  useEffect(() => {

    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${get_token()}`,
      },
    };
    const route = view_dormitories_route();

    fetch(route, options)
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.statusText} - ${response.status}`);
        }
        return response.json();
      })
      .then((dormitories) => {
        set_dormitories(dormitories)
      })
      .catch((error) => {
        console.log(error);
      });

  }, [])

  return (
    <div className={styles.AdminViewAllDormitoriesView}>
      <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
        View All Student Dormitories
      </p>
      <div className={`${styles.form_container}`}>
        <div className={styles.dormitory_list}>
          {dormitories.map((dormitory) => {
            return <BuildingItem key={dormitory.building_id} {...dormitory} />;
          })}
        </div>
      </div>
    </div>
  );
}

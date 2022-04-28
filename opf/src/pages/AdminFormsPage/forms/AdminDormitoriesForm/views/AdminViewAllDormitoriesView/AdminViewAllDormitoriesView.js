import styles from "./AdminViewAllDormitoriesView.module.css";
import BuildingItem from "../../../../../../components/BuildingItem/BuildingItem";
export function AdminViewAllDormitoriesView() {
  return (
    <div className={styles.AdminViewAllDormitoriesView}>
      <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
        View All Student Dormitories
      </p>
      <div className={`${styles.form_container}`}>
        <div className={styles.dormitory_list}>
        <BuildingItem
            building_name="Peavine Hall"
            building_abbreviation="PH"
            building_map_number="K2"
            building_capacity="600"
            building_id="2"
          />
        <BuildingItem
            building_name="Peavine Hall"
            building_abbreviation="PH"
            building_map_number="K2"
            building_capacity="600"
            building_id="2"
          />
        <BuildingItem
            building_name="Peavine Hall"
            building_abbreviation="PH"
            building_map_number="K2"
            building_capacity="600"
            building_id="2"
          />
        </div>
      </div>
    </div>
  );
}

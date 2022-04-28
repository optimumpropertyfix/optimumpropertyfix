import styles from "./AdminViewAllUnitsView.module.css";
import UnitItem from "../../../../../../components/UnitItem/UnitItem";
export function AdminViewAllUnitsView() {
  return (
    <div className={styles.AdminViewAllFAQView}>
      <div className={`${styles.form_container}`}>
        <div className={styles.unit_list_container}>
          <div className={styles.unit_list}>
            <UnitItem unit_id="2" unit_number="1" unit_type="SINGLE" unit_occupancy="500" />
            <UnitItem unit_id="2" unit_number="2" unit_letter="A" unit_type="SINGLE" unit_occupancy="500" />
            <UnitItem unit_id="2" unit_number="3" unit_type="SINGLE" unit_occupancy="500" />
            <UnitItem unit_id="2" unit_number="4" unit_letter="A" unit_type="SINGLE" unit_occupancy="500" />
          </div>
        </div>
      </div>
    </div>
  );
}

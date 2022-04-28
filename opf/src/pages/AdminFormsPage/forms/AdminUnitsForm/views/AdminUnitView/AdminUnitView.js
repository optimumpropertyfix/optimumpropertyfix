import styles from "./AdminUnitView.module.css";
import FormGroup from "../../../../../../components/FormGroup/FormGroup";
import { useState } from "react";

export function AdminUnitView() {

  const [type, set_type] = useState("select")

  const handle_type = (event) => {
    set_type(event.target.value)
  }

  return (
    <div className={styles.AdminCreateDormitoryView}>
      <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
        Edit Unit
      </p>
      <div className={`${styles.form_container}`}>
        <div className={styles.fields_container}>
          <div className={styles.unit_number_container}>
            <div className={styles.unit_number}>
              <p>
                UNIT
              </p>
              <p>
                2AA
              </p>
            </div>
          </div>
          <div className={styles.unit_fields}>
          <FormGroup label="Unit Type">
              <select value={type} onChange={handle_type}>
                <option value="select" disabled>
                  Select Type
                </option>
                <option value="Single">Single</option>
                <option value="Double">Double</option>
                <option value="Triple">Triple</option>
                <option value="Quadruple">Quadruple</option>
                <option value="Suite">Suite</option>
              </select>
            </FormGroup>
            <FormGroup label="Unit Number">
              <input type="text" placeholder="1A" />
            </FormGroup>
            <FormGroup label="Unit Occupancy">
              <input type="text" placeholder="600" />
            </FormGroup>
          </div>
        </div>
        <div className={styles.options_container}>
          <button>Create Unit</button>
          <button>Clear Form</button>
        </div>
      </div>
    </div>
  );
}

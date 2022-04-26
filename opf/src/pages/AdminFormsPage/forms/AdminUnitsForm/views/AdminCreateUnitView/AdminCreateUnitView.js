import styles from "./AdminCreateUnitView.module.css";
import FormGroup from "../../../../../../components/FormGroup/FormGroup";

export function AdminCreateUnitView() {
  return (
    <div className={styles.AdminCreateUnitView}>
      <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
        Create New Unit
      </p>
      <div className={`${styles.form_container}`}>
        <div className={styles.fields_container}>
          <div className={styles.unit_fields}>
            <FormGroup label="Name">
              <input type="text" placeholder="Peavine Hall" />
            </FormGroup>
            <FormGroup label="Address">
              <input type="text" placeholder="38 W 11th St, Reno, NV 89503" />
            </FormGroup>
            <FormGroup label="Abbreviation">
              <input type="text" placeholder="PH" />
            </FormGroup>
            <FormGroup label="Year">
              <input type="text" placeholder="2014" />
            </FormGroup>
            <FormGroup label="Map Number">
              <input type="text" placeholder="K2" />
            </FormGroup>
            <FormGroup label="Capacity">
              <input type="text" placeholder="600" />
            </FormGroup>
          </div>
        </div>
        <div className={styles.options_container}>
          <button>
            Create Unit
          </button>
          <button>
            Clear Form
          </button>
        </div>
      </div>
    </div>
  );
}

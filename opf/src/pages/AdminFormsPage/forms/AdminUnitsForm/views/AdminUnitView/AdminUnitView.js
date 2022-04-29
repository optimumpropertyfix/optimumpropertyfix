import styles from "./AdminUnitView.module.css";
import FormGroup from "../../../../../../components/FormGroup/FormGroup";
import { useState, useEffect } from "react";
import TokenManager from "../../../../../../TokenManager";
import { useParams } from "react-router-dom";

export function AdminUnitView() {

  const [type, set_type] = useState("select")

  const handle_type = (event) => {
    set_type(event.target.value)
  }

  const { building_id, unit_id } = useParams()
  const { get_token } = TokenManager()
  const [units, set_units] = useState([])

  useEffect(() => {

    /*
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${get_token()}`,
      },
    };
    const route = view_individual_unit_route(building_id, unit_id);

    fetch(route, options)
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.statusText} - ${response.status}`);
        }
        return response.json();
      })
      .then((units) => {
        set_units(units)
        console.log(units)
      })
      .catch((error) => {
        console.log(error);
      });*/

  }, [])

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
                22A
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

import styles from "./AdminCreateUnitView.module.css";
import FormGroup from "../../../../../../components/FormGroup/FormGroup";
import { useState } from "react";
import TokenManager from "../../../../../../TokenManager";
import { admin_create_unit_route } from "../../../../../../Routes"
import { useNavigate, useParams } from "react-router-dom";

export function AdminCreateUnitView() {

  const { get_token } = TokenManager()
  const { dormitory_id } = useParams()
  const navigate = useNavigate()

  const [type, set_type] = useState("select")
  const [number, set_number] = useState("")
  const [occupancy, set_occupancy] = useState("")

  const handle_type = (event) => {
    set_type(event.target.value)
  }
  const handle_number = (event) => {
    set_number(event.target.value)
  }
  const handle_occupancy = (event) => {
    set_occupancy(event.target.value)
  }

  const clear_form_click = () => {
    set_type("select")
    set_number("")
    set_occupancy("")
  }

  const api_create_unit = () => {

    let unit = serialize_unit(type, number, occupancy)

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${get_token()}`,
      },
      body: unit,
    };

    const route = admin_create_unit_route(dormitory_id);
    fetch(route, options).then((response) => {
      navigate(`/admin/forms/dormitories/${ dormitory_id }`)
    });

  }

  const serialize_unit = (
    type_param,
    number_param,
    occupancy_param
  ) => {
    let unit = {
      unit_type: type_param,
      unit_number: number_param,
      unit_occupancy: occupancy_param
    };

    return JSON.stringify(unit);
  };

  return (
    <div className={styles.AdminCreateUnitView}>
      <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
        Create New Unit
      </p>
      <div className={`${styles.form_container}`}>
        <div className={styles.fields_container}>
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
              <input type="text" placeholder="1A" value={number} onChange={handle_number} />
            </FormGroup>
            <FormGroup label="Unit Occupancy">
              <input type="text" placeholder="600" value={occupancy} onChange={handle_occupancy} />
            </FormGroup>
          </div>
        </div>
        <div className={styles.options_container}>
          <button onClick={api_create_unit}>
            Create Unit
          </button>
          <button onClick={clear_form_click}>
            Clear Form
          </button>
        </div>
      </div>
    </div>
  );
}

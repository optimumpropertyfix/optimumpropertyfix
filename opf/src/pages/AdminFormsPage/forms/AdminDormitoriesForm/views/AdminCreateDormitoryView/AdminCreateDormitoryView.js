import styles from "./AdminCreateDormitoryView.module.css";
import FormGroup from "../../../../../../components/FormGroup/FormGroup";
import TokenManager from "../../../../../../TokenManager";
import {admin_create_dormitory_route} from "../../../../../../Routes"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export function AdminCreateDormitoryView() {

  const { get_token } = TokenManager()
  const navigate = useNavigate()

  const [name, set_name] = useState("")
  const [address, set_address] = useState("") 
  const [abbreviation, set_abbreviation] = useState("")
  const [year, set_year] = useState("")
  const [map_number, set_map_number] = useState("")
  const [capacity, set_capacity] = useState("")

  const handle_name = (event) => {
    set_name(event.target.value)
  }
  const handle_address = (event) => {
    set_address(event.target.value)
  }
  const handle_abbreviation = (event) => {
    set_abbreviation(event.target.value)
  }
  const handle_year = (event) => {
    set_year(event.target.value)
  }
  const handle_map_number = (event) => {
    set_map_number(event.target.value)
  }
  const handle_capacity = (event) => {
    set_capacity(event.target.value)
  }

  const clear_form_click = () => {
    set_name("")
    set_address("")
    set_abbreviation("")
    set_year("")
    set_map_number("")
    set_capacity("")
  }

  

  const api_create_dormitory = () => {

    let building = serialize_building(
      name,
      abbreviation,
      year,
      address,
      capacity,
      map_number
    )

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${get_token()}`,
      },
      body: building,
    };
    const route = admin_create_dormitory_route();

    fetch(route, options).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }

      navigate("/admin/forms/dormitories")
    })

  }

  const create_dormitory_click = () => {

    api_create_dormitory()

  }

  const serialize_building = (
    building_name_param,
    buidling_abbreviation_param,
    building_year_param,
    building_address_param,
    building_capacity_param,
    building_map_number_param
  ) => {
    let serialized_building = {
      "building_name": building_name_param,
      "buidling_abbreviation": buidling_abbreviation_param,
      "building_year": building_year_param,
      "building_address": building_address_param,
      "building_capacity": building_capacity_param,
      "building_map_number": building_map_number_param
    }

    return JSON.stringify(serialized_building)
  }

  return (
    <div className={styles.AdminCreateDormitoryView}>
      <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
        Create New Dormitory
      </p>
      <div className={`${styles.form_container}`}>
        <div className={styles.fields_container}>
          <div className={styles.building_fields}>
            <FormGroup label="Name">
              <input type="text" placeholder="Peavine Hall" value={name} onChange={handle_name} />
            </FormGroup>
            <FormGroup label="Address">
              <input type="text" placeholder="38 W 11th St, Reno, NV 89503" value={address} onChange={handle_address}/>
            </FormGroup>
            <FormGroup label="Abbreviation">
              <input type="text" placeholder="PH" value={abbreviation} onChange={handle_abbreviation}/>
            </FormGroup>
            <FormGroup label="Year">
              <input type="text" placeholder="2014" value={year} onChange={handle_year}/>
            </FormGroup>
            <FormGroup label="Map Number">
              <input type="text" placeholder="99" value={map_number} onChange={handle_map_number} />
            </FormGroup>
            <FormGroup label="Capacity">
              <input type="text" placeholder="600" value={capacity} onChange={handle_capacity} />
            </FormGroup>
          </div>
        </div>
        <div className={styles.options_container}>
          <button onClick={create_dormitory_click}>
            Create Dormitory
          </button>
          <button onClick={clear_form_click}>
            Clear Form
          </button>
        </div>
      </div>
    </div>
  );
}

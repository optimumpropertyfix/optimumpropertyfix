import styles from "./AdminViewDormitoryView.module.css";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import FormGroup from "../../../../../../components/FormGroup/FormGroup";
import TokenManager from "../../../../../../TokenManager";
import { useEffect, useState } from "react"
import { edit_individual_dormitory_route, view_individual_dormitory_route } from "../../../../../../Routes"


export function AdminViewDormitoryView() {
  let location = useLocation();
  const navigate = useNavigate();
  const { get_token } = TokenManager()
  let { dormitory_id, unit_id } = useParams();

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

  const create_unit_click = () => {
    navigate(`/admin/forms/dormitories/${dormitory_id}/create`);
  };

  const view_units_click = () => {
    navigate(`/admin/forms/dormitories/${dormitory_id}`);
  };

  const update_dormitory_click = () => {

    api_update_dormitory()

  }

  const api_update_dormitory = () => {

    let building = serialize_building(
      name,
      abbreviation,
      year,
      address,
      capacity,
      map_number
    )

    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${get_token()}`,
      },
      body: building,
    };
    const route = edit_individual_dormitory_route(dormitory_id);

    fetch(route, options).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      api_refresh_dormitory()
    })

  }

  const api_refresh_dormitory = () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${get_token()}`,
      }
    };
    const route = view_individual_dormitory_route(dormitory_id);

    fetch(route, options).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    }).then((dormitory) => {

      set_name(dormitory.building_name)
      set_abbreviation(dormitory.buidling_abbreviation)
      set_year(dormitory.building_year)
      set_address(dormitory.building_address)
      set_capacity(dormitory.building_capacity)
      set_map_number(dormitory.building_map_number)

    })

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

  useEffect(() => {
    const api_refresh_dormitory = () => {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${get_token()}`,
        }
      };
      const route = view_individual_dormitory_route(dormitory_id);
  
      fetch(route, options).then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response.json()
      }).then((dormitory) => {
        set_name(dormitory.building_name)
        set_abbreviation(dormitory.building_abbreviation)
        set_year(dormitory.building_year)
        set_address(dormitory.building_address)
        set_capacity(dormitory.building_capacity)
        set_map_number(dormitory.building_map_number)
  
      })
  
    }

    api_refresh_dormitory()
  }, [])

  return (
    <div className={styles.AdminViewDormitoryView}>
      <div className={`${styles.form_container}`}>
        <div className={styles.dormitory_units_container}>
          <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
            View Dormitory Units
          </p>
          <div className={styles.dormitory_units}>
            <Outlet />
          </div>
        </div>
        <div className={styles.dormitory_fields_container}>
          <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
            Edit Dormitory Information
          </p>
          <div className={styles.dormitory_fields}>
            <div className={styles.field_group}>
              <FormGroup label="Name">
                <input type="text" placeholder="Peavine Hall" value={name} onChange={handle_name}/>
              </FormGroup>
              <FormGroup label="Address">
                <input type="text" placeholder="38 W 11th St, Reno, NV 89503" value={address} onChange={handle_address} />
              </FormGroup>
              <FormGroup label="Abbreviation">
                <input type="text" placeholder="PH" value={abbreviation} onChange={handle_abbreviation} />
              </FormGroup>
              <FormGroup label="Year">
                <input type="text" placeholder="2014" value={year} onChange={handle_year} />
              </FormGroup>
              <FormGroup label="Map Number">
                <input type="text" placeholder="99" value={map_number} onChange={handle_map_number} />
              </FormGroup>
              <FormGroup label="Capacity">
                <input type="text" placeholder="600" value={capacity} onChange={handle_capacity} />
              </FormGroup>
            </div>
            <div className={styles.dormitory_options}>
              <button onClick={update_dormitory_click}>Update Dormitory</button>
              {location.pathname ===
              `/admin/forms/dormitories/${dormitory_id}` ? (
                <button onClick={create_unit_click}> Create Unit </button>
              ) : null}
              {location.pathname ===
              `/admin/forms/dormitories/${dormitory_id}/${unit_id}` ? (
                <button onClick={view_units_click}> View Units </button>
              ) : null}
              {location.pathname ===
              `/admin/forms/dormitories/${dormitory_id}/create` ? (
                <button onClick={view_units_click}> View Units </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

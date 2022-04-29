import styles from "./AdminViewAllUnitsView.module.css";
import UnitItem from "../../../../../../components/UnitItem/UnitItem";
import { view_dormitory_units_route } from "../../../../../../Routes"
import TokenManager from "../../../../../../TokenManager";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export function AdminViewAllUnitsView() {

  const { dormitory_id } = useParams()
  const { get_token } = TokenManager()
  const [units, set_units] = useState([])

  useEffect(() => {

    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${get_token()}`,
      },
    };
    const route = view_dormitory_units_route(dormitory_id);

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
      });

  }, [])

  return (
    <div className={styles.AdminViewAllFAQView}>
      <div className={`${styles.form_container}`}>
        <div className={styles.unit_list_container}>
          <div className={styles.unit_list}>
            {units.map((unit) => {
              return <UnitItem key={unit.unit_id} {...unit} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

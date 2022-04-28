import styles from "./AdminViewDormitoryView.module.css";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import FormGroup from "../../../../../../components/FormGroup/FormGroup";

export function AdminViewDormitoryView() {
  let location = useLocation();
  const navigate = useNavigate();
  let { dormitory_id, unit_id } = useParams();

  const create_unit_click = () => {
    navigate(`/admin/forms/dormitories/${dormitory_id}/create`);
  };

  const view_units_click = () => {
    navigate(`/admin/forms/dormitories/${dormitory_id}`);
  };

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
            <div className={styles.dormitory_options}>
              <button>Update Dormitory</button>
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

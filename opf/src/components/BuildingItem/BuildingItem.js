import ItemGroup from "../ItemGroup/ItemGroup";
import styles from "./BuildingItem.module.css";
import { useNavigate } from "react-router-dom";

function BuildingItem(props) {
  const navigate = useNavigate();
  const view_building_click = () => {
    navigate(`/admin/forms/dormitories/${props.building_id}`);
  };

  return (
    <div
      className={`${styles.BuildingItem} ${props.className} block_contrast_items`}
    >
      <div className={styles.building_content}>
        <div className={styles.building_details}>
          <ItemGroup label="Name" text={props.building_name} />
          <ItemGroup label="Abbreviation" text={props.building_abbreviation} />
          <ItemGroup label="Map Number" text={props.building_map_number} />
          <ItemGroup label="Capacity" text={props.building_capacity} />
          <ItemGroup label="ID" text={props.building_id} />
        </div>
        <div className={styles.building_options}>
          <button onClick={view_building_click}>VIEW BUILDING</button>
        </div>
      </div>
    </div>
  );
}

export default BuildingItem;

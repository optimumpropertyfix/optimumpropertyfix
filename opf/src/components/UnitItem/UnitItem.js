import ItemGroup from "../ItemGroup/ItemGroup";
import styles from "./UnitItem.module.css";

function UnitItem(props) {
  const view_unit_click = () => {};

  const unit_text = () => {

    if (props.unit_letter != null) {
        return `${props.unit_number}${props.unit_letter}`
    } else {
        return `${props.unit_number}`
    }

  }

  return (
    <div
      className={`${styles.UnitItem} block_contrast_items ${props.className}`}
    >
      <div className={styles.unit_content}>
        <div className={styles.unit_details}>
            <div className={styles.unit_text}>
                <p>
                    { unit_text() }
                </p>
            </div>
          <ItemGroup label="Type" text={props.unit_type} />
          <ItemGroup label="Occupancy" text={props.unit_occupancy} />
          <ItemGroup label="ID" text={props.unit_id} />
        </div>
        <div className={styles.unit_options}>
          <button onClick={view_unit_click}>VIEW UNIT</button>
        </div>
      </div>
    </div>
  );
}

export default UnitItem;

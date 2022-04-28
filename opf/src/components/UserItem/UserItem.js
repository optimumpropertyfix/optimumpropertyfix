import ItemGroup from "../ItemGroup/ItemGroup";
import styles from "./UserItem.module.css";
import { useNavigate } from "react-router-dom";
function UserItem(props) {
  const navigate = useNavigate();
  const view_user_click = () => {
    navigate(`/admin/users/${props.user_id}`);
  };

const user_type_text = () => {

  const user_is_student = props.user_is_student

  if (user_is_student === "1") {
    return "Student"
  } else {
    return "Administrator"
  }

}
  
  return (
    <div
      className={`${styles.UserItem} ${props.className} block_contrast_items`}
    >
      <div className={styles.user_content}>
        <div className={styles.user_details}>
          <ItemGroup label="NetID" text={props.user_net_id} />
          <ItemGroup label="First Name" text={props.user_first_name} />
          <ItemGroup label="Last Name" text={props.user_last_name} />
          <ItemGroup label="User Type" text={user_type_text()} />
          <ItemGroup label="Contact Email" text={props.user_content_email} />
        </div>
        <div className={styles.user_options}>
          { props.user_is_student === "1" ?
          <button onClick={view_user_click}>VIEW USER</button>
          : null }
        </div>
      </div>
    </div>
  );
}

export default UserItem;

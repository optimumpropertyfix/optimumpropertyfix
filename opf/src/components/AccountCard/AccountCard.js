import profile_picture from "../../assets/profile_pictures/renosign.jpg"
import styles from "./AccountCard.module.css";

function AccountCard(props) {

  const gender_text = (gender) => {
    
    if (gender === "F") {
      return "Female"
    } else if (gender === "M") {
      return "Male"
    } else {
      return "Non-binary"
    }
  }

  return (
    <div className={`${styles.AccountCard} ${props.className}`}>
      <div className={styles.account_picture}>
        <img src={profile_picture} />
      </div>
      <div className={styles.account_information}>
        <div>
          <p>First Name</p>
          <p>{props.user_first_name}</p>
        </div>
        <div>
          <p>Last Name</p>
          <p>{props.user_last_name}</p>
        </div>
        <div>
          <p>Gender</p>
          <p>{gender_text(props.user_gender)}</p>
        </div>
        <div>
          <p>Account Type</p>
          <p>{props.user_is_student === 1 ? "Student" : "Administrator"}</p>
        </div>
        <div>
          <p>Contact Email</p>
          <p>{props.user_contact_email}</p>
        </div>
        <div>
          <p>Net ID</p>
          <p>{props.user_net_id}</p>
        </div>
        <div>
          <p>NSHE ID</p>
          <p>{props.user_nshe_id}</p>
        </div>
      </div>
    </div>
  );
}

export default AccountCard;

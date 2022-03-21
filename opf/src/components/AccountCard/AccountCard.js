import profile from "../../assets/profile_test.jpg";
import styles from "./AccountCard.module.css";

function AccountCard(props) {
  return (
    <div className={`${styles.AccountCard} ${props.className}`}>
      <div className={styles.account_picture}>
        <img src={profile} />
      </div>
      <div className={styles.account_information}>
        <div>
          <p>First Name</p>
          <p>{props.user.first_name}</p>
        </div>
        <div>
          <p>Last Name</p>
          <p>{props.user.last_name}</p>
        </div>
        <div>
          <p>Gender</p>
          <p>{props.user.gender}</p>
        </div>
        <div>
          <p>Account Type</p>
          <p>{props.user.is_student == true ? "Student" : "Administrator"}</p>
        </div>
        <div>
          <p>Contact Email</p>
          <p>{props.user.contact_email}</p>
        </div>
        <div>
          <p>Net ID</p>
          <p>{props.user.net_id}</p>
        </div>
        <div>
          <p>NSHE ID</p>
          <p>{props.user.nshe_id}</p>
        </div>
        <div>
          <p>Account Created</p>
          <p>{props.user.account_created}</p>
        </div>
      </div>
    </div>
  );
}

export default AccountCard;

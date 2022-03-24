import picture from "../../assets/profile_test.jpg";
import AccountCard from "../../components/AccountCard/AccountCard";
import styles from "./AccountPage.module.css";

export default function AccountPage(props) {
  const user_profile = {
    first_name: "Araam",
    last_name: "Zaremehrjardi",
    gender: "Male",
    is_student: true,
    contact_email: "azaremehrjardi@nevada.unr.com",
    net_id: "azaremehrjardi",
    nshe_id: "8001075491",
    account_created: "07/08/2018",
  };

  return (
    <div className={`${styles.AccountPage}`}>
      <div className={styles.container}>
        <div className="text_page_title">
          <p>Your Account Details </p>
        </div>
        <AccountCard user={user_profile} />
        <AccountCard user={user_profile} />
        <div className={styles.account_options}>
          <button>Edit Profile</button>
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
}

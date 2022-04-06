import styles from "./ResetPasswordView.module.css";
import login_styles from "../../LoginPage.module.css";
function ResetPasswordView() {
  return (
    <div className={styles.ResetPasswordView}>
      <p className={`${login_styles.page_title} ${styles.page_title}`}>
        Reset Your Password
      </p>
      <form className={styles.form}>
        <div
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <label className={login_styles.label}>NetID</label>
          <input type="text" placeholder="NetID" />
        </div>
        <div
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <label className={login_styles.label}>NSHEID</label>
          <input type="text" placeholder="NSHEID" />
        </div>
        <div
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <label className={login_styles.label}>Password</label>
          <input type="text" placeholder="Password" />
        </div>
        <div
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <label className={login_styles.label}>Re-enter Password</label>
          <input type="text" placeholder="Re-enter Password" />
        </div>
      </form>
      <input
        className={`${login_styles.button} ${styles.button}`}
        type="submit"
        value="Reset Password"
      />
    </div>
  );
}

export default ResetPasswordView;

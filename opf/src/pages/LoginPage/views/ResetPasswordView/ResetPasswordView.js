import FormGroup from "../../../../components/FormGroup/FormGroup";
import styles from "./ResetPasswordView.module.css";
import login_styles from "../../LoginPage.module.css";
function ResetPasswordView() {
  return (
    <div className={styles.ResetPasswordView}>
      <p className={`${login_styles.page_title} ${styles.page_title}`}>
        Reset Your Password
      </p>
      <form className={styles.form}>
        <FormGroup
          label="NetID"
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <input type="text" placeholder="NetID" />
        </FormGroup>
        <FormGroup
          label="NSHEID"
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <input type="text" placeholder="NSHEID" />
        </FormGroup>
        <FormGroup
          label="Password"
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <input type="text" placeholder="Password" />
        </FormGroup>
        <FormGroup
          label="Re-enter Password"
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <input type="text" placeholder="Re-enter Password" />
        </FormGroup>
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

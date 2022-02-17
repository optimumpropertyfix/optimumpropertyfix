import styles from "./SignInView.module.css";
function SignInView() {
  return (
    <div className={styles.SignInView}>
      <p className={`${styles.page_title} text_page_title`}>Sign In</p>
      <form className={styles.form}>
        <div className="layout_helper_FormGroup">
          <label>NetID</label>
          <input type="text" />
        </div>
        <div className="layout_helper_FormGroup">
          <label>Password</label>
          <input type="text" />
        </div>
        <input type="submit" value="Sign In" />
      </form>
    </div>
  );
}

export default SignInView;

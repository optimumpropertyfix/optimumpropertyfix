import styles from "./CreateAccountView.module.css";
function CreateAccountView() {
  return (
    <div className={`${styles.CreateAccountView} layout_helper_ParentSet`}>
      <div className={`${styles.page_title} layout_helper_ChildItem`}>
        <p className="text_page_title">Create an Account</p>
      </div>
      <div className="layout_helper_ChildItem">
        <form className={styles.form}>
          <div className="layout_helper_FormGroup">
            <label>Who are you?</label>
            <select name="user_type" defaultValue={"Student"}>
              <option value="Administrator">Administrator</option>
              <option value="Student">Student</option>
            </select>
          </div>
          <div className="layout_helper_FormGroup">
            <label>Email Address</label>
            <input type="text" />
          </div>
          <div className="layout_helper_FormGroup">
            <label>NetID</label>
            <input type="text" />
          </div>
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
}

export default CreateAccountView;

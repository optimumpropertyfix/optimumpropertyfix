import styles from "./CreateAccountView.module.css";
function CreateAccountView() {
  return (
    <div className={`${styles.CreateAccountView} layout_helper_ParentSet`}>
      <div className="layout_helper_ChildItem">
        <p className="text_page_title">Create an Account</p>
      </div>
      <div className="layout_helper_ChildItem">
        <form className={styles.form}>
          <div className="layout_helper_FormGroup">
            <label>Email Address</label>
            <input type="text" />
          </div>
          <div className="layout_helper_FormGroup">
            <label>NSHE ID</label>
            <input type="text" />
          </div>
        </form>
        <textarea></textarea>
      </div>
    </div>
  );
}

export default CreateAccountView;

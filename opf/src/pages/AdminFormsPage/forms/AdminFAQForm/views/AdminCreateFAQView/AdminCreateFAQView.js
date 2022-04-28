import styles from "./AdminCreateFAQView.module.css";
import FormGroup from "../../../../../../components/FormGroup/FormGroup";

export function AdminCreateFAQView() {
  return (
    <div className={styles.AdminCreateFAQView}>
      <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
        Create New Student Frequently Asked Question
      </p>
      <div className={`${styles.form_container}`}>
        <div className={styles.question_container}>
          <FormGroup label="Frequently Asked Question">
            <input type="text" placeholder="How to Create Ticket"/>
          </FormGroup>
        </div>
        <div className={styles.answer_container}>
          <FormGroup label="Frequently Asked Question Answer">
            <textarea rows="10" placeholder="Please follow the instructions on the right side."/>
          </FormGroup>
        </div>
        <div className={styles.options_container}>
          <button>
            Create Frequently Asked Question
          </button>
        </div>
      </div>
    </div>
  );
}

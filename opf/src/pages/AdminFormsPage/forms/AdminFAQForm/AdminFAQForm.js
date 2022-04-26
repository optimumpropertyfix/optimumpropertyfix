import styles from "./AdminFAQForm.module.css";
import { Outlet } from "react-router-dom";
import { FormNavigation } from "../../../../components/Navigation/Navigation";
import { FormNavLink } from "../../../../components/Navigation/Navigation";

export function AdminFAQForm() {
  return (
    <div className={styles.AdminFAQForm}>
      <div className={`${styles.view_container} form_layout`}>
        <p className={`${styles.page_title_text} page_title_text`}>
          Manage Student Frequently Asked Questions
        </p>
        <div className={`${styles.content_container} form_content_layout`}>
          <FormNavigation label="FREQUENTLY ASKED QUESTIONS OPTIONS">
            <FormNavLink end to="/admin/forms/frequently_asked_questions">
              View Frequently Asked Questions
            </FormNavLink>
            <FormNavLink end to="/admin/forms/frequently_asked_questions/create">
              Create Frequently Asked Question
            </FormNavLink>
          </FormNavigation>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

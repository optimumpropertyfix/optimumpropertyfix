import styles from "./AdminFormsOptionsPage.module.css";
import Card from "../../../components/Card/Card";
import { useNavigate } from "react-router-dom";
export function AdminFormsOptionsPage() {
  const navigate = useNavigate();

  const manage_announcements_click = () => {
    navigate(`/admin/forms/announcements`);
  };

  const manage_faq_click = () => {
    navigate(`/admin/forms/frequently_asked_questions`);
  };

  const manage_dormitories_click = () => {
    navigate(`/admin/forms/dormitories`);
  };

  return (
    <div className={styles.AdminFormsOptionsPage}>
      <div className={`${styles.view_container} view_layout`}>
        <p className={`${styles.page_title_text} page_title_text`}>
          Create New Forms for Students
        </p>
        <div className={`${styles.content_container} view_content_layout`}>
          <div className={styles.form_selection}>
            <Card label="Create New Announcements">
              <div className={styles.selection_card_content}>
                <p className={styles.selection_description}>
                  Create new announcements for student's dashboard.
                  Administrators are able to create new announcements, delete
                  announcements, and view all information pretaining to created
                  announcements.
                </p>
                <button
                  className={styles.selection_button}
                  onClick={manage_announcements_click}
                >
                  Manage Announcements
                </button>
              </div>
            </Card>
            <Card label="Create New Frequently Asked Question">
              <div className={styles.selection_card_content}>
                <p className={styles.selection_description}>
                  Create an new Frequently Asked Question for students.
                  Administrators are able to create new FAQs, delete FAQs, and
                  view all information pretaining to created FAQs.
                  Administrators can also edit an existing FAQ.
                </p>
                <button
                  className={styles.selection_button}
                  onClick={manage_faq_click}
                >
                  Manage Frequently Asked Questions
                </button>
              </div>
            </Card>
            <Card label="Create New Dormitory">
              <div className={styles.selection_card_content}>
                <p className={styles.selection_description}>
                  Create a new dormitory for students ticket selection.
                  Administrators are able to create new dormitories for students
                  to select on their tickets. Administrators are able to rename,
                  delete, and create new dormitories and units associated to a
                  dormitory.
                </p>
                <button
                  className={styles.selection_button}
                  onClick={manage_dormitories_click}
                >
                  Manage Dormitories
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

import styles from "./AllAppointmentsView.module.css";
import FormGroup from "../../../../components/FormGroup/FormGroup";

function AllAppointmentsView(props) {
  return (
    <div className={styles.AllAppointmentsView}>
      <div className={`${styles.view_container} view_layout`}>
        <p className={`${styles.page_title_text} page_title_text`}>
          View All Your Appointments
        </p>
        <div
          className={`${styles.content_container} view_content_layout`}
        ></div>
      </div>
    </div>
  );
}

export default AllAppointmentsView;

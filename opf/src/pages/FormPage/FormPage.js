import styles from "./FormPage.module.css";

export function AdminFormsPage() {
  return (
    <div className={styles.header}>
      <h1>Form Page</h1>
      <div className={styles.annoucement}>
        <p>Create Annoucement</p>
        <div className={styles.faq}>
          <p>Create Frequently Asked Question</p>
        </div>
      </div>
    </div>
  );
}
export default { AdminFormsPage };

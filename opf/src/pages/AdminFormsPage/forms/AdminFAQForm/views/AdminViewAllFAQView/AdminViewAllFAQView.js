import styles from "./AdminViewAllFAQView.module.css";
import FAQItem from "../../../../../../components/FAQItem/FAQItem";
export function AdminViewAllFAQView() {
  return (
    <div className={styles.AdminViewAllFAQView}>
      <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
        View All Student Frequently Asked Questions
      </p>
      <div className={`${styles.form_container}`}>
        <div className={styles.faq_list}>
          <FAQItem
            faq_question="Who are we?"
            faq_answer="Goon Squad Goon Squad Goon Squad Goon Squad Goon Squad"
            faq_user="John Doe"
            faq_id="23"
          />
          <FAQItem
            faq_question="Who are we?"
            faq_answer="Goon Squad Goon Squad Goon Squad Goon Squad Goon Squad"
            faq_user="John Doe"
            faq_id="23"
          />
          <FAQItem
            faq_question="Who are we?"
            faq_answer="Goon Squad Goon Squad Goon Squad Goon Squad Goon Squad"
            faq_user="John Doe"
            faq_id="23"
          />
          <FAQItem
            faq_question="Who are we?"
            faq_answer="Goon Squad Goon Squad Goon Squad Goon Squad Goon Squad"
            faq_user="John Doe"
            faq_id="23"
          />
          <FAQItem
            faq_question="Who are we?"
            faq_answer="Goon Squad Goon Squad Goon Squad Goon Squad Goon Squad"
            faq_user="John Doe"
            faq_id="23"
          />
          <FAQItem
            faq_question="Who are we?"
            faq_answer="Goon Squad Goon Squad Goon Squad Goon Squad Goon Squad"
            faq_user="John Doe"
            faq_id="23"
          />
        </div>
      </div>
    </div>
  );
}

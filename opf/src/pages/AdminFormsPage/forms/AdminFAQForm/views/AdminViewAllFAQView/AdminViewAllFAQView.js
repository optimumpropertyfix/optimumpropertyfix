import styles from "./AdminViewAllFAQView.module.css";
import FAQItem from "../../../../../../components/FAQItem/FAQItem";
import { useEffect, useState } from "react";
import { view_all_faqs_route } from "../../../../../../Routes"
import TokenManager from "../../../../../../TokenManager";

export function AdminViewAllFAQView() {

  const { get_token } = TokenManager();
  const [faqs, set_faqs] = useState([])

  useEffect(() => {

    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${get_token()}`,
      },
    };
    const route = view_all_faqs_route();

    fetch(route, options)
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.statusText} - ${response.status}`);
        }
        return response.json();
      })
      .then((faqs) => {
        set_faqs(faqs)
        console.log(faqs)
      })
      .catch((error) => {
        console.log(error);
      });


  }, [])

  return (
    <div className={styles.AdminViewAllFAQView}>
      <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
        View All Student Frequently Asked Questions
      </p>
      <div className={`${styles.form_container}`}>
        <div className={styles.faq_list}>
          {faqs.map((faq) => {
            return <FAQItem key={faq.faq_id} {...faq} />;
          })}
        </div>
      </div>
    </div>
  );
}

/*
[1] https://reactjs.org/docs/hooks-reference.html#usestate  
[2] https://reactjs.org/docs/react-api.html#reactchildrenmap 
<span class = "material-icons">blah</span>
*/

import React, { useEffect, useState } from "react";
import { ToggleableCard } from "../../components/Card/Card";
import { studentData, adminData } from "./Data";
import styles from "./FrequentlyAskedQuestion.module.css";
import TokenManager from "../../TokenManager";
import { view_all_faqs_route } from "../../Routes"

export function AdminFAQPage() {
  return (
    <div className={styles.StudentFAQPage}>
      <div className={`${styles.view_container} form_layout`}>
        <p className={`${styles.page_title_text} page_title_text`}>
          Frequently Asked Questions
        </p>
        <div className={`${styles.content_container} view_content_layout`}>
          {adminData.map((faq) => {
            return (
              <ToggleableCard
                key={faq.id}
                label={faq.question}
                className={styles.faq_card}
              >
                <p className={styles.faq_answer}>{faq.answer}</p>
              </ToggleableCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function StudentFAQPage() {

  const [faqs, set_faqs] = useState([])
  const { get_token } = TokenManager()

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
        console.log(faqs)
        set_faqs(faqs)
      })
      .catch((error) => {
        console.log(error);
      });


  }, [])

  return (
    <div className={styles.StudentFAQPage}>
      <div className={`${styles.view_container} view_layout`}>
        <p className={`${styles.page_title_text} page_title_text`}>
          Frequently Asked Questions
        </p>
        <div className={`${styles.content_container} view_content_layout`}>
          {faqs.map((faq) => {
            return (
              <ToggleableCard
                key={faq.faq_id}
                label={faq.faq_question}
                className={styles.faq_card}
              >
                <p className={styles.faq_answer}>{faq.faq_answer}</p>
              </ToggleableCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

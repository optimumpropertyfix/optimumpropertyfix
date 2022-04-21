/*
[1] https://reactjs.org/docs/hooks-reference.html#usestate  
[2] https://reactjs.org/docs/react-api.html#reactchildrenmap 
<span class = "material-icons">blah</span>
*/

import React, { useEffect, useState } from "react";
import { ToggleableCard } from "../../components/Card/Card";
import { studentData, adminData } from "./Data";
import styles from "./FrequentlyAskedQuestion.module.css";

const FAQ = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.item}>
      <div className={styles.question} onClick={() => setIsActive(!isActive)}>
        <div>{question}</div>
        <div>
          {isActive ? (
            <span class="material-icons">remove</span>
          ) : (
            <span class="material-icons">add</span>
          )}
        </div>
      </div>
      {isActive && (
        <p>
          <div className={styles.answer}>{answer}</div>
        </p>
      )}
    </div>
  );
};

export function AdminFAQPage() {
  return (
    <div className={styles.header}>
      <h1>Frequently Asked Questions</h1>
      <div className={styles.container}>
        {adminData.map(({ question, answer }) => (
          <FAQ question={question} answer={answer} />
        ))}
      </div>
    </div>
  );
}

export function StudentFAQPage() {
  useEffect(() => {
    console.log(studentData);
  });
  return (
    <div className={styles.StudentFAQPage}>
      <div className={`${styles.view_container} view_layout`}>
        <p className={`${styles.page_title_text} page_title_text`}>
          Frequently Asked Questions
        </p>
        <div className={`${styles.content_container} view_content_layout`}>
          {studentData.map((faq) => {
            return (
              <ToggleableCard key={faq.id} label={faq.question} className={styles.faq_card}>
                <p className={styles.faq_answer}>{faq.answer}</p>
              </ToggleableCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

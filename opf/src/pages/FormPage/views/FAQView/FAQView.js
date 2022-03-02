/* References: 
[1] https://reactjs.org/docs/forms.html 
[2] https://www.telerik.com/blogs/how-to-build-forms-with-react-the-easy-way 
*/
import React, { useState } from "react";
import styles from "./FAQView.module.css";

export function AdminCreateFAQView() {
  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState([]);

  const handleSubmit = (event) => {
    console.log(`
      Question:${question}
      Answer:${answer}
    `);
    event.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <h1>Frequently Asked Question</h1>
      </div>
      <label>
        Question:
        <input
          name="question"
          type="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
      </label>
      <label>
        Answer:
        <input
          name="answer"
          type="answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />
      </label>

      <button className={styles.button}>Submit</button>
    </form>
  );
}

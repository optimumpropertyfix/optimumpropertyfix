import React, { useState } from "react";
import styles from "./FAQ.module.css";

export default function FAQForm() {
  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState([]);

  const submitHandler = (event) => {
    console.log(`
    Question: ${question}
    Answer:${answer}
    `);
    //prevent a browser reload/refresh
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <div className={styles.header}>
          <h1>Create FAQ</h1>
        </div>

        <label>
          <p className={styles.titles}>Question</p>
          <input
            className={styles.input}
            name="question"
            type="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </label>

        <label>
          <p className={styles.titles}>Answer</p>
          <input
            className={styles.input}
            name="answer"
            type="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
        </label>

        <button className={styles.button}>Submit</button>
      </form>
    </div>
  );
}

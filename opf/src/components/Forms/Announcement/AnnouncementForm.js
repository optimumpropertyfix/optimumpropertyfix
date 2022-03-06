import React, { useState } from "react";
import styles from "./Announcement.module.css";

export default function AnnouncementForm() {
  const [title, setTitle] = useState([]);
  const [message, setMessage] = useState([]);
  const [date, setDate] = useState([]);

  const submitHandler = (event) => {
    console.log(`
  Question: ${title}
  Answer:${message}
  Date:${date}
  `);
    //prevent a browser reload/refresh
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <div className={styles.header}>
          <h1>Create Announcement</h1>
        </div>
        <div>
          <label>
            <p className={styles.titles}>Title</p>
            <input
              className={styles.input}
              name="title"
              type="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            <p className={styles.titles}>Message</p>
            <input
              className={styles.input}
              name="message"
              type="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            <p className={styles.titles}>Date</p>
            <input
              className={styles.input}
              name="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
        </div>

        <button className={styles.button}>Submit</button>
      </form>
    </div>
  );
}

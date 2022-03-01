/* References: 
[1] https://reactjs.org/docs/forms.html 
[2] https://www.telerik.com/blogs/how-to-build-forms-with-react-the-easy-way 
*/
import React, { useState } from "react";
import styles from "./AnnouncementView.module.css";

export function AdminCreateAnnouncementView() {
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);

  const handleSubmit = (event) => {
    console.log(`
      Title:${title}
      Content:${content}
    `);
    event.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <h1>Announcement</h1>
      </div>
      <label>
        Title:
        <input
          name="title"
          type="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Content:
        <input
          name="content"
          type="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </label>

      <button className={styles.button}>Submit</button>
    </form>
  );
}

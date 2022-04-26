import ItemGroup from "../ItemGroup/ItemGroup";
import styles from "./FAQItem.module.css";
function FAQItem(props) {
  const view_faq_click = () => {};

  const question_text = (question) => {
    let question_string = new String(question);
    let maximum_length = 40;
    if (question_string.length > maximum_length) {
      return question_string.slice(0, maximum_length).trim() + "...";
    }
    return question_string;
  };

  const answer_text = (answer) => {
    let answer_string = new String(answer);
    let maximum_length = 40;
    if (answer_string.length > maximum_length) {
      return answer_string.slice(0, maximum_length).trim() + "...";
    }
    return answer_string;
  };

  return (
    <div
      className={`${styles.FAQItem} ${props.className} block_contrast_items`}
    >  
      <div className={styles.faq_content}>
        <div className={styles.faq_details}>
          <ItemGroup label="Question" text={question_text(props.faq_question)} />
          <ItemGroup
            label="Answer"
            text={answer_text(props.faq_answer)}
          />
          <ItemGroup label="User" text={props.faq_user} />
          <ItemGroup label="ID" text={props.faq_id} />
        </div>
        <div className={styles.faq_options}>
          <button onClick={view_faq_click}>VIEW FAQ</button>
        </div>
      </div>
    </div>
  );
}

export default FAQItem;

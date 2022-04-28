import styles from "./AdminCreateFAQView.module.css";
import FormGroup from "../../../../../../components/FormGroup/FormGroup";
import TokenManager from "../../../../../../TokenManager";
import { admin_create_individual_faq_route } from "../../../../../../Routes"
import { useState } from "react";

export function AdminCreateFAQView() {

  const { get_token } = TokenManager();
  const [faq_question, set_faq_question] = useState("")
  const [faq_answer, set_faq_answer] = useState("")

  const handle_faq_question = (event) => {
    set_faq_question(event.target.value)
  }

  const handle_faq_answer = (event) => {
    set_faq_answer(event.target.value)
  }

  const create_faq_click = () => {
    api_admin_create_individual_faq_route()
  }

  const api_admin_create_individual_faq_route = () => {
    let faq = serialize_faq(
      faq_question,
      faq_answer
    );

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${get_token()}`,
      },
      body: faq,
    };

    const route = admin_create_individual_faq_route();
    fetch(route, options);

  }

  const serialize_faq = (
    question_param,
    answer_param,
  ) => {
    let faq = {
      faq_question: question_param,
      faq_answer: answer_param,
    };

    return JSON.stringify(faq);
  };

  return (
    <div className={styles.AdminCreateFAQView}>
      <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
        Create New Student Frequently Asked Question
      </p>
      <div className={`${styles.form_container}`}>
        <div className={styles.question_container}>
          <FormGroup label="Frequently Asked Question">
            <input type="text" placeholder="How to Create Ticket" onChange={handle_faq_question} value={faq_question}/>
          </FormGroup>
        </div>
        <div className={styles.answer_container}>
          <FormGroup label="Frequently Asked Question Answer">
            <textarea rows="10" placeholder="Please follow the instructions on the right side." onChange={handle_faq_answer} value={faq_answer}/>
          </FormGroup>
        </div>
        <div className={styles.options_container}>
          <button onClick={create_faq_click}>
            Create Frequently Asked Question
          </button>
        </div>
      </div>
    </div>
  );
}

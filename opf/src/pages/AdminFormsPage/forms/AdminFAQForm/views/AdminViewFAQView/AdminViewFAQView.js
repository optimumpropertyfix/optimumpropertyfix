import styles from "./AdminViewFAQView.module.css";
import ItemGroup from "../../../../../../components/ItemGroup/ItemGroup";
import FormGroup from "../../../../../../components/FormGroup/FormGroup";
import TokenManager from "../../../../../../TokenManager";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { admin_edit_individual_faq_route, admin_view_individual_faq_route } from "../../../../../../Routes"

export function AdminViewFAQView() {

  const { get_token } = TokenManager()
  const navigate = useNavigate()
  const { frequently_asked_questions_id } = useParams()

  const [faq_question, set_faq_question] = useState("")
  const [faq_answer, set_faq_answer] = useState("")
  const [faq, set_faq] = useState({})

  const api_admin_edit_individual_faq = () => {

    let faq = serialize_faq(
      faq_question,
      faq_answer
    );

    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${get_token()}`,
      },
      body: faq,
    };

    const route = admin_edit_individual_faq_route(frequently_asked_questions_id);
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

  const close_faq_click = () => {
    navigate(`/admin/forms/frequently_asked_questions`)
  }

  const handle_faq_answer = (event) => {
    set_faq_answer(event.target.value)
  }

  const handle_faq_question = (event) => {
    set_faq_question(event.target.value)
  }

  const update_faq_click = () => {
    api_admin_edit_individual_faq()
    api_view_individual_faq()
  }

  const api_view_individual_faq = () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${get_token()}`,
      },
    };

    const route = admin_view_individual_faq_route(frequently_asked_questions_id);
    fetch(route, options).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }

      return response.json()
    }).then((faq_data) => {
      console.log(faq_data)
      set_faq(faq_data)
    }).catch((error) => {
      console.log(error)
    });
  }

  useEffect(() => {
    api_view_individual_faq()
  }, [])

  return (
    <div className={styles.AdminViewFAQView}>
      <div className={`${styles.form_container}`}>
        <div className={styles.edit_faq_container}>
          <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
            Edit Frequently Asked Question
          </p>
          <div className={styles.edit_faq}> 
            <div className={styles.faq_fields}>
              <FormGroup label="FAQ Question">
                <input type="text" placeholder="Who are we?" value={faq_question} onChange={handle_faq_question}/>
              </FormGroup> 
              <FormGroup label="FAQ Answer">
                <textarea rows="20" placeholder="OPF" value={faq_answer} onChange={handle_faq_answer} />
              </FormGroup>
            </div>
            <div className={styles.faq_options}>
              <button onClick={update_faq_click}>
                Update Frequently Asked Question
              </button>
              <button onClick={close_faq_click}>
                Close Frequently Asked Question
              </button>
            </div>
          </div>
        </div>
        <div className={styles.faq_metadata_container}>
          <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
            Frequently Asked Question Information
          </p>
          <div className={styles.faq_metadata}>
            <div className={styles.metadata_group}>
              <ItemGroup className={`block_contrast_items`} label="Question" text={faq.faq_question} />
              <ItemGroup className={`block_contrast_items`} label="Answer" text={faq.faq_answer} />
              <ItemGroup className={`block_contrast_items`} label="User" text={`${faq.user_first_name} ${faq.user_last_name}`} />
              <ItemGroup className={`block_contrast_items`} label="ID" text={2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

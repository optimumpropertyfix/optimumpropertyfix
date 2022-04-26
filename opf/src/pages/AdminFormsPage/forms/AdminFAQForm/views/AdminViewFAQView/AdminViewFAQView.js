import styles from "./AdminViewFAQView.module.css";
import ItemGroup from "../../../../../../components/ItemGroup/ItemGroup";
import FormGroup from "../../../../../../components/FormGroup/FormGroup";

export function AdminViewFAQView() {
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
                <input type="text" placeholder="Who are we?"/>
              </FormGroup>
              <FormGroup label="FAQ Answer">
                <textarea rows="20" placeholder="The Goon Squad."/>
              </FormGroup>
            </div>
            <div className={styles.faq_options}>
              <button>
                Update Frequently Asked Question
              </button>
              <button>
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
              <ItemGroup className={`block_contrast_items`} label="Question" text={`Block Party at the Joe`} />
              <ItemGroup className={`block_contrast_items`} label="Answer" text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`} />
              <ItemGroup className={`block_contrast_items`} label="User" text={`John Doe`} />
              <ItemGroup className={`block_contrast_items`} label="ID" text={2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

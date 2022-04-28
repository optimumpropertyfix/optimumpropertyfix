import styles from "./AdminAnnouncementView.module.css";
import ItemGroup from "../../../../../../components/ItemGroup/ItemGroup";
import FormGroup from "../../../../../../components/FormGroup/FormGroup";

export function AdminAnnouncementView() {
  return (
    <div className={styles.AdminAnnouncementView}>
      <div className={`${styles.form_container}`}>
        <div className={styles.edit_announcement_container}>
          <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
            Edit Announcement
          </p>
          <div className={styles.edit_announcement}> 
            <div className={styles.announcement_fields}>
              <FormGroup label="Announcement Title">
                <input type="text" placeholder="Block Party at the Joe"/>
              </FormGroup>
              <FormGroup label="Announcement Message">
                <textarea rows="20" placeholder="Please join us at the Joe Crowley Student Union for a Block Party. Bring friends to enjoy food, games, and prizes."/>
              </FormGroup>
            </div>
            <div className={styles.announcement_options}>
              <button>
                Update Announcement
              </button>
              <button>
                Close Announcement
              </button>
            </div>
          </div>
        </div>
        <div className={styles.announcement_metadata_container}>
          <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
            Announcement Information
          </p>
          <div className={styles.announcement_metadata}>
            <div className={styles.metadata_group}>
              <ItemGroup className={`block_contrast_items`} label="Title" text={`Block Party at the Joe`} />
              <ItemGroup className={`block_contrast_items`} label="Message" text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`} />
              <ItemGroup className={`block_contrast_items`} label="Date" text={`12/15/2022`} />
              <ItemGroup className={`block_contrast_items`} label="User" text={`John Doe`} />
              <ItemGroup className={`block_contrast_items`} label="ID" text={2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

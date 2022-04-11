import Widget from "../Widget/Widget";
import ItemGroup from "../ItemGroup/ItemGroup";
import styles from "./Ticket.module.css";

function Ticket(props) {
  const status_color = (status) => {
    if (status === "C") {
      return "complete_status";
    } else if (status === "P") {
      return "pending_status";
    } else {
      return "delete_status";
    }
  };

  const status_text = (status) => {
    if (status === "C") {
      return "COMPLETED";
    } else if (status === "P") {
      return "PENDING";
    } else {
      return "DELETED";
    }
  };

  return (
    <div className={styles.Ticket}>
      <Widget
        className={`${styles.status_metadata} ${status_color(
          props.ticket_status
        )}`}
        label="Status"
      >
        {status_text(props.ticket_status)}
      </Widget>
      <ItemGroup
        className={`block_contrast_items ${styles.title_metadata}`}
        label="Title"
        text={props.ticket_title}
      />
      <ItemGroup
        className={`block_contrast_items ${styles.description_metadata}`}
        label="Description"
        text={props.ticket_description}
      />
      <ItemGroup
        className="block_contrast_items"
        label="Severity"
        text={props.ticket_severity}
      />
      <ItemGroup
        className="block_contrast_items"
        label="Time Created"
        text={props.ticket_created}
      />
      <ItemGroup
        className="block_contrast_items"
        label="Ticket ID"
        text={props.ticket_id}
      />
      <ItemGroup
        className="block_contrast_items"
        label="Location"
        text={props.ticket_location}
      />
      <ItemGroup
        className="block_contrast_items"
        label="Building Name"
        text={props.ticket_building_name}
      />
      <ItemGroup
        className="block_contrast_items"
        label="Unit Number"
        text={props.ticket_unit_number}
      />
      {props.ticket_additional_notes !== "" ? (
        <ItemGroup
          className={`block_contrast_items ${styles.additional_notes_metadata}`}
          label="Additional Notes"
          text={props.ticket_additional_notes}
        />
      ) : null}
    </div>
  );
}

export default Ticket;

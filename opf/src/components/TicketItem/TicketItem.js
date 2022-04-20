import { useNavigate } from "react-router-dom";
import ItemGroup from "../ItemGroup/ItemGroup";
import Widget from "../Widget/Widget";
import styles from "./TIcketItem.module.css";

function TicketItem(props) {
  const navigate = useNavigate()

  const status_color = (status) => {
    if (status === "Completed") {
      return "complete_status";
    } else if (status === "Pending") {
      return "pending_status";
    } else if (status === "Received") {
      return "received_status";
    } else {
      return "cancelled_status";
    }
  };

  const status_text = (status) => {
    if (status === "Completed") {
      return "COMPLETED";
    } else if (status === "Pending") {
      return "PENDING";
    } else if (status === "Received") {
        return "RECEIVED";
    } else {
      return "CANCELLED";
    }
  };

  const severity_text = (severity) => {
    if (severity === "Low") {
      return "LOW";
    } else if (severity === "Mild") {
      return "MILD";
    } else if (severity === "Tbd") {
      return "TBD";
    } else {
      return "HIGH";
    }
  };

  const view_ticket_click = () => {
    navigate(`/student/maintenance_requests/${props.ticket_id}`)
  }

  const title_text = (title) => {
    let title_string = new String(title);
    let maximum_length = 35;
    if (title_string.length > maximum_length) {
      return title_string.slice(0, maximum_length).trim() + "...";
    }
    return title_string;
  };

  const datetime_text_converter = (datetime) => {
    let datetime_string = String(datetime).split(" ")
    let year = Number(datetime_string[2])
    let date = Number(datetime_string[1])
    let month = Number(datetime_string[0])
    return `${month}/${date}/${year}`
  }

  return (
    <div className={`${styles.TicketItem} block_contrast_items`}>
      <ItemGroup
        className={styles.title}
        label="Title"
        text={title_text(props.ticket_title)}
      ></ItemGroup>
      <ItemGroup label="Status">
        <Widget className={`${styles.status} ${status_color(props.ticket_status)}`}>
          {status_text(props.ticket_status)}
        </Widget>
      </ItemGroup>
      <ItemGroup label="Ticket Location" text={props.ticket_location} />
      <ItemGroup label="Date Requested" text={datetime_text_converter(props.ticket_created)} />
      <ItemGroup label="Ticket ID" text={props.ticket_id} />
      <ItemGroup label="Severity" text={severity_text(props.ticket_severity)} />
      <button onClick={view_ticket_click} className={styles.view_ticket}> VIEW TICKET </button>
    </div>
  );
}

export default TicketItem;

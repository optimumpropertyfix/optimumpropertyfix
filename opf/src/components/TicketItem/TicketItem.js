import { useState } from "react";
import ItemGroup from "../ItemGroup/ItemGroup";
import Widget from "../Widget/Widget";
import styles from "./TIcketItem.module.css";

function TicketItem(props) {
  const status_color = (status) => {
    if (status === "C") {
      return styles.complete_status;
    } else if (status === "P") {
      return styles.pending_status;
    } else {
      return styles.delete_status;
    }
  };

  const status_text = (status) => {
    if (status === "D") {
      return "DELETED";
    } else if (status === "P") {
      return "PENDING";
    } else {
      return "COMPLETED";
    }
  };

  const severity_text = (severity) => {
    if (severity === "L") {
      return "LOW";
    } else if (severity === "M") {
      return "MILD";
    } else {
      return "HIGH";
    }
  };

  const title_text = (title) => {
    let title_string = new String(title);
    let maximum_length = 35;
    if (title_string.length > maximum_length) {
      return title_string.slice(0, maximum_length).trim() + "...";
    }
    return title_string;
  };

  return (
    <div className={styles.TicketItem}>
      <ItemGroup
        className={styles.title}
        label="Title"
        text={title_text(props.title)}
      ></ItemGroup>
      <ItemGroup label="Status">
        <Widget className={`${styles.status} ${status_color(props.status)}`}>
          {status_text(props.status)}
        </Widget>
      </ItemGroup>
      <ItemGroup label="Ticket Location" text={props.location} />
      <ItemGroup label="Date Requested" text={props.date} />
      <ItemGroup label="Ticket ID" text={props.id} />
      <ItemGroup label="Severity" text={severity_text(props.severity)} />
      <button className={styles.view_ticket}> VIEW TICKET </button>
    </div>
  );
}

export default TicketItem;

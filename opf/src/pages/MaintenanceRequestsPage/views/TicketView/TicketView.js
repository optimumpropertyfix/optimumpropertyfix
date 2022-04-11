import { useEffect, useState } from "react";
import Card, { ToggleableCard } from "../../../../components/Card/Card";
import FormGroup from "../../../../components/FormGroup/FormGroup";
import ItemGroup from "../../../../components/ItemGroup/ItemGroup";
import Ticket from "../../../../components/Ticket/Ticket";
import Timestamps from "../../../../components/Timestamps/Timestamps";
import Widget from "../../../../components/Widget/Widget";
import styles from "./TicketView.module.css";

export function AdminTicketView() {
  return (
    <div>
      <p>AdminPage</p>
    </div>
  );
}

export function StudentTicketView() {
  const [ticket, setTicket] = useState({});

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

  useEffect(() => {
    setTicket({
      ticket_title: "Fix Water Leak",
      ticket_description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ticket_severity: "HIGH",
      ticket_location: "Restroom",
      ticket_building_name: "Canada Hall",
      ticket_unit_number: "1C",
      ticket_additional_notes: "",
      ticket_id: "800",
      ticket_created: "09/08/2022",
      ticket_status: "C",
    });
  }, []);

  return (
    <div className={styles.TicketView}>
      <div className={`${styles.view_container} view_layout`}>
        <p className={`${styles.page_title_text} page_title_text`}>
          Viewing Ticket "{ticket.ticket_title}"
        </p>
        <div className={`${styles.content_container} view_content_layout`}>
          <div className={styles.ticket_metadata}>
            <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
              Ticket Information
            </p>
            <div className={styles.metadata_group}>
              <Widget
                className={`${styles.status_metadata} ${status_color(
                  ticket.ticket_status
                )}`}
                label="Status"
              >
                {status_text(ticket.ticket_status)}
              </Widget>
              <ItemGroup
                className={`block_contrast_items ${styles.title_metadata}`}
                label="Title"
                text={ticket.ticket_title}
              />
              <ItemGroup
                className={`block_contrast_items ${styles.description_metadata}`}
                label="Description"
                text={ticket.ticket_description}
              />
              <ItemGroup
                className="block_contrast_items"
                label="Severity"
                text={ticket.ticket_severity}
              />
              <ItemGroup
                className="block_contrast_items"
                label="Time Created"
                text={ticket.ticket_created}
              />
              <ItemGroup
                className="block_contrast_items"
                label="Ticket ID"
                text={ticket.ticket_id}
              />
              <ItemGroup
                className="block_contrast_items"
                label="Location"
                text={ticket.ticket_location}
              />
              <ItemGroup
                className="block_contrast_items"
                label="Building Name"
                text={ticket.ticket_building_name}
              />
              <ItemGroup
                className="block_contrast_items"
                label="Unit Number"
                text={ticket.ticket_unit_number}
              />
              {ticket.ticket_additional_notes !== "" ? (
                <ItemGroup
                  className={`block_contrast_items ${styles.additional_notes_metadata}`}
                  label="Additional Notes"
                  text={ticket.ticket_additional_notes}
                />
              ) : null}
            </div>
          </div>
          <div className={styles.feedback}>
            <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
              Give Us Your Feedback
            </p>
            {ticket.ticket_status === "C" ? (
              <div className={styles.feedback_container}>
                <ToggleableCard label="Instructions for Creating Feedback">
                  <p>Instructions</p>
                </ToggleableCard>
                {true ? (
                  <div className={`${styles.feedback_response}`}>
                    <p>Feedback Response</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <Timestamps
                      created_at="September 09, 2022 at 2:32 p.m."
                      updated_at="September 12, 2022 at 6:32 p.m."
                    />
                  </div>
                ) : null}
                <FormGroup label="Rating" className={styles.feedback_rating}>
                  <div className={styles.feedback_rating_container}>
                    <label>
                      <input type="radio" value="1" name="rating" /> 1
                    </label>
                    <label>
                      <input type="radio" value="2" name="rating" /> 2
                    </label>
                    <label>
                      <input type="radio" value="3" name="rating" /> 3
                    </label>
                    <label>
                      <input type="radio" value="4" name="rating" /> 4
                    </label>
                    <label>
                      <input type="radio" value="5" name="rating" /> 5
                    </label>
                  </div>
                </FormGroup>
                <div className={styles.written_student_feedback}>
                  <FormGroup label="Feedback">
                    <textarea
                      rows="10"
                      placeholder="The service was excellent! Only thing I would improve is that the handyman was 15 minutes late."
                    />
                  </FormGroup>
                  <Timestamps
                    created_at="September 09, 2022 at 2:32 p.m."
                    updated_at="September 12, 2022 at 6:32 p.m."
                    className={styles.written_student_feedback_timestamps}
                  />
                </div>
                <button>Submit Feedback</button>
              </div>
            ) : (
              <Card icon="error" label="Can't Submit Feedback Right Now">
                <p className={styles.feedback_card_text}>
                  Please check back later when the ticket has been resolved and
                  marked "COMPLETED" by facility services.
                </p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

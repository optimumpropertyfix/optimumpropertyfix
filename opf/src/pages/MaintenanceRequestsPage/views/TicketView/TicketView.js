import { useEffect, useState } from "react";
import Card, { ToggleableCard } from "../../../../components/Card/Card";
import FormGroup from "../../../../components/FormGroup/FormGroup";
import ItemGroup from "../../../../components/ItemGroup/ItemGroup";
import Timestamps from "../../../../components/Timestamps/Timestamps";
import Widget from "../../../../components/Widget/Widget";
import styles from "./TicketView.module.css";
import TokenManager from "../../../../TokenManager";
import { user_view_individual_feedback_route, view_ticket_route } from "../../../../Routes";
import { useParams } from "react-router-dom";

export function AdminTicketView() {
  return (
    <div>
      <p>AdminPage</p>
    </div>
  );
}

export function StudentTicketView() {
  const [ticket, set_ticket] = useState({});
  const { get_token } = TokenManager();
  let { ticket_id } = useParams();
  const [feedback_disabled, set_feedback_disabled] = useState(true)
  const [feedback, set_feedback] = useState({})

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

  const feedback_background = (styles) => {
    if (feedback_disabled) {
      return styles.feedback_disabled
    }
  } 

  const api_get_individual_feedback = () => {
    
    const options = {
      method: "GET",
      headers: {
        'Authorization' : `Bearer ${get_token()}`,
      },
    };
    const route = user_view_individual_feedback_route(ticket_id);

    fetch(route, options)
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.statusText} - ${response.status}`);
        }
        return response.json();
      })
      .then((feedback) => {
        set_feedback(feedback)
        console.log(feedback)
      })
      .catch((error) => {
        console.log(error);
      });

  }

  useEffect(() => {
      api_get_individual_tickets();
  }, []);

  const api_get_individual_tickets = () => {
    const options = {
      method: "GET",
      headers: {
        'Authorization' : `Bearer ${get_token()}`,
      },
    };
    const route = view_ticket_route(ticket_id);

    fetch(route, options)
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.statusText} - ${response.status}`);
        }
        return response.json();
      })
      .then((ticket) => {
        console.log(ticket)
        set_ticket(ticket)

        if (ticket.ticket_status === "Completed") {
          api_get_individual_feedback()
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const datetime_text_converter = (datetime) => {
    //ticket_created: "03 13 2022 00 45 00"
    let datetime_string = String(datetime).split(" ")
    let year = Number(datetime_string[2])
    let date = Number(datetime_string[1])
    let month = Number(datetime_string[0])
    return `${month}/${date}/${year}`
  }

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
                text={severity_text(ticket.ticket_severity)}
              />
              <ItemGroup
                className="block_contrast_items"
                label="Time Created"
                text={datetime_text_converter(ticket.ticket_created)}
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
              {ticket.ticket_additional_notes !== null ? (
                <ItemGroup
                  className={`block_contrast_items ${styles.additional_notes_metadata}`}
                  label="Additional Notes"
                  text={ticket.ticket_additional_notes}
                />
              ) : null}
            </div>
          </div>
          <div className={`${styles.feedback}`}>
            <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
              Give Us Your Feedback
            </p>
            {ticket.ticket_status === "Completed" ? (
              <div className={styles.feedback_container}>
                <ToggleableCard label="Instructions for Creating Feedback">
                  <div className={styles.feedback_instructions}>
                    <p>Select the rating for your completed ticket:</p>
                    <div className={styles.feedback_instructions_ratings}>
                      <p>1 = Extremely poor</p>
                      <p>2 = Bad</p>
                      <p>3 = Average</p>
                      <p>4 = Good</p>
                      <p>5 = Excellent</p>
                    </div>
                    <p>
                      Under <span className="italic">‘Feedback’</span>, provide
                      a descriptive message for the facilities and services
                      personnel.
                    </p>
                  </div>
                </ToggleableCard>
                {feedback.feedback_admin_message !== null ? (
                  <div className={`${styles.feedback_response}`}>
                    <p>Feedback Response</p>
                    <p>
                      {feedback.feedback_admin_message}
                    </p>
                    <Timestamps
                      created_at={feedback.feedback_admin_date}
                    />
                  </div>
                ) : null}
                <FormGroup label="Rating" className={`${styles.feedback_rating} ${feedback_background(styles)}`}>
                  <div className={styles.feedback_rating_container}>
                    <label>
                      <input disabled={feedback_disabled} type="radio" value="1" name="rating" checked={feedback.feedback_satisfaction === 1} /> 1
                    </label>
                    <label>
                      <input disabled={feedback_disabled} type="radio" value="2" name="rating" checked={feedback.feedback_satisfaction === 2}/> 2
                    </label>
                    <label>
                      <input disabled={feedback_disabled} type="radio" value="3" name="rating" checked={feedback.feedback_satisfaction === 3}/> 3
                    </label>
                    <label>
                      <input disabled={feedback_disabled} type="radio" value="4" name="rating" checked={feedback.feedback_satisfaction === 4}/> 4
                    </label>
                    <label>
                      <input disabled={feedback_disabled} type="radio" value="5" name="rating" checked={feedback.feedback_satisfaction === 5}/> 5
                    </label>
                  </div>
                </FormGroup>
                <div className={`${styles.written_student_feedback} ${feedback_background(styles)}`}>
                  <FormGroup label="Feedback">
                    <textarea
                      disabled={feedback_disabled}
                      rows="10"
                      placeholder="The service was excellent! Only thing I would improve is that the handyman was 15 minutes late."
                      value={feedback.feedback_message}
                    />
                  </FormGroup>
                  { feedback.feedback_message ? 
                  <Timestamps
                    created_at={feedback.feedback_date}
                    className={styles.written_student_feedback_timestamps}
                    /> : null }
                </div>
                { feedback_disabled ? null :
                <button>Submit Feedback</button> }
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

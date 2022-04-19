import { useEffect, useState } from "react";
import {
  new_ticket_route,
  view_all_tickets_route,
  view_ticket_route,
  admin_all_tickets_route,
  get_all_tickets_by_status_route,
} from "../../../../Routes";
import styles from "./AllTicketsView.module.css";
import TicketItem from "../../../../components/TicketItem/TicketItem";
import FormGroup from "../../../../components/FormGroup/FormGroup";
import TokenManager from "../../../../TokenManager";

export function StudentAllTicketsView() {
  const [tickets, setTickets] = useState([]);
  const [status_filter, set_status_filter] = useState("select")
  const { get_token } = TokenManager();

  useEffect(() => {
    // Note from Araam: data is the example of a response from the server.
    // This is ran once when the page is first rendered.
    api_get_all_tickets();
  }, []);

  const api_get_all_tickets_by_severity = (status) => {

    const options = {
      method: "GET",
      headers: {
        'Authorization' : `Bearer ${get_token()}`,
      },
    };
    const route = get_all_tickets_by_status_route(status);

    fetch(route, options).then((response) => {
      if (!response.ok) {
        throw Error(`${response.statusText} - ${response.status}`);
      }
      return response.json();
    }).then((tickets) => {
      setTickets(tickets)
    })
    .catch((error) => {
      console.log(error);
    })

  } 

  const api_get_all_tickets = () => {
    const options = {
      method: "GET",
      headers: {
        'Authorization' : `Bearer ${get_token()}`,
      },
    };
    const route = view_all_tickets_route();

    fetch(route, options)
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.statusText} - ${response.status}`);
        }
        return response.json();
      })
      .then((tickets) => {
        setTickets(tickets)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const status_filter_change = (event) => {
    set_status_filter(event.target.value);
    api_get_all_tickets_by_severity(event.target.value)
  }

  const clear_filter_click = () => {
    set_status_filter("select")
    api_get_all_tickets()
  }

  return (
    <div className={styles.StudentAllTicketsView}>
      <div className={`${styles.view_container} view_layout`}>
        <p className={`${styles.page_title_text} page_title_text`}>
          View All Your Tickets
        </p>
        <div className={`${styles.content_container} view_content_layout`}>
          <div className={styles.filter_options}>
            <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
              Filter Tickets
            </p>
            <div className={styles.filter_group}>
              <FormGroup label="Status">
                <select onChange={status_filter_change} value={status_filter} className={styles.location_form}>
                  <option value="select" disabled>
                    Select Status
                  </option>
                  <option value="pending">Pending</option>
                  <option value="received">Received</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </FormGroup>
            </div>
            <button onClick={clear_filter_click} className={styles.clear_filter_button}>
              Clear Filter
            </button>
          </div>
          <div className={styles.tickets_list}>
            {tickets.map((ticket) => {
              return <TicketItem key={ticket.id} {...ticket} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

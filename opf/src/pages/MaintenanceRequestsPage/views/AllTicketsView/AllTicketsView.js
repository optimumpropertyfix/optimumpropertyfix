import { useEffect, useState } from "react";
import {
  student_all_tickets_route,
  admin_all_tickets_route,
} from "../../../../Routes";
import styles from "./AllTicketsView.module.css";
import TicketItem from "../../../../components/TicketItem/TicketItem";
import FormGroup from "../../../../components/FormGroup/FormGroup";

export function AdminAllTicketsView() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const route = admin_all_tickets_route("azaremehrjardi");
  }, []);

  return (
    <div>
      <p>Testing TicketsView</p>
    </div>
  );
}

export function StudentAllTicketsView() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const route = student_all_tickets_route("azaremehrjardi");
  }, []);

  const user_tickets = [
    {
      id: 800,
      title: "Sink dripping water even though sink is turned off",
      status: "D",
      location: "Kitchen",
      severity: "HIGH",
      date: "08/01/2021",
    },
    {
      id: 400,
      title: "Fix Water Leak",
      status: "P",
      location: "Kitchen",
      severity: "HIGH",
      date: "08/01/2021",
    },
    {
      id: 400,
      title: "Fix Water Leak",
      status: "P",
      location: "Kitchen",
      severity: "HIGH",
      date: "08/01/2021",
    },
    {
      id: 400,
      title: "Fix Water Leak",
      status: "P",
      location: "Kitchen",
      severity: "HIGH",
      date: "08/01/2021",
    },
    {
      id: 400,
      title: "Fix Water Leak",
      status: "P",
      location: "Kitchen",
      severity: "HIGH",
      date: "08/01/2021",
    },
  ];

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
              <FormGroup label="Severity">
                <select value={"livingroom"} className={styles.location_form}>
                  <option value="Select Location" disabled>
                    Select Location
                  </option>
                  <option value="livingroom">Living Room</option>
                  <option value="bathroom">Bathroom</option>
                  <option value="kitchen">Kitchen</option>
                  <option value="bedroom">Bedroom</option>
                </select>
              </FormGroup>
              <FormGroup label="Status">
                <select value={"livingroom"} className={styles.location_form}>
                  <option value="Select Location" disabled>
                    Select Location
                  </option>
                  <option value="livingroom">Living Room</option>
                  <option value="bathroom">Bathroom</option>
                  <option value="kitchen">Kitchen</option>
                  <option value="bedroom">Bedroom</option>
                </select>
              </FormGroup>
            </div>
          </div>
          <div className={styles.tickets_list}>
            {user_tickets.map((ticket) => {
              return <TicketItem key={ticket.id} {...ticket} />;
            })}
          </div>
          <div className={styles.list_navigation}>
            <button>
              <span className="material-icons">arrow_back</span>
            </button>
            <button>
              <span className="material-icons">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

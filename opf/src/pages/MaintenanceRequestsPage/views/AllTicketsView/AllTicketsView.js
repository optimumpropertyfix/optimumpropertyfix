import { useEffect, useState } from "react";
import { get_allTickets } from "../TicketLogic";
import {
  student_all_tickets_route,
  admin_all_tickets_route,
} from "../../../../Routes";
import styles from "./AllTicketsView.module.css";

export function AdminAllTicketsView() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const route = admin_all_tickets_route("azaremehrjardi");

    get_allTickets(route)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.text);
        }

        return response.json;
      })
      .then((data) => {
        setTickets(data);
      })
      .catch((error) => {
        console.log(error);
      });
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

    get_allTickets(route)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.text);
        }

        return response.json;
      })
      .then((data) => {
        setTickets(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.AllTicketsView}>
      <div className={styles.AllTicketsViewContainer}>
        <div className={styles.page_header}>
          <p className="text_page_title">See All Your Tickets</p>
        </div>
      </div>
    </div>
  );
}

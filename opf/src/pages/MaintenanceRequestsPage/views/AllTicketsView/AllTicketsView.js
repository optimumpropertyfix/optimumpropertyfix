import { useEffect, useState } from "react";
import { get_allTickets } from "../TicketLogic";
import {
  student_all_tickets_route,
  admin_all_tickets_route,
} from "../../../../Routes";
import styles from "./AllTicketsView.module.css";
import TicketItem from "../../../../components/TicketItem/TicketItem";

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

  const user_tickets = [
    {
      id: 800,
      title: "Fix Sink",
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
  ];

  return (
    <div className={styles.StudentAllTicketsView}>
      <div className={styles.ultra_container}>
        <p className={`${styles.page_title_text} page_title_text`}>
          View All Your Tickets
        </p>
        <div className={styles.container}>
          {user_tickets.map((ticket) => {
            return <TicketItem {...ticket} />;
          })}
        </div>
      </div>
    </div>
  );
}

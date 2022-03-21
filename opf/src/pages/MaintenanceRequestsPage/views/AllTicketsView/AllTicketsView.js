import { useEffect, useState } from "react";
import { get_allTickets } from "../TicketLogic";
import {
  student_all_tickets_route,
  admin_all_tickets_route,
} from "../../../../Routes";

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
    <div className={` section_helper_Section`}>
      <div className="section_helper_Container">
        <div className="text_page_title">
          <p>All Your Tickets </p>
        </div>
      </div>
    </div>
  );
}

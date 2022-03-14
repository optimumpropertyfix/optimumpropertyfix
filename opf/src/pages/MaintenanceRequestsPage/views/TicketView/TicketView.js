import { useEffect, useState } from "react";
import { get_single_ticket, handle_deleteTicket } from "../TicketLogic";
import {
  student_get_single_ticket_route,
  student_delete_ticket_route,
} from "../../../../Routes";

export function AdminTicketView() {
  return (
    <div>
      <p>AdminPage</p>
    </div>
  );
}

export function StudentTicketView() {
  useEffect(() => {
    const ticket_id = 1;
    const route = student_get_single_ticket_route("azaremehrjardi", ticket_id);

    get_single_ticket(route)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.text);
        }

        return response.json;
      })
      .then((data) => {
        //setTitle(data.title)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (event) => {
    const ticket_id = 1;
    const route = student_delete_ticket_route("azaremehrjardi", ticket_id);

    handle_deleteTicket(route)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.text);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <p>StudentPage</p>
    </div>
  );
}

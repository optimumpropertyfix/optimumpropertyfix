import { useEffect, useState } from "react";
import kanban_board_styles from "./KanbanBoard.module.css";
import kanban_stack_styles from "./KanbanStack.module.css";
import ticket_sticker_styles from "./TicketSticker.module.css";
import ItemGroup from "../ItemGroup/ItemGroup";
import FormGroup from "../FormGroup/FormGroup";
import { useNavigate } from "react-router-dom";

import TokenManager from "../../TokenManager";
import { kanban_receive_all_tickets_route, change_ticket_kanban_status } from "../../Routes";

export function KanbanBoard() {

  const {get_token} = TokenManager()

  const [received_tickets, set_received_tickets] = useState([]);
  const [pending_tickets, set_pending_tickets] = useState([]);
  const [completed_tickets, set_completed_tickets] = useState([]);
  const [cancelled_tickets, set_cancelled_tickets] = useState([]);

  const populate_ticket_stacks = (tickets) => {
    let received_tickets_buffer = [];
    let pending_tickets_buffer = [];
    let completed_tickets_buffer = [];
    let cancelled_tickets_buffer = [];

    for (let ticket_index = 0; ticket_index < tickets.length; ticket_index++) {
      const ticket = tickets[ticket_index];
      const status = String(ticket.ticket_status);

      if (status === "Received") {
        received_tickets_buffer.push(ticket);
      } else if (status === "Pending") {
        pending_tickets_buffer.push(ticket);
      } else if (status === "Completed") {
        completed_tickets_buffer.push(ticket);
      } else {
        cancelled_tickets_buffer.push(ticket);
      }
    }

    set_received_tickets(received_tickets_buffer);
    set_pending_tickets(pending_tickets_buffer);
    set_completed_tickets(completed_tickets_buffer);
    set_cancelled_tickets(cancelled_tickets_buffer);
  };

  const api_get_tickets = () => {

    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${get_token()}`,
      },
    };
    const route = kanban_receive_all_tickets_route();

    fetch(route, options)
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.statusText} - ${response.status}`);
        }
        return response.json();
      })
      .then((tickets) => {
        populate_ticket_stacks(tickets)
      })
      .catch((error) => {
        console.log(error);
      });

  }

  const refresh_kanban_board = () => {
    console.log("kanban refreshed")
    api_get_tickets()
  }

  useEffect(() => {

    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${get_token()}`,
      },
    };
    const route = kanban_receive_all_tickets_route();

    fetch(route, options)
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.statusText} - ${response.status}`);
        }
        return response.json();
      })
      .then((tickets) => {
        populate_ticket_stacks(tickets)
      })
      .catch((error) => {
        console.log(error);
      });

    document.addEventListener('refresh-kanban', refresh_kanban_board)

    return () => {
      document.removeEventListener('refresh-kanban', refresh_kanban_board);
    }
  }, []);

  return (
    <div className={kanban_board_styles.KanbanBoard}>
      <KanbanStack stack={received_tickets} flag="Received" className={kanban_board_styles.received_tickets}/>
      <KanbanStack stack={pending_tickets} flag="Pending" className={kanban_board_styles.pending_tickets}/>
      <KanbanStack stack={completed_tickets} flag="Completed" className={kanban_board_styles.completed_tickets} />
    </div>
  );
}

function KanbanStack(props) {

  return (
    <div className={`${kanban_stack_styles.KanbanStack} ${props.className}`}>
      <p>
        {props.flag} Tickets
      </p>  
      <div>
        {props.stack.map((ticket) => {
          return <TicketSticker flag={props.flag} key={ticket.ticket_id} {...ticket} />;
        })}
      </div>
    </div>
  );
}

function TicketSticker(props) {

  const {get_token} = TokenManager()
  const navigate = useNavigate()

  const [received_disable, set_received_disable] = useState(true)
  const [pending_disable, set_pending_disable] = useState(true)
  const [completed_disable, set_completed_disable] = useState(true)

  const refresh_kanban_board = () => {
    const refresh_event = new Event('refresh-kanban')
    document.dispatchEvent(refresh_event)
  }

  const view_ticket_click = () => {
    navigate(`/admin/maintenance_requests/${props.ticket_id}`)
  }

  const received_button_click = () => {
    // get ticket id
    // hit server with id
    // change status
    // refresh_kanban_board
    api_update_status("Received")
    refresh_kanban_board()
  }

  const pending_button_click = () => {
    api_update_status("Pending")
    refresh_kanban_board()
  }

  const completed_button_click = () => {
    api_update_status("Completed")
    refresh_kanban_board()
  }

  const api_update_status = (status) => {

    const options = {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${get_token()}`,
      },
    };
    const route = change_ticket_kanban_status(props.ticket_id, status);

    fetch(route, options);

  }



  const form_enables = () => {
    
    const status = String(props.ticket_status);

    if (status === "Received") {
      set_received_disable(true);
      set_pending_disable(false)
    } else if (status === "Pending") {
      set_pending_disable(true)
      set_completed_disable(false)
    } else {
      set_completed_disable(false)
    }

  }

  const received_active_background = (styles) => {

    const status = String(props.ticket_status)

    if (status === "Received") {
      
      return styles.sticker_option_active

    }

  }

  const pending_active_background = (styles) => {

    const status = String(props.ticket_status)

    if (status === "Pending") {
      
      return styles.sticker_option_active

    }

  }

  const completed_active_background = (styles) => {

    const status = String(props.ticket_status)

    if (status === "Completed") {
      
      return styles.sticker_option_active

    }

  }

  useEffect(() => {
    form_enables()
  }, [])

  return (
    <div className={ticket_sticker_styles.TicketSticker}>
      <div className={ticket_sticker_styles.content}>
        <div className={ticket_sticker_styles.ticket_details}>
        <ItemGroup label={"Ticket ID"}>
            <p>{props.ticket_id}</p>
          </ItemGroup>
          <ItemGroup label={"Ticket Title"}>
            <p>{props.ticket_title}</p>
          </ItemGroup>
          <ItemGroup label={"Ticket Description"}>
            <p>{props.ticket_description}</p>
          </ItemGroup>
        </div>
        <div className={ticket_sticker_styles.ticket_options}>
          <button className={ticket_sticker_styles.ticket_option} onClick={view_ticket_click}>
            View Ticket
          </button>
        </div>
      </div>
      <div className={ticket_sticker_styles.sticker_options}>
        <button
          onClick={received_button_click}
          className={`${ticket_sticker_styles.sticker_option} ${received_active_background(ticket_sticker_styles)}`}
          disabled={received_disable}
        >
          RECEIVED
        </button>
        <button onClick={pending_button_click} className={`${ticket_sticker_styles.sticker_option} ${pending_active_background(ticket_sticker_styles)}`} disabled={pending_disable}>
          PENDING
        </button>
        <button onClick={completed_button_click} className={`${ticket_sticker_styles.sticker_option} ${completed_active_background(ticket_sticker_styles)}`} disabled={completed_disable}>
          COMPLETED
        </button>
      </div>
    </div>
  );
}

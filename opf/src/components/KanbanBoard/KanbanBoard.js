import { useEffect, useState } from "react";
import kanban_board_styles from "./KanbanBoard.module.css";
import kanban_stack_styles from "./KanbanStack.module.css";
import ticket_sticker_styles from "./TicketSticker.module.css";
import ItemGroup from "../ItemGroup/ItemGroup";
import FormGroup from "../FormGroup/FormGroup";

export function KanbanBoard() {

  const [received_tickets, set_received_tickets] = useState([]);
  const [pending_tickets, set_pending_tickets] = useState([]);
  const [completed_tickets, set_completed_tickets] = useState([]);
  const [cancelled_tickets, set_cancelled_tickets] = useState([]);

  const tickets_test = [
    {
      ticket_title: "Water Leak",
      ticket_description: "Water leak in the kitchen, underneath the sink.",
      ticket_severity: "Mild",
      ticket_location: "Kitchen",
      ticket_building_name: "Peavine Hall",
      ticket_unit_number: "1C",
      ticket_status: "Pending",
      ticket_created: "03 13 2022 00 45 00",
      ticket_id: 1,
    },
    {
      ticket_title: "Water Leak",
      ticket_description: "Water leak in the kitchen, underneath the sink.",
      ticket_severity: "Mild",
      ticket_location: "Kitchen",
      ticket_building_name: "Peavine Hall",
      ticket_unit_number: "1C",
      ticket_status: "Pending",
      ticket_created: "03 13 2022 00 45 00",
      ticket_id: 3,
    },
    {
      ticket_title: "Water Leak",
      ticket_description: "Water leak in the kitchen, underneath the sink.",
      ticket_severity: "Mild",
      ticket_location: "Kitchen",
      ticket_building_name: "Peavine Hall",
      ticket_unit_number: "1C",
      ticket_status: "Pending",
      ticket_created: "03 13 2022 00 45 00",
      ticket_id: 5,
    },
    {
      ticket_title: "Toilet does not flush",
      ticket_description: "Toilet does not flush and overflows..",
      ticket_severity: "High",
      ticket_location: "Kitchen",
      ticket_building_name: "Peavine Hall",
      ticket_unit_number: "1C",
      ticket_status: "Received",
      ticket_created: "03 13 2022 00 45 00",
      ticket_id: 2,
    },
  ];

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

  }

  const refresh_kanban_board = () => {
    console.log("kanban refreshed")
    // get tickets
    // pass tickets data into populate_ticket_stacks
  }

  useEffect(() => {

    document.addEventListener('refresh-kanban', refresh_kanban_board)
    // api_get_tickets - except it will be straight code
    populate_ticket_stacks(tickets_test);

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

  const [received_disable, set_received_disable] = useState(true)
  const [pending_disable, set_pending_disable] = useState(true)
  const [completed_disable, set_completed_disable] = useState(true)

  const refresh_kanban_board = () => {
    const refresh_event = new Event('refresh-kanban')
    document.dispatchEvent(refresh_event)
  }

  const received_button_click = () => {
    refresh_kanban_board()
    // get ticket id
    // hit server with id
    // change status
    // refresh_kanban_board
  }

  const pending_button_click = () => {
    refresh_kanban_board()
  }

  const completed_button_click = () => {
    refresh_kanban_board()
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
          <ItemGroup label={"Title"}>
            <p>{props.ticket_title}</p>
          </ItemGroup>
          <ItemGroup label={"Description"}>
            <p>{props.ticket_description}</p>
          </ItemGroup>
        </div>
        <div className={ticket_sticker_styles.ticket_options}>
          <button className={ticket_sticker_styles.ticket_option}>
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

import { useEffect, useState } from "react";
import kanban_board_styles from "./KanbanBoard.module.css";
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

  const order_tickets = (tickets) => {
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

  useEffect(() => {
    order_tickets(tickets_test);
  }, []);

  return (
    <div className={kanban_board_styles.KanbanBoard}>
      <div className={kanban_board_styles.kanban_stack}>
        <p>Received Tickets</p>
        <div className={kanban_board_styles.kanban_content}>
          {received_tickets.map((ticket) => {
            return <TicketSticker key={ticket.ticket_id} {...ticket} />;
          })}
        </div>
      </div>
      <div className={kanban_board_styles.kanban_stack}>
        <p>Pending Tickets</p>
        <div className={kanban_board_styles.kanban_content}>
          {pending_tickets.map((ticket) => {
            return <TicketSticker key={ticket.ticket_id} {...ticket} />;
          })}
        </div>
      </div>
      <div className={kanban_board_styles.kanban_stack}>
        <p>Completed Tickets</p>
        <div className={kanban_board_styles.kanban_content}>
          {completed_tickets.map((ticket) => {
            return <TicketSticker key={ticket.ticket_id} {...ticket} />;
          })}
        </div>
      </div>
    </div>
  );
}

function TicketSticker(props) {
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
        <div className={ticket_sticker_styles.ticket_options}></div>
      </div>
      <div className={ticket_sticker_styles.sticker_options}>
        <button
          className={ticket_sticker_styles.sticker_option}
          disabled={true}
        >
          RECEIVED
        </button>
        <button className={ticket_sticker_styles.sticker_option}>
          PENDING
        </button>
        <button className={ticket_sticker_styles.sticker_option}>
          COMPLETED
        </button>
      </div>
    </div>
  );
}

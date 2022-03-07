import React, { useState } from "react";

export default function AppointmentForm(props) {
  const [ticketId, setTicketId] = useState("");
  const [building, setBuilding] = useState("");
  const [room, setRoom] = useState("");
  const [date, setDate] = useState("");

  const ticketIdHandler = (event) => {
    //takes an object and pulls out key value pairs and adds them
    setTicketId(event.target.value);
  };

  const buildingHandler = (event) => {
    setBuilding(event.target.value);
  };

  const roomHandler = (event) => {
    setRoom(event.target.value);
  };

  const dateHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const appointmentData = {
      ticketId: ticketId,
      building: building,
      room: room,
      date: new Date(date),
    };

    props.onSaveAppointmentData(appointmentData);
    //two way binding
    setTicketId("");
    setBuilding("");
    setRoom("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>Ticket ID</label>
          <select value={props.ticketId} onChange={ticketIdHandler}>
            <option value="select">select</option>
            <option value="012345">012345</option>
            <option value="345789">345789</option>
            <option value="678901">678901</option>
          </select>
        </div>
        <div>
          <label>Building</label>
          <select value={props.building} onChange={buildingHandler}>
            <option value="select">select</option>
            <option value="argenta">Argenta Hall</option>
            <option value="nye">Nye Hall</option>
            <option value="greatbasin">Great Basin Hall</option>
            <option value="juniper">Juniper Hall</option>
            <option value="llc">Living Learning Center</option>
            <option value="sierra">Sierra Hall</option>
            <option value="canada">Cananda Hall</option>
            <option value="manzanita">Manzanita Hall</option>
          </select>
        </div>
        <div>
          <label>Room</label>
          <select value={props.room} onChange={roomHandler}>
            <option value="select">select</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
          </select>
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2023-01-01"
            value={date}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

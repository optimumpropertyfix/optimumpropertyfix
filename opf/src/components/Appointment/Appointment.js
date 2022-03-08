import AppointmentItem from "./AppointmentItem";

const Appointment = (props) => {
  const addAppointmentHandler = (appointments) => {
    console.log(appointments);
  };
  return (
    <div>
      <div>
        <h1>Appointment Page</h1>
      </div>
      <AppointmentItem onAddAppointment={addAppointmentHandler} />
      {props.items.map((appointments) => (
        <AppointmentItem
          building={appointments.building}
          room={appointments.room}
          date={appointments.date}
        />
      ))}
    </div>
  );
};

export default Appointment;

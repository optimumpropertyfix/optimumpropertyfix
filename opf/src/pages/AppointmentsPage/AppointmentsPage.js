import Appointment from "../../components/Appointment/Appointment";
import AppointmentView from "../../pages/FormPage/views/AppointmentView/AppointmentView";

export const AdminAppointmentsPage = () => {
  const appointments = [
    {
      id: "1",
      building: "Argenta Hall",
      room: "101",
      date: new Date(2022, 2, 28),
    },
    {
      id: "2",
      building: "Canada Hall",
      room: "102",
      date: new Date(2022, 3, 1),
    },
    {
      id: "3",
      building: "Great Basin Hall",
      room: "103",
      date: new Date(2022, 4, 25),
    },
    {
      id: "4",
      building: "Manzanita Hall",
      room: "104",
      date: new Date(2022, 5, 10),
    },
  ];
  const addAppointmentHandler = (appointments) => {
    console.log(appointments);
  };

  return (
    <div>
      <AppointmentView onAddAppointent={addAppointmentHandler} />
      <Appointment items={appointments} />
    </div>
  );
};

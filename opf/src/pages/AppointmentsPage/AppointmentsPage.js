import AppointItem from "../../components/Appointment/AppointItem";

const appointments = [
  {
    id: "1",
    building: "Argenta Hall",
    date: new Date(2022, 2, 28),
  },
  {
    id: "2",
    building: "Canada Hall",
    date: new Date(2022, 3, 1),
  },
  {
    id: "3",
    building: "Great Basin Hall",
    date: new Date(2022, 4, 25),
  },
  {
    id: "4",
    building: "Manzanita Hall",
    date: new Date(2022, 5, 10),
  },
];

export function AdminAppointmentsPage() {
  return (
    <div>
      <div>
        <h1>Appointment Page</h1>
      </div>
      <AppointItem
        building={appointments[0].building}
        date={appointments[0].date}
      />
      <AppointItem
        building={appointments[1].building}
        date={appointments[1].date}
      />
      <AppointItem
        building={appointments[2].building}
        date={appointments[2].date}
      />
      <AppointItem
        building={appointments[3].building}
        date={appointments[3].date}
      />
    </div>
  );
}

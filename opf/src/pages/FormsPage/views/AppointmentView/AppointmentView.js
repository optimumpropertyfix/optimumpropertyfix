import AppointmentForm from "../../../../components/Forms/Appointment/AppointmentForm";

export const AppointmentView = (props) => {
  const saveAppointmentDataHandler = (enteredAppointmentData) => {
    const appointmentData = {
      ...enteredAppointmentData,
      id: Math.random().toString(),
    };
    props.onAddAppointment(appointmentData);
  };
  return (
    <div>
      <AppointmentForm onSaveAppointmentData={saveAppointmentDataHandler} />
    </div>
  );
};

export default AppointmentView;

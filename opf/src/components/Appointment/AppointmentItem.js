import styles from "./AppointmentItem.module.css";
import ItemGroup from "../ItemGroup/ItemGroup";
import AppointmentDate from "./AppointmentDate";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//trigger to run again by using state
const AppointmentItem = (props) => {

  const [time_frame, set_time_frame] = useState("")
  const navigate = useNavigate()

  useEffect(() => {

    set_time_frame(`${time_text(props.appointment_start_time)} to ${time_text(props.appointment_end_time)}`)

  },[])

  const time_text = (datetime) => {
    let datetime_string = String(datetime).split(" ")
    let year_value = Number(datetime_string[2])
    let date_value = Number(datetime_string[1])
    let month_value = Number(datetime_string[0])-1    
    let hour_value = Number(datetime_string[3])
    let minute_value = Number(datetime_string[4])
    let second_value = Number(datetime_string[5])
    let formatted_value = new Date(year_value, month_value, date_value, hour_value, minute_value, second_value);

    return formatted_value.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  }
  
  const view_appointment_click = () => {
    navigate(`/student/appointments/${props.appointment_id}`)
  }

  return (
    <div className={`${styles.AppointmentItem} block_contrast_items`}>
      <div className={styles.appointment_content}>
        <AppointmentDate
          date={props.appointment_start_time}
        />
        <div className={styles.appointment_details}>
          <ItemGroup label="Time Frame" text={time_frame} />
          <ItemGroup label="Building" text={props.appointment_building_name} />
          <ItemGroup label="Unit" text={props.appointment_unit_number} />
          <ItemGroup label="Location" text={props.appointment_location} />
        </div>
      </div>
      <div className={styles.appointment_options}>
        <button onClick={view_appointment_click}>VIEW APPOINTMENT</button>
      </div>
    </div>
  );
};
export default AppointmentItem;

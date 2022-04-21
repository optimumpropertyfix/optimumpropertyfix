/* References Used:
[1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
*/
import { useEffect, useState } from "react";
import styles from "./AppointmentDate.module.css";

const AppointmentDate = (props) => {
  //const month = props.date.toLocaleString("en-US", { month: "long" });
  //const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  //const year = props.date.getFullYear();

  const [month, set_month] = useState("")
  const [day_date, set_day_date] = useState("")
  const [day, set_day] = useState("")

  useEffect(() => {
    if (props.date !== undefined) {
    date_text(props.date)
    }
    console.log(props.date)
  }, [])

  const date_text = (datetime) => {
    let datetime_string = String(datetime).split(" ")
    let year_value = Number(datetime_string[2])
    let date_value = Number(datetime_string[1])
    let month_value = Number(datetime_string[0])-1    
    let hour_value = Number(datetime_string[3])
    let minute_value = Number(datetime_string[4])
    let second_value = Number(datetime_string[5])
    let formatted_value = new Date(year_value, month_value, date_value, hour_value, minute_value, second_value);
    var options = { weekday: 'long', month: 'long'};
    let date = new Intl.DateTimeFormat('en-US', options).format(formatted_value).split(" ")
    set_day(date[1])
    set_day_date(date_value)
    set_month(date[0])
  }

  return (
    <div className={styles.AppointmentDate}>
      <div className={styles.month}>
        <p>{month}</p>
      </div>
      <div className={styles.day_date}>
        <p>{day_date}</p>
      </div>
      <div className={styles.day}>
        <p>{day}</p>
      </div>
    </div>
  );
};
export default AppointmentDate;

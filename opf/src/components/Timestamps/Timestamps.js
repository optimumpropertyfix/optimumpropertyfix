import styles from "./Timestamps.module.css";

function Timestamps(props) {

  const datetime_text = (datetime) => {
    //ticket_created: "03 13 2022 00 45 00"
    let datetime_string = String(datetime).split(" ")
    let year = Number(datetime_string[2])
    let date = Number(datetime_string[1])
    let month = Number(datetime_string[0])-1
    let hour = Number(datetime_string[3])
    let minute = Number(datetime_string[4])
    let second = Number(datetime_string[5])
    
    let formatted_time = new Date(year, month, date, hour, minute, second);
    console.log(formatted_time.toDateString())
    return formatted_time.toString()
  }

  return (
    <div className={`${styles.Timestamps} ${props.className}`}>
      { props.created_at ?       
      <p>
        <span>Created </span> {datetime_text(props.created_at)}
      </p> : null}
      { props.updated_at ?       
      <p>
        <span>Updated </span> {datetime_text(props.updated_at)}
      </p> : null}
    </div>
  );
}

export default Timestamps;

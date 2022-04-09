import styles from "./Timestamps.module.css";

function Timestamps(props) {
  return (
    <div className={`${styles.Timestamps} ${props.className}`}>
      <p>
        <span>Created </span> {props.created_at}
      </p>
      <p>
        <span>Updated </span> {props.updated_at}
      </p>
    </div>
  );
}

export default Timestamps;

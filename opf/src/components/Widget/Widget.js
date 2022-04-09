import styles from "./Widget.module.css";

function Widget(props) {
  return (
    <div className={`${styles.Widget} ${props.className}`}>
      {props.label ? <p>{props.label}</p> : null}
      <p className={styles.text}>{props.children}</p>
    </div>
  );
}

export default Widget;

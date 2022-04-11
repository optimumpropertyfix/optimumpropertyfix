import styles from "./Toast.module.css";

function Toast(props) {
  return (
    <div className={`${styles.Toast} ${props.className}`}>
      <span className="material-icons">{props.icon}</span>
      <p>{props.children}</p>
    </div>
  );
}

export default Toast;

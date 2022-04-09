import styles from "./FormGroup.module.css";

function FormGroup(props) {
  return (
    <div className={`${styles.FormGroup} ${props.className}`}>
      <label>{props.label}</label>
      {props.children}
    </div>
  );
}

export default FormGroup;

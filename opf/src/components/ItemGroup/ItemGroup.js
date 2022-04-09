import styles from "./ItemGroup.module.css";

function ItemGroup(props) {
  return (
    <div className={`${styles.ItemGroup} ${props.className}`}>
      <p className={styles.label}>{props.label}</p>
      {props.text ? (
        <p className={styles.text}>{props.text}</p>
      ) : (
        <div className={styles.children}>{props.children}</div>
      )}
    </div>
  );
}

export default ItemGroup;

import styles from "./InformationCard.module.css";

export function InformationCard(props) {
  const toggled = false;

  return (
    <div className={`${styles.InformationCard} ${props.className}`}>
      <div>
        <div>
          <span className="material-icons">info</span>
          <p>{props.label}</p>
        </div>
        <button>+</button>
      </div>
      <div>{props.children}</div>
    </div>
  );
}

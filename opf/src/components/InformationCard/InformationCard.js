import { useState } from "react";
import styles from "./InformationCard.module.css";

export function InformationCard(props) {
  const [toggled, setToggle] = useState(false);

  const toggle_card_body = () => {
    if (toggled) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <div className={`${styles.InformationCard} ${props.className}`}>
      <div className={styles.card_header}>
        <div>
          <span className="material-icons">info</span>
          <p>{props.label}</p>
        </div>
        <button onClick={toggle_card_body}>
          {toggled ? (
            <span className="material-icons">arrow_drop_up</span>
          ) : (
            <span className="material-icons">arrow_drop_down</span>
          )}
        </button>
      </div>
      <div
        className={`${styles.card_body} ${
          toggled ? styles.card_opened : styles.card_closed
        }`}
      >
        {props.children}
      </div>
    </div>
  );
}

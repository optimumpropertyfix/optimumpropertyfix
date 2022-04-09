import { useState } from "react";
import card_styles from "./Card.module.css";
import toggleable_card_styles from "./ToggleableCard.module.css";

export default function Card(props) {
  return (
    <div className={`${card_styles.Card} ${props.className}`}>
      <div className={card_styles.card_header}>
        <div>
          <span className="material-icons">
            {props.icon ? props.icon : "info"}
          </span>
          <p>{props.label}</p>
        </div>
      </div>
      {props.children ? (
        <div className={`${card_styles.card_body}`}>{props.children}</div>
      ) : (
        ""
      )}
    </div>
  );
}

export function ToggleableCard(props) {
  const [toggled, setToggle] = useState(false);

  const toggle_card_body = () => {
    if (toggled) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <div className={`${card_styles.Card} ${props.className}`}>
      <div className={toggleable_card_styles.card_header}>
        <div>
          <span className="material-icons">
            {props.icon ? props.icon : "info"}
          </span>
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
        className={`${toggleable_card_styles.card_body} ${
          toggled
            ? toggleable_card_styles.card_opened
            : toggleable_card_styles.card_closed
        }`}
      >
        {props.children}
      </div>
    </div>
  );
}

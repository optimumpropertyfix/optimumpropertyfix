import styles from "./LandingMessage.module.css";
import symbol from "../../assets/symbol.png";

function LandingMessage(props) {
  return (
    <div className={`${styles.LandingMessage} ${props.className}`}>
      <p>{props.children}</p>
      { !props.image_disable ? 
      <img src={symbol} alt="Company Symbol" />
      : null }
    </div>
  );
}

export default LandingMessage;

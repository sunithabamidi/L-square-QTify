import React from "react";
import cardImage from "../../assets/card-component.png";
import styles from "./CardComponent.module.css";

const CardComponent = () => {
  return (
    <div className={styles.cardComponent}>
      <div className={styles.card}>
        <img src={cardImage} alt="Card Component" width={159} height={170} />
        <div className={styles.follows}>100 Follows</div>
        <div className={styles.title}>New Bollywood</div>
      </div>
    </div>
  );
};

export default CardComponent;

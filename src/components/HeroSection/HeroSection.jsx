import React from "react";
import styles from "./HeroSection.module.css";
import Headphone from "../../assets/vibrating-headphone.png";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heading}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <img src={Headphone} alt="hero" width={212} />
    </div>
  );
};

export default HeroSection;

import React from "react";
import styles from "./HeroSection.module.css";
import Headphone from "../../assets/vibrating-headphone.png";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heading}>
        <p>100 Thousand Songs, ad-free</p>
        <p>Over thousands podcast episodes</p>
      </div>
      <img src={Headphone} alt="hero" width={212} />
    </div>
  );
};

export default HeroSection;

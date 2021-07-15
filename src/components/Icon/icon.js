import React from "react";
import styles from "./Icon.module.css";
import spIcon from "../../assets/spotifyWhite.png"
export const Icon = () => {
  return (
    <div className={styles.spIcon}>
      <img src={spIcon} alt="spotify icon" />
      <span>Spotpular</span>
    </div>
  );
};

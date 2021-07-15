import React from "react";
import styles from './BoxImageCard.module.css'
export const BoxImageCard = ({ image, title, description }) => {
  return (
    <div className={styles.boxImageCard}>
      <div className={styles.imageDiv} style={{backgroundImage:`url(${image})`}}></div>
      <hr style={{width:100,borderColor:'white',opacity:0.1}}></hr>
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{description}</span>
    </div>
  );
};

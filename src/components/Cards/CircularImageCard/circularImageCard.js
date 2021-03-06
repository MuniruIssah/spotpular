import React from "react";
import styles from './CircularImageCard.module.css'
export const CircularImageCard = ({ image, title, description }) => {
  return (
    <div className={styles.circularImageCard}>
      <div className={styles.imageDiv} style={{backgroundImage:`url(${image})`}}></div>
      <hr style={{width:100,borderColor:'white',opacity:0.1}}></hr>
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{description}</span>
    </div>
  );
};

import React from "react";
import styles from "./BottomImageCard.module.css";
import {  usePalette} from "react-palette";
export const BottomImageCard = ({ image, title }) => {
    const { data, loading, error}=usePalette(image)
  return (
    <div className={styles.bottomImageCard} style={{backgroundColor:data.vibrant}}>
      <div
        className={styles.imageDiv}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <span className={styles.title}>{title}</span>
    </div>
  );
};

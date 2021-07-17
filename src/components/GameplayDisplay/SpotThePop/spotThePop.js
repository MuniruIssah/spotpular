import React, { useState } from "react";
import styles from "./SpotThePop.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import gamePlayStyles from "../GamePlayDisplay.module.css";

const SpotThePop = ({ images }) => {
  return (
    <div className={styles.spotThePop}>
      {images.map((image, index) => (
        <SpotThePopCard key={index} bgImage={image} />
      ))}
    </div>
  );
};

export default SpotThePop;

const SpotThePopCard = ({ bgImage }) => {
  const [otherStyles, setOtherStyles] = useState();

  const handleMouseOver = () => {
    setOtherStyles({ border: "3px solid grey" });
  };
  const handleMouseOut = () => {
    setOtherStyles({});
  };
  return (
    <div
      className={styles.spotThePopCard}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{
        backgroundImage: `url(${bgImage})`,
        ...otherStyles,
        boxSizing: "border-box",
      }}
    >
      <FontAwesomeIcon icon={faCheck} className={styles.Icon}  />
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import styles from "./StartButton.module.css";
const StartButton = () => {
  return (
    <Link to="/play">
      <button className={styles.startButton}> Play, it's Free</button>
    </Link>
  );
};

export default StartButton;

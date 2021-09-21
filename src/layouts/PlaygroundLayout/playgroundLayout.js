import React from "react";
import SpHeader from "../../components/SPHeader/spHeader";
import styles from "./PlaygroundLayout.module.css";
const PlaygroundLayout = ({ children }) => {
  return (
    <div className={styles.playgroundLayout}>
      <SpHeader />
      {children}
    </div>
  );
};

export default PlaygroundLayout;

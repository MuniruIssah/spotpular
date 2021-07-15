import React from "react";
import styles from "./HeaderAndContentLayout.module.css";
import SpHeader from "../../components/SPHeader/spHeader";
const HeaderAndContentLayout = ({ children }) => {
  return (
    <div className={styles.headerAndContentLayout}>
      <SpHeader />
      {children}
    </div>
  );
};

export default HeaderAndContentLayout;

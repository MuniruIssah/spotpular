import React from "react";
import styles from "./SpSideBar.module.css";
import { Icon } from "../Icon/icon";
const SpSideBarButton = ({ title, icon }) => {
  return <button className={styles.spSideBarButton}>{title}</button>;
};
export const SpSideBar = () => {
  return (
    <aside className={styles.spSideBar}>
      <Icon />
      <div className={styles.buttonWrap}>
      <SpSideBarButton title="All Genres" />
      <SpSideBarButton title="All Regions" />
      </div>
    </aside>
  );
};

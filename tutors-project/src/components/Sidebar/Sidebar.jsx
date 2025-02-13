import React from "react";
import Menu from "../Menu/Menu";
import styles from "./Sidebar.module.css";
import { FaUserCircle } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarBlock}></div>
      <Menu />
      <div className={styles.user}>
        <FaUserCircle className={styles.usernameIcon} />
        <p className={styles.username}>Bill Gates</p>
      </div>
    </div>
  );
}

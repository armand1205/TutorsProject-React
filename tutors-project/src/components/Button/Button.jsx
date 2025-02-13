import React from "react";
import styles from "./Button.module.css";

export default function Button({ text, icon, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
}

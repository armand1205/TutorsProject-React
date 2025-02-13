import React from "react";
import Paper from "../../Paper/Paper";
import university from "../../assets/mask-group.png";
import { HiPencilAlt, HiTrash } from "react-icons/hi";
import styles from "./Card.module.css";

function Card() {
  return (
    <Paper>
      <div className={styles.container}>
        <img src={university} alt="University Icon" width="80" />
        <p>University</p>
        <p className={styles.univName}>MIT</p>
        <div className={styles.buttons}>
          <button>
            <HiPencilAlt />
          </button>
          <button>
            <HiTrash />
          </button>
        </div>
      </div>
    </Paper>
  );
}

export default Card;

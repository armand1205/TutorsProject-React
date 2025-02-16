import React from "react";
import facultiesIcon from "../../assets/Faculties-icon.png";
import Paper from "../../Paper/Paper";
import Button from "../../components/Button/Button";
import { FaCirclePlus } from "react-icons/fa6";
import propTypes from "prop-types";
import InfoBlock from "../../components/InfoBlock/InfoBlock";
import styles from "./Faculties.module.css";

export default function Faculties({ faculties }) {
  return (
    <div className={styles.facultiesContainer}>
      <div className={styles.faculties}>
        <img src={facultiesIcon} alt="Faculties Icon" />
        <h1>FACULTIES</h1>
      </div>
      <div className={styles.faculty}>
        {faculties.map((faculty, index) => {
          return (
            <Paper key={index}>
              <InfoBlock info={faculty.name} />
            </Paper>
          );
        })}
      </div>
      <Button icon={<FaCirclePlus />} text={"ADD FACULTY"} onClick={null} />
    </div>
  );
}

Faculties.propTypes = {
  faculties: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
    })
  ).isRequired,
};

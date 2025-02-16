import React, { useState } from "react";
import citiesIcon from "../../assets/Cities-icon.png";
import Paper from "../../Paper/Paper";
import Button from "../../components/Button/Button";
import { FaCirclePlus } from "react-icons/fa6";
import propTypes from "prop-types";
import InfoBlock from "../../components/InfoBlock/InfoBlock";
import styles from "./Cities.module.css";

export default function Cities({ cities }) {
  const [showForm, setShowForm] = useState(false);
  const onShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className={styles.citiesContainer}>
      <div className={styles.cities}>
        <img src={citiesIcon} alt="Cities Icon" />
        <h1>CITIES</h1>
      </div>
      <div className={styles.city}>
        {cities.map((city, index) => {
          return (
            <Paper key={index}>
              <InfoBlock info={city} />
            </Paper>
          );
        })}
      </div>
      {showForm && (
        <Paper>
          <div className={styles.formContainer}>
            <h4>Add new city</h4>
            <form action="" className={styles.form}>
              <input type="text" placeholder="Enter new city" />
              <Button text={"ADD"} />
            </form>
          </div>
        </Paper>
      )}
      <Button icon={<FaCirclePlus />} text={"ADD CITY"} onClick={onShowForm} />{" "}
    </div>
  );
}

Cities.propTypes = {
  cities: propTypes.arrayOf(propTypes.string).isRequired,
};

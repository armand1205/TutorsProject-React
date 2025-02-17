import React, { useState } from "react";
import citiesIcon from "../../assets/Cities-icon.png";
import Paper from "../../Paper/Paper";
import Button from "../../components/Button/Button";
import { FaCirclePlus } from "react-icons/fa6";
import propTypes from "prop-types";
import InfoBlock from "../../components/InfoBlock/InfoBlock";
import styles from "./Cities.module.css";
import CityForm from "../../components/Forms/CityForm/CityForm";

export default function Cities({ data }) {
  const [showForm, setShowForm] = useState(false);

  const [cities, setCities] = useState(data);

  const onShowForm = () => {
    setShowForm(!showForm);
  };

  const onAddCity = (city) => {
    setCities((prev) => [...prev, city]);
    setShowForm(false);
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
          <CityForm onAddCity={onAddCity} />
        </Paper>
      )}
      <Button icon={<FaCirclePlus />} text={"ADD CITY"} onClick={onShowForm} />{" "}
    </div>
  );
}

Cities.propTypes = {
  cities: propTypes.arrayOf(propTypes.string).isRequired,
};

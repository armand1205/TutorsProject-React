import React from "react";
import citiesIcon from "../../assets/Cities-icon.png";
import Paper from "../../components/Paper";
import Button from "../../components/Button/Button";
import { FaCirclePlus } from "react-icons/fa6";
import propTypes from "prop-types";

export default function Cities({ cities }) {
  return (
    <div>
      <img src={citiesIcon} alt="Cities Icon" />
      <h1>Cities</h1>
      {cities.map((city, index) => {
        return (
          <Paper key={index}>
            <p>{city}</p>
          </Paper>
        );
      })}
      <Button icon={<FaCirclePlus />} text={"ADD CITY"} onClick={null} />{" "}
    </div>
  );
}

Cities.propTypes = {
  cities: propTypes.arrayOf(propTypes.string).isRequired,
};

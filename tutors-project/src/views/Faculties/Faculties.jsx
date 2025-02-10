import React from "react";
import facultiesIcon from "../../assets/Faculties-icon.png";
import Paper from "../../components/Paper";
import Button from "../../components/Button/Button";
import { FaCirclePlus } from "react-icons/fa6";
import propTypes from "prop-types";

export default function Faculties({ faculties }) {
  return (
    <div>
      <img src={facultiesIcon} alt="Faculties Icon" />
      <h1>Faculties</h1>
      {faculties.map((faculty, index) => {
        return (
          <Paper key={index}>
            <p>{faculty.name}</p>
          </Paper>
        );
      })}
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

import React from "react";
import Paper from "../../components/Paper";
import catIcon from "../../assets/Cat-icon.png";
import Tutor from "../../components/Tutor/Tutor";
import Button from "../../components/Button/Button";
import { FaCirclePlus } from "react-icons/fa6";
import propTypes from "prop-types";

export default function Tutors({ tutors }) {
  return (
    <div>
      <img src={catIcon} alt="Cat Icon" />
      <h1>Tutors</h1>
      {tutors.map((tutor, index) => {
        return (
          <Paper key={index}>
            <Tutor
              city={tutor.city}
              email={tutor.email}
              firstName={tutor.firstName}
              lastName={tutor.lastName}
              options={tutor.options}
              phone={tutor.phone}
            ></Tutor>
          </Paper>
        );
      })}
      <Button icon={<FaCirclePlus />} text={"ADD TUTOR"} onClick={null} />
    </div>
  );
}

Tutors.propTypes = {
  tutors: propTypes.arrayOf(
    propTypes.shape({
      city: propTypes.string.isRequired,
      email: propTypes.string.isRequired,
      firstName: propTypes.string.isRequired,
      lastName: propTypes.string.isRequired,
      options: propTypes.arrayOf(propTypes.string).isRequired,
      phone: propTypes.string.isRequired,
    })
  ).isRequired,
};

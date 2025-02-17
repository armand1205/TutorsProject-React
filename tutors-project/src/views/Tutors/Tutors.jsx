import React, { useState } from "react";
import Paper from "../../Paper/Paper";
import catIcon from "../../assets/Cat-icon.png";
import Tutor from "../../components/Tutor/Tutor";
import Button from "../../components/Button/Button";
import { FaCirclePlus } from "react-icons/fa6";
import propTypes from "prop-types";
import styles from "./Tutors.module.css";
import TutorForm from "../../components/Forms/TutorForm/TutorForm";

export default function Tutors({ data }) {
  const [showForm, setShowForm] = useState(false);
  const [tutors, setTutors] = useState(data);

  const onShowForm = () => {
    setShowForm(!showForm);
  };

  const onAddTutor = (tutor) => {
    setTutors((prev) => [...prev, tutor]);
    setShowForm(false);
  };

  return (
    <div className={styles.tutorsContainer}>
      <div className={styles.tutors}>
        <img src={catIcon} alt="Cat Icon" />
        <h1>TUTORS</h1>
      </div>
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

      {showForm && (
        <Paper>
          <TutorForm onAddTutor={onAddTutor} />
        </Paper>
      )}
      <Button icon={<FaCirclePlus />} text={"ADD TUTOR"} onClick={onShowForm} />
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

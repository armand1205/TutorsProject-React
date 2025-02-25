import React, { useEffect, useState } from "react";
import Paper from "../../Paper/Paper";
import catIcon from "../../assets/Cat-icon.png";
import Tutor from "../../components/Tutor/Tutor";
import Button from "../../components/Button/Button";
import { FaCirclePlus } from "react-icons/fa6";
import propTypes from "prop-types";
import styles from "./Tutors.module.css";
import TutorForm from "../../components/Forms/TutorForm/TutorForm";

import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

import { tutorsApi } from "../../api/api";

export default function Tutors() {
  const [tutors, setTutors] = useState();
  const [showForm, setShowForm] = useState(false);
  // setam loading
  const [isLoading, setIsLoading] = useState(true);
  // setam o eroare pe care o setam pe null prima dta
  const [error, setError] = useState(null);

  const onShowForm = () => {
    setShowForm(!showForm);
  };

  const onAddTutor = async (tutor) => {
    // cand adaugam alt tutor il bagam in state si trimitem la server
    try {
      // cand creez un tutore, automat raspunsul de la server
      // o sa reprezinte acel obiect
      const response = await tutorsApi.create(tutor);
      // luam acel raspuns si il adaugam in state
      setTutors((prev) => [...prev, response.data]);
      setShowForm(false);
    } catch (error) {
      setError("A aparut o eroare la adaugarea tutorelui");
    }
  };

  // 1. If we want to use localStorage

  // useEffect(() => {
  //   const tutorsLocalStorage = JSON.parse(localStorage.getItem("tutors"));
  //   setTutors(tutorsLocalStorage);
  // }, []);

  // useEffect(() => {
  //   if (tutors) localStorage.setItem("tutors", JSON.stringify(tutors));
  // }, [tutors]);

  // 2. If we use API
  useEffect(() => {
    // setam loading pe true
    setIsLoading(true);
    const fetchData = async () => {
      try {
        // luam data de la server/API
        const response = await tutorsApi.getAll();
        // adaugam data in state
        // trebuie sa punem .data
        setTutors(response.data);
        // setam loadingSpinner pe false
        setIsLoading(false);
      } catch (error) {
        setError("A aparut o eroare la cererea catre /tutors");
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.tutorsContainer}>
      <div className={styles.tutors}>
        <img src={catIcon} alt="Cat Icon" />
        <h1>TUTORS</h1>
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : // daca se intampla eroarea o sa afiseze paragraful
      // incearca sa schimbi o litera in URL din API
      // si vezi daca functioneaza eroarea
      error ? (
        <p>{error}</p>
      ) : (
        <>
          {tutors?.map((tutor, index) => {
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
        </>
      )}

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

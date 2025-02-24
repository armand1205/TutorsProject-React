import React, { useEffect, useState } from "react";
import facultiesIcon from "../../assets/Faculties-icon.png";
import Paper from "../../Paper/Paper";
import Button from "../../components/Button/Button";
import { FaCirclePlus } from "react-icons/fa6";
import propTypes from "prop-types";
import InfoBlock from "../../components/InfoBlock/InfoBlock";
import styles from "./Faculties.module.css";
import FacultyForm from "../../components/Forms/FacultyForm/FacultyForm";

export default function Faculties() {
  const [faculties, setFaculties] = useState();
  const [showForm, setShowForm] = useState(false);

  const onShowForm = () => {
    setShowForm(!showForm);
  };

  const onAddFaculty = (faculty) => {
    setFaculties((prev) => [...prev, faculty]);
    setShowForm(false);
  };

  useEffect(() => {
    if (faculties) localStorage.setItem("faculties", JSON.stringify(faculties));
  }, [faculties]);

  useEffect(() => {
    const localStorageFaculties = JSON.parse(localStorage.getItem("faculties"));
    setFaculties(localStorageFaculties);
  }, []);

  return (
    <div className={styles.facultiesContainer}>
      <div className={styles.faculties}>
        <img src={facultiesIcon} alt="Faculties Icon" />
        <h1>FACULTIES</h1>
      </div>
      <div className={styles.faculty}>
        {faculties?.map((faculty, index) => {
          return (
            <Paper key={index}>
              <InfoBlock info={faculty.name} />
            </Paper>
          );
        })}
      </div>
      {showForm && (
        <Paper>
          <FacultyForm onAddFaculty={onAddFaculty} />
        </Paper>
      )}
      <Button
        icon={<FaCirclePlus />}
        text={"ADD FACULTY"}
        onClick={onShowForm}
      />
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

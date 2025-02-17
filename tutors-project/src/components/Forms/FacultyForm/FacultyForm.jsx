import React, { useState } from "react";
import styles from "./FacultyForm.module.css";
import Button from "../../Button/Button";

export default function FacultyForm({ onAddFaculty }) {
  const [faculty, setFaculty] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // const newFaculty = { name: faculty };
    onAddFaculty({ name: faculty });
  };

  return (
    <div className={styles.formContainer}>
      <h4>Add new city</h4>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="faculty"
          placeholder="Enter new city"
          value={faculty}
          onChange={(event) => setFaculty(event.target.value)}
        />
        <Button text={"ADD"} />
      </form>
    </div>
  );
}

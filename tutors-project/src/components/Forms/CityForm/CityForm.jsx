import React, { useState } from "react";
import styles from "./CityForm.module.css";
import Button from "../../Button/Button";

export default function CityForm({ onAddCity }) {
  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = city;
    onAddCity(formData);
  };

  return (
    <div className={styles.formContainer}>
      <h4>Add new city</h4>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Enter new city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <Button text={"ADD"} />
      </form>
    </div>
  );
}

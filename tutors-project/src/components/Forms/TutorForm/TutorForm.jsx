import React, { useState } from "react";
import styles from "./TutorForm.module.css";
import Button from "../../Button/Button";

export default function TutorForm({ onAddTutor }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [options, setOptions] = useState();

  // se poate face si asa cu o functie sau ca mai jos direct in onChange
  // const handlerFirstName = (event) => {
  //   setFirstName(event.target.value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { firstName, lastName, phone, email, city, options };
    // console.log(formData);
    onAddTutor(formData);
  };

  return (
    <div className={styles.formContainer}>
      <h4>Adding a tutor</h4>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name*"
          required
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name*"
          required
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone number*"
          required
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <input
          type="text"
          name="email"
          placeholder="Email*"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="text"
          name="city"
          placeholder="City*"
          required
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <input
          type="text"
          name="options"
          placeholder="Options*"
          required
          value={options}
          onChange={(event) => setOptions(event.target.value)}
        />
        <Button text={"INVITE"}></Button>
      </form>
    </div>
  );
}

import React from "react";
import styles from "./TutorForm.module.css";
import Button from "../Button/Button";

export default function TutorForm() {
  return (
    <div className={styles.formContainer}>
      <h4>Adding a tutor</h4>
      <form action="#" className={styles.form}>
        <label>
          <input type="text" name="surname" placeholder="Surname*" required />
        </label>
        <label>
          <input type="text" name="lastname" placeholder="Name*" required />
        </label>
        <label>
          <input
            type="text"
            name="phone"
            placeholder="Phone number*"
            required
          />
        </label>
        <label>
          <input
            type="text"
            name="email"
            placeholder="Email*"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
          />
        </label>
        <label>
          <input type="text" name="city" placeholder="City*" required />
        </label>
        <Button text={"INVITE"}></Button>
      </form>
    </div>
  );
}

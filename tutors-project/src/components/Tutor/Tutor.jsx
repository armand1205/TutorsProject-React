import React from "react";
import styles from "./Tutor.module.css";
import { BsFillPhoneFill } from "react-icons/bs";
import { HiEnvelope } from "react-icons/hi2";
import { IoMdPin } from "react-icons/io";

export default function Tutor({
  firstName,
  lastName,
  phone,
  email,
  city,
  options,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.fullname}>
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
      <div className={StyleSheet.contactContainer}>
        <div className={styles.contact}>
          <BsFillPhoneFill />
          <p>{phone}</p>
        </div>
        <div className={styles.contact}>
          <HiEnvelope />
          <p>{email}</p>
        </div>
        <div className={styles.contact}>
          <IoMdPin />
          <p>{city}</p>
        </div>
      </div>
      <div>{options}</div>
    </div>
  );
}

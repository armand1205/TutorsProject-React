import React from "react";
import Card from "../../views/Card/Card";
import Description from "../../views/Description/Description";
import Tutors from "../../views/Tutors/Tutors";
import Cities from "../../views/Cities/Cities";
import Faculties from "../../views/Faculties/Faculties";
import collectionData from "../../data/colectionData.json";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>UNIVERSITY INFORMATION</div>
      <div className={styles.univContainer}>
        <Card />
        <Description />
      </div>
      <Tutors data={collectionData.tutors} />
      <Cities data={collectionData.cities} />
      <Faculties faculties={collectionData.department} />
    </div>
  );
}

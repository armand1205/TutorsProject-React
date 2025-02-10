import React from "react";
import Card from "../views/Card/Card";
import Description from "../views/Description/Description";
import Tutors from "../views/Tutors/Tutors";
import Cities from "../views/Cities/Cities";
import Faculties from "../views/Faculties/Faculties";
import collectionData from "../data/colectionData.json";

export default function Main() {
  return (
    <div>
      <Card />
      <Description />
      <Tutors tutors={collectionData.tutors} />
      <Cities cities={collectionData.cities} />
      <Faculties faculties={collectionData.department} />
    </div>
  );
}

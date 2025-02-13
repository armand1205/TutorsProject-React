import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import styles from "./App.module.css";

// import Menu from "./components/Menu";
// import MenuItem from "./components/MenuItem";
// import TutorsList from "./components/TutorsList";
// import Tutor from "./components/Tutor";
// import Card from "./components/Card";
// import CitiesList from "./components/CitiesList";
// import City from "./components/City";
// import DepartmentsList from "./components/DepartmentsList";
// import Department from "./components/Department";
// import Paper from "./components/Paper";

function App() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;

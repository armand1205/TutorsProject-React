import React from "react";
import propTypes from "prop-types";
import styles from "./MenuItem.module.css";

function MenuItem({ name }) {
  return <p className={styles.tabsTabText}>{name}</p>;
}

MenuItem.propTypes = {
  name: propTypes.string.isRequired,
};

export default MenuItem;

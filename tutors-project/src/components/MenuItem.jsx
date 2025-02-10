import React from "react";
import propTypes from "prop-types";

function MenuItem({ name }) {
  return <div>{name}</div>;
}

MenuItem.propTypes = {
  name: propTypes.string.isRequired,
};

export default MenuItem;

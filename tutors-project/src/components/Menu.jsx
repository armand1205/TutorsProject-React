import React from "react";
import propTypes from "prop-types";
import MenuItem from "./MenuItem";
import { menuConfig } from "../data/menu";

function Menu() {
  return (
    <div>
      {menuConfig.map((tab, index) => {
        return <MenuItem key={index} name={tab.name} />;
      })}
    </div>
  );
}

Menu.propTypes = {
  name: propTypes.string.isRequired,
};

export default Menu;

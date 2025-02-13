import React from "react";
import propTypes from "prop-types";
import MenuItem from "../MenuItem/MenuItem";
import { menuConfig } from "../../data/menu";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <div className={styles.tabs}>
      {menuConfig.map((tab, index) => {
        return (
          <div key={index} className={styles.tabsTab}>
            {tab.icon}
            <MenuItem key={index} name={tab.name} />
          </div>
        );
      })}
    </div>
  );
}

Menu.propTypes = {
  name: propTypes.string.isRequired,
};

export default Menu;

import React from "react";
import Paper from "../../components/Paper";
import university from "../../assets/mask-group.png";
import { HiPencilAlt, HiTrash } from "react-icons/hi";

function Card() {
  return (
    <Paper>
      <img src={university} alt="University Icon" width="80" />
      <p>University</p>
      <p>MIT</p>
      <button>
        <HiPencilAlt />
      </button>
      <button>
        <HiTrash />
      </button>
    </Paper>
  );
}

export default Card;

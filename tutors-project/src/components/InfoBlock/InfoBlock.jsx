import React, { useState } from "react";
import { BsPencilSquare, BsThreeDotsVertical } from "react-icons/bs";
import styles from "./InfoBlock.module.css";
import { BiSolidTrash } from "react-icons/bi";

export default function InfoBlock({ info }) {
  const [showModal, setShowModal] = useState(false);

  const onModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className={styles.info}>
      <p>{info}</p>
      <button onClick={onModal}>
        <BsThreeDotsVertical />
      </button>

      {showModal && (
        <div className={styles.modal}>
          <div>
            <BsPencilSquare />
            <p>Edit</p>
          </div>
          <div>
            <BiSolidTrash />
            <p>Delete</p>
          </div>
        </div>
      )}
    </div>
  );
}

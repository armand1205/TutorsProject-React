import React, { useState } from "react";
import { BsPencilSquare, BsThreeDotsVertical } from "react-icons/bs";
import styles from "./InfoBlock.module.css";
import { BiSolidTrash } from "react-icons/bi";
import Modal from "../Modal/Modal";
import editImg from "../../assets/editImg.png";
import deleteImg from "../../assets/deleteImg.png";

export default function InfoBlock({ type, info, onDelete, onEdit }) {
  const [modal, setModal] = useState(false);
  const [newName, setNewName] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typeModal, setTypeModal] = useState("edit");

  const openModalEdit = () => {
    setIsModalOpen(true);
    setModal(false);
    setTypeModal("edit");
  };

  const openModalDelete = () => {
    setIsModalOpen(true);
    setModal(false);
    setTypeModal("delete");
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    setModal(!modal);
  };

  const handlerDelete = () => {
    onDelete(info);
    setIsModalOpen(false);
  };

  const handlerEdit = () => {
    onEdit(info, newName);
    setIsModalOpen(false);
  };

  return (
    <div className={styles.info}>
      <p>{info}</p>
      <button onClick={handleClick}>
        <BsThreeDotsVertical />
      </button>

      {modal && (
        <div className={styles.modal}>
          <button onClick={openModalEdit}>
            <BsPencilSquare />
            <p>Edit</p>
          </button>
          <button onClick={openModalDelete}>
            <BiSolidTrash />
            <p>Delete</p>
          </button>
        </div>
      )}
      <Modal isOpen={isModalOpen} onClose={onCloseModal}>
        {typeModal === "edit" ? (
          <>
            <img src={editImg} alt="edit img" width="40" />
            <h2>EDIT {type} INFORMATION</h2>
            <label>
              {type}
              <br />
              <input
                type="text"
                onChange={(event) => {
                  setNewName(event.target.value);
                }}
                name={type}
                value={newName}
                placeholder={type}
              />
            </label>
            <button onClick={handlerEdit}>Save</button>
          </>
        ) : (
          <>
            <img src={deleteImg} alt="delete img" width="40" />
            <h2>{type}</h2>
            <p>
              All materials and information about the faculty will be
              permanently deleted{" "}
            </p>
            <div>
              <button onClick={null}>NO</button>
              <button onClick={handlerDelete}>YES</button>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
}

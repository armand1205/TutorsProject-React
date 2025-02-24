import React, { useEffect } from "react";
import styles from "./Modal.module.css";

export default function Modal({ isOpen, onClose, children }) {
  const handleKeyDown = (event) => {
    if (event.key === "Escape") onClose();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.addEventListener("keydown", handleKeyDown);
    };
  });

  if (!isOpen) {
    return null;
  }
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

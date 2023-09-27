import React, { useState } from "react";
import s from "./Modal.module.css";
import Modal from "react-modal";

export const ModalComponent = ({
  isOpen,
  onRequestClose,
  onMakeActive,
  onDelete,
  cardId,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={s.content}
      overlayClassName={s.overlay}
      contentLabel="Modal Component"
    >
      <p>
        <strong>Make changes to this card?</strong>
      </p>
      <p>id: {cardId}</p>
      <button className={s.gap} onClick={onMakeActive}>
        Make Active
      </button>
      <button onClick={onDelete}>Delete</button>
      {/* <button onClick={onRequestClose}>Cancel</button> */}
    </Modal>
  );
};

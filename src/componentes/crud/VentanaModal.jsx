import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function VentanaModal({ show, handleClose, manejodeClick, idDelete }) {
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Mensaje del sistema.</Modal.Title>
        </Modal.Header>
        <Modal.Body>Realmente deseas eliminar al equipo {idDelete}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              manejodeClick();
            }}
          >
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default VentanaModal;

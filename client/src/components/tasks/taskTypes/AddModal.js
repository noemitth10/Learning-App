import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

function AddModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.modalTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.modalHeader}</h4>
        <p>{props.modalText}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Bezárás</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default AddModal;
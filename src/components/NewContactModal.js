import React, { useRef } from "react";
import { Form, Modal, Button } from "react-bootstrap";

export default function NewContactModal({ closeModal }) {
  const idRef = useRef();
  const nameRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    // createContact(idRef.current.value, nameRef.current.value)
    closeModal();
  }

  return (
    <>
      <Modal.Header>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" ref={idRef}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef}></Form.Control>
          </Form.Group>
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
}

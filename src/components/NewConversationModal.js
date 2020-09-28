import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../store/actions';

export default function NewConversationModal({ closeModal }) {
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const contacts = useSelector((state) => state.contacts);
  const disptach = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    disptach(
      actions.addConversation({ recipients: selectedContactIds, messages: [] })
    );
    closeModal();
  };

  const handleCheckBoxChange = (contactId) => {
    setSelectedContactIds((prevSelectedContactIds) => {
      return prevSelectedContactIds.includes(contactId)
        ? prevSelectedContactIds.filter((prevId) => prevId !== contactId)
        : [...prevSelectedContactIds, contactId];
    });
  };

  return (
    <>
      <Modal.Header>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckBoxChange(contact.id)}
              />
            </Form.Group>
          ))}
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
}

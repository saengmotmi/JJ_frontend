import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Modal, Button } from "react-bootstrap";
import actions from "../store/actions";

export default function NewConversationModal({ closeModal }) {
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const dispatch = useDispatch();

  const contacts = useSelector((store) => store.contacts);
  const conversations = useSelector((store) => store.conversations);

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(
      actions.addConversation({
        recipents: selectedContactIds,
        messages: [],
      })
    );
    closeModal();
  }

  function handleCheckboxChange(contactId) {
    setSelectedContactIds((prevSelectedContactIds) => {
      if (prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter((prevId) => {
          return contactId !== prevId;
        });
      } else {
        return [...prevSelectedContactIds, contactId];
      }
    });
  }

  return (
    <>
      <Modal.Header>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <Form.Group>
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
              />
            </Form.Group>
          ))}
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
}

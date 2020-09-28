import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Contacts() {
  const contacts = useSelector((store) => store.contacts);

  return (
    <ListGroup variant="flush">
      {contacts.map((contact) => (
        <ListGroup.Item key={contact.id}>{contact.name}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup } from "react-bootstrap";

export default function Conversations() {
  const conversations = useSelector((store) => store.conversations);
  const contacts = useSelector((store) => store.contacts);
  const dispatch = useDispatch();

  const formattedConversations = conversations.map((conversation) => {
    const recipents = conversation.recipents.map((recipent) => {
      const contact = contacts.find((contact) => {
        return contact.id === recipent;
      });
      const name = (contact && contact.name) || recipent;
      return { id: recipent, name };
    });

    return { ...conversation, recipents };
  });

  return (
    <ListGroup variant="flush">
      {formattedConversations.map((conversation, idx) => (
        <ListGroup.Item
          key={idx}
          action
          // onClick={() => dispatch(action.)}
          active={conversation.selected}
        >
          {conversation.recipents.map((r) => r.name).join(", ")}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

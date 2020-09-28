import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function Conversations() {
  const conversations = useSelector((state) => state.conversations);
  const contacts = useSelector((state) => state.contacts);

  const formattedConversations = conversations.map((conversation) => {
    const recipients = conversation.recipients.map((recipient) => {
      return {
        id: recipient,
        name:
          contacts.find((contact) => contact.id === recipient)?.name ||
          recipient,
      };
    });

    return { ...conversation, recipients };
  });

  return (
    <ListGroup variant="flush">
      {formattedConversations.map((conversation, index) => (
        <ListGroup.Item key={index} action active={conversation.selected}>
          {conversation.recipients
            .map((recipient) => recipient.name)
            .join(', ')}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

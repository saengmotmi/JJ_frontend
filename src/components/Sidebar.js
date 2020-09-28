import React, { useState } from "react";
import { Button, Modal, Nav, Tab } from "react-bootstrap";
import Conversations from "../components/Conversations";
import Contacts from "../components/Contacts";

import NewConversationModal from "../components/NewConversationModal";
import NewContactModal from "../components/NewContactModal";

const CONVERSTIONS_KEY = "conversations";
const CONTACTS_KEY = "contacts";

export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSTIONS_KEY);
  const [modalOpen, setModalOpen] = useState(false);
  const conversationsOpen = activeKey === CONVERSTIONS_KEY;

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSTIONS_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSTIONS_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-right small">
          Your Id: <span className="text-muted">{id}</span>
        </div>
        <Button onClick={() => setModalOpen(true)} className="rounded-0">
          New {conversationsOpen ? "Converstation" : "Contact"}
        </Button>

        <Modal show={modalOpen} onHide={closeModal}>
          {conversationsOpen ? (
            <NewConversationModal closeModal={closeModal} />
          ) : (
            <NewContactModal closeModal={closeModal} />
          )}
        </Modal>
      </Tab.Container>
    </div>
  );
}

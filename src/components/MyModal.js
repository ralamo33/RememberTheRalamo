import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import EmailForm from "../components/EmailForm";



export default function MyModal(props) {
  const show = props.show;
  const setShow = props.setShow;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let email = "";

  const handleSubmit = (event) => alert(email)

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Where Shall we Send the Ravens?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
              <Form.Group controlId="EmailSubmit">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"/>
                  <Form.Text>
                      This is where we will email you a pdf of Quickstart Adventures. We'll never share your email with anyone else.
                  </Form.Text>
              </Form.Group>
                  <Button variant="secondary" onClick={handleClose}>Close</Button>
                  <Button variant="primary" type="submit">Onwards</Button>
          </Form>
        </Modal.Body>
      </Modal>
      </div>
  );
}
/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-param-reassign */
/* eslint-disable no-multi-assign */
import {
  Button, Modal, Container, Form,
} from 'react-bootstrap';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { insertNewPerson } from '../../actions/index';

function ModalInsertPerson() {
  const [show, setShow] = useState(false);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [civilStatus, setCivilStatus] = useState('');
  const [cpf, setCpf] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = () => {
    event.preventDefault();
    const newPerson = {
      name,
      age,
      civilStatus,
      cpf,
      city,
      state,
    };
    dispatch(insertNewPerson(newPerson));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        <Button variant="primary" onClick={handleShow}>
          Cadastar Nova Pessoa
        </Button>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Preencha todos os Campos</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nome</Form.Label>
              <Form.Control onChange={(e) => setName(e.target.value)} name="name" type="text" placeholder="Ex: Carlos" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Idade</Form.Label>
              <Form.Control onChange={(e) => setAge(e.target.value)} name="age" type="number" placeholder="Ex: 21" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Estado Civil</Form.Label>
              <Form.Control onChange={(e) => setCivilStatus(e.target.value)} name="civilStatus" type="text" placeholder="Ex: Solteiro" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>CPF</Form.Label>
              <Form.Control onChange={(e) => setCpf(e.target.value)} name="cpf" type="text" placeholder="Ex: 577.251.350-81" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Cidade</Form.Label>
              <Form.Control onChange={(e) => setCity(e.target.value)} name="city" type="text" placeholder="Ex: São Paulo" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Estado</Form.Label>
              <Form.Control onChange={(e) => setState(e.target.value)} name="state" type="text" placeholder="Ex: SP" />
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button variant="primary" type="submit">
              Salvar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default ModalInsertPerson;

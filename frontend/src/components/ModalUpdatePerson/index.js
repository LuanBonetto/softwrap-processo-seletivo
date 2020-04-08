/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

export default function ModalUpdatePerson(props) {
  return (
    <>
      <Modal show={props.showModal} onHide={props.hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Preencha todos os Campos</Modal.Title>
        </Modal.Header>
        <Form onSubmit={props.onUpdatePerson}>
          <Modal.Body>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nome</Form.Label>
              <Form.Control onChange={props.onChangeName} value={props.valueName} name="name" type="text" placeholder="Ex: Carlos" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Idade</Form.Label>
              <Form.Control onChange={props.onChangeAge} value={props.valueAge} name="age" type="number" placeholder="Ex: 21" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Estado Civil</Form.Label>
              <Form.Control onChange={props.onChangeCivilStatus} value={props.valueCivilStatus} name="civilStatus" type="text" placeholder="Ex: Solteiro" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>CPF</Form.Label>
              <Form.Control onChange={props.onChangeCpf} value={props.valueCpf} name="cpf" type="text" placeholder="Ex: 577.251.350-81" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Cidade</Form.Label>
              <Form.Control onChange={props.onChangeCity} value={props.valueCity} name="city" type="text" placeholder="Ex: São Paulo" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Estado</Form.Label>
              <Form.Control onChange={props.onChangeState} value={props.valueState} name="state" type="text" placeholder="Ex: SP" />
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.closeModal}>
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

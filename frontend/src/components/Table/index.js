import React from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';

export default function ContentTable() {
  return (
    <Container>
      <Table striped bordered hover variant="dark" responsive size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Estado Civil</th>
            <th>CPF</th>
            <th>Cidade</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Luan</td>
            <td>20</td>
            <td>Namorando</td>
            <td>18337496770</td>
            <td>Vitória</td>
            <td>ES</td>
            <td>
              <Button variant="danger"><FaTrashAlt /></Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

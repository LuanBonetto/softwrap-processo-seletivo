/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { getPersons, deletePersonByCpf, updatePersonByCpf } from '../../actions/index';
import ModalUpdatePerson from '../ModalUpdatePerson/index';

export default function ContentTable() {
  const dispatch = useDispatch();
  const persons = useSelector((state) => state.allPersons);
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [civilStatus, setCivilStatus] = useState('');
  const [cpf, setCpf] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  useEffect(() => {
    dispatch(getPersons());
  }, [dispatch]);

  const onDeletePerson = (cpfPerson) => {
    dispatch(deletePersonByCpf(cpfPerson));
  };

  const handleClose = () => setShow(false);
  const handleShow = (person) => {
    setShow(true);
    setName(person.name);
    setAge(person.age);
    setCivilStatus(person.civilStatus);
    setCpf(person.cpf);
    setCity(person.city);
    setState(person.state);
  };

  const updatePerson = () => {
    event.preventDefault();
    const newPerson = {
      name,
      age,
      civilStatus,
      cpf,
      city,
      state,
    };
    dispatch(updatePersonByCpf(newPerson));
  };

  return (
    <Container>
      <Table striped bordered hover variant="dark" responsive size="sm">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Estado Civil</th>
            <th>CPF</th>
            <th>Cidade</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          { persons.map((person) => (
            <tr key={person.cpf}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.civilStatus}</td>
              <td>{person.cpf}</td>
              <td>{person.city}</td>
              <td>{person.state}</td>
              <td style={{ maxWidth: '70px' }}>
                <Button style={{ margin: '0 5px' }} onClick={() => handleShow(person)}><FaEdit /></Button>

                <Button variant="danger" style={{ margin: '0 5px' }} onClick={() => onDeletePerson(person.cpf)}><FaTrashAlt /></Button>
              </td>
            </tr>
          )) }
        </tbody>
      </Table>

      <ModalUpdatePerson
        showModal={show}
        hideModal={handleClose}
        onChangeName={(e) => setName(e.target.value)}
        valueName={name}
        onChangeAge={(e) => setAge(e.target.value)}
        valueAge={age}
        onChangeCivilStatus={(e) => setCivilStatus(e.target.value)}
        valueCivilStatus={civilStatus}
        onChangeCpf={(e) => setCpf(e.target.value)}
        valueCpf={cpf}
        onChangeCity={(e) => setCity(e.target.value)}
        valueCity={city}
        onChangeState={(e) => setState(e.target.value)}
        valueState={state}
        closeModal={handleClose}
        onUpdatePerson={updatePerson}
      />
    </Container>
  );
}

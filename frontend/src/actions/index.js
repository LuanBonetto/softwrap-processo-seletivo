/* eslint-disable no-alert */
/* eslint-disable no-console */
import axios from 'axios';

const setPersons = (persons) => ({
  type: 'SET_PERSONS',
  payload: {
    persons,
  },
});

export const getPersons = () => async (dispatch) => {
  try {
    const response = await axios.get('https://us-central1-softwrap-tabela.cloudfunctions.net/app/persons');
    dispatch(setPersons(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const insertNewPerson = (person) => async (dispatch) => {
  try {
    const newPerson = {
      name: person.name,
      age: person.age,
      civilStatus: person.civilStatus,
      cpf: person.cpf,
      city: person.city,
      state: person.state,
    };
    const response = await axios.post('https://us-central1-softwrap-tabela.cloudfunctions.net/app/person', newPerson);
    dispatch(getPersons());
    window.alert(response.data.message);
  } catch (err) {
    window.alert('Verifique se algum campo está faltando');
  }
};

export const deletePersonByCpf = (cpf) => async (dispatch) => {
  try {
    await axios.delete(`https://us-central1-softwrap-tabela.cloudfunctions.net/app/person/${cpf}`);
    dispatch(getPersons());
  } catch (err) {
    console.log(err);
  }
};

export const updatePersonByCpf = (person) => async (dispatch) => {
  try {
    const updatedPerson = {
      name: person.name,
      age: person.age,
      civilStatus: person.civilStatus,
      city: person.city,
      state: person.state,
    };
    const response = await axios.put(`https://us-central1-softwrap-tabela.cloudfunctions.net/app/person/${person.cpf}`, updatedPerson);
    dispatch(getPersons());
    window.alert(response.data.message);
  } catch (err) {
    window.alert('Verifique se algum campo está faltando');
  }
};

const initialState = {
  allPersons: [],
  cpf: '',
};

const persons = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PERSONS':
      return { ...state, allPersons: action.payload.persons };
    case 'SET_SELECTED_USER_ID':
      return { ...state, cpf: action.payload.cpf };
    default:
      return state;
  }
};

export default persons;

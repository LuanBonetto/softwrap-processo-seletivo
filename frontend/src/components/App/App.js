import React from 'react';
import { Provider } from 'react-redux';
import ContentTable from '../Table';
import ModalInsertPerson from '../ModalInsertPerson';
import store from '../../store/index';

export default function App() {
  return (
    <Provider store={store}>
      <ModalInsertPerson />
      <ContentTable />
    </Provider>
  );
}

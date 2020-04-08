import { combineReducers } from 'redux';
import persons from './reducer';

export const generateReducers = combineReducers({
  persons,
});

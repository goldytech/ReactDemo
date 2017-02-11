import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function configurationReducer(state = initialState.configurations,action) {
  switch (action.type){
    case types.LOAD_CONFIGURATION_SUCCESS:
      return action.configurations;
    default:
      return state;
  }
}

import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function emailConfigReducer(state = initialState.emailConfig, action) {
  debugger;
  switch (action.type) {
    case types.LOAD_EMAIL_CONFIGURATION_SUCCESS:
      return action.emailConfig;
    default:
      return state;
  }
}

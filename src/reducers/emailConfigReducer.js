import * as types from '../actions/actionTypes';
import initialState from './initialState';
import objectAssign from 'object-assign';

export default function emailConfigReducer(state = initialState.emailConfig, action) {
  debugger;
  let newState;
  switch (action.type) {
    case types.LOAD_EMAIL_CONFIGURATION_SUCCESS:
      return action.emailConfig;
    case types.UPDATE_EMAILCONFIG_SUCCESS:

      return objectAssign({}, state, {emailConfig: action.emailConfig});
    default:
      return state;
  }
}

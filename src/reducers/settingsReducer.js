import * as types from '../actions/actionTypes';
import initialState from './initialState';
import objectAssign from 'object-assign';

export default function settingsReducer(state = initialState.apiSettings, action) {
  debugger;
  switch (action.type) {
    case types.LOAD_SETTINGS_SUCCESS:
      return state.apiSettings;
    case types.UPDATE_SETTINGS_SUCCESS:

      return objectAssign({}, state, {
        authHdr: action.settings.authHdr,
        host: action.settings.host,
        port: action.settings.port
      });

    default:
      return state;
  }
}

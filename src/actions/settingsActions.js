import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxstatusActions';

export function loadSettingsSuccess() {
  return {type: types.LOAD_SETTINGS_SUCCESS};
}

export function saveSettingsSuccess(settings) {
  return {type: types.UPDATE_SETTINGS_SUCCESS, settings};
}

export function saveSettingsFailure(errMsg) {
  return {type: types.UPDATE_EMAILCONFIG_ERROR, errMsg};
}
export function loadSettings() {
  return function (dispatch) {
    //dispatch(beginAjaxCall());
    dispatch(loadSettingsSuccess());

  };
}

export function saveSettings(settings) {

  return function (dispatch) {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dispatch(saveSettingsSuccess(settings)));
      }, 1);
    });
    //dispatch(beginAjaxCall());


  };
}

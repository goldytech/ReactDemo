import * as types from './actionTypes';
import emailConfigApi from '../api/emailConfigApi';
import {beginAjaxCall, ajaxCallError} from './ajaxstatusActions';

export function loadEmailConfigurationSuccess(emailConfig) {
  debugger;
  return {type: types.LOAD_EMAIL_CONFIGURATION_SUCCESS, emailConfig};
}
export function loadEmailConfiguration() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return emailConfigApi.getEmailConfig().then(emailConfig => {

      dispatch(loadEmailConfigurationSuccess(emailConfig));
    }).catch(error => {
      throw(error);
    });
  };
}

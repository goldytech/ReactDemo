import * as types from './actionTypes';
import emailConfigApi from '../api/emailConfigApi';
import {beginAjaxCall, ajaxCallError} from './ajaxstatusActions';

export function loadEmailConfigurationSuccess(emailConfig) {
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
export function updateEmailConfigSuccess(emailConfig) {
  return {type: types.UPDATE_EMAILCONFIG_SUCCESS, emailConfig};
}
export function updateEmailConfig(updatedEmailConfig) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return emailConfigApi.saveEmailConfig(updatedEmailConfig).then(updatedEmailConfig => {
      dispatch(updateEmailConfigSuccess(updatedEmailConfig));

    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  }
}

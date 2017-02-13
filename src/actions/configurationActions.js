    import * as types from './actionTypes';
    import configurationApi from '../api/configurationApi';
    import {beginAjaxCall, ajaxCallError} from './ajaxstatusActions';

    export function loadConfigurationSuccess(configurations) {
      debugger;
      return { type: types.LOAD_CONFIGURATION_SUCCESS, configurations};
    }
    export function loadConfiguration() {

      return function(dispatch) {
        dispatch(beginAjaxCall());
        return configurationApi.getAllServices().then(configurations => {
          dispatch(loadConfigurationSuccess(configurations));
        }).catch(error => {
          throw(error);
        });
      };
    }


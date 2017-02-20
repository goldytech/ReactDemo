import {combineReducers} from 'redux';
import configurations from './configurationReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import emailConfig from './emailConfigReducer';
import settings from './settingsReducer';

const rootReducer = combineReducers({
  configurations,
  ajaxCallsInProgress,
  emailConfig,
  settings
});

export default rootReducer;

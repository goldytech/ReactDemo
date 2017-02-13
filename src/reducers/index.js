import {combineReducers} from 'redux';
import configurations from './configurationReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import emailConfig from './emailConfigReducer';

const rootReducer = combineReducers({
  configurations,
  ajaxCallsInProgress,
  emailConfig
});

export default rootReducer;

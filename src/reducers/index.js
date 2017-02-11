import {combineReducers} from 'redux';
import configurations from './configurationReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  configurations,
  ajaxCallsInProgress
});

export default rootReducer;

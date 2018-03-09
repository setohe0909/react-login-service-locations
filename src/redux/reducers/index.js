import { combineReducers } from 'redux';
import sessionReducer from './session';
import mapReducer from './map';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  mapState: mapReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import recruitmentReducer from './recruitmentReducer';

const rootReducer = combineReducers({
  recruitment: recruitmentReducer,
});

export default rootReducer;

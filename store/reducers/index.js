import { combineReducers } from 'redux'
import countReducer from './countReducer'
import unitReducer from './unitReducer'

export default combineReducers({
  countReducer,
  unitReducer,
});
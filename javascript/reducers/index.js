import { combineReducers } from 'redux';
import repos from './repos.reducer';


const rootReducer = combineReducers({
  repos
});

export default rootReducer;

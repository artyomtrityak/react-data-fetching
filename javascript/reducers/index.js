import { combineReducers } from 'redux';
import repos from './repos.reducer';
import user from './user.reducer';


const rootReducer = combineReducers({
  repos,
  user
});

export default rootReducer;

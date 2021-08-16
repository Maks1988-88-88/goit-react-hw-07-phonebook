import { combineReducers } from 'redux';
import { contactsReducer, filterReducer } from 'redux/reducers/contacts';


export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

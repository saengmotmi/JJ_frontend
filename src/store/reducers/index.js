import { combineReducers } from "redux";
import contactReducer from "./contactsReducer";
import conversationReducer from "./converstionsReducer";

export default combineReducers({
  contacts: contactReducer,
  conversations: conversationReducer,
});

import actions from "../actions";

const INITIAL_STATE = [];

const contacts = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.ADD_CONTACT:
      return [...state, payload.contact];

    default:
      return state;
  }
};

export default contacts;

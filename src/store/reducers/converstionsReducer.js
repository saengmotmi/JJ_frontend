import actions from "../actions";

const INITIAL_STATE = [];

const conversations = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.ADD_CONVERSATION:
      return [...state, payload.conversation];

    default:
      return state;
  }
};

export default conversations;

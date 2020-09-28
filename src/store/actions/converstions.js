const actions = {
  ADD_CONVERSATION: "ADD_CONVERSATION",
};

const actionCreators = {
  addConverstion: (converstion) => {
    return {
      type: actions.ADD_CONVERSATION,
      payload: { converstion },
    };
  },
};

export default { ...actions, ...actionCreators };

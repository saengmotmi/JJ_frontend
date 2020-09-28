const actions = {
  ADD_CONVERSATION: "ADD_CONVERSATION",
};

const actionCreators = {
  addConversation: (conversation) => {
    return {
      type: actions.ADD_CONVERSATION,
      payload: { conversation },
    };
  },
};

export default { ...actions, ...actionCreators };

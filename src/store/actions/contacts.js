const actions = {
  ADD_CONTACT: "ADD_CONTACT",
};

const actionCreators = {
  addContact: (contact) => {
    return {
      type: actions.ADD_CONTACT,
      payload: { contact },
    };
  },
};

export default { ...actions, ...actionCreators };

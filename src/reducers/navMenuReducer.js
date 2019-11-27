const CLICK = "CLICK";

export default (state, action) => {
  if (!state) {
    return { collapsed: false };
  }
  switch (action.type) {
    case CLICK:
      return { collapsed: !state.collapsed };
    default:
      return state;
  }
};

export const clickAction = () => {
  return { type: CLICK };
};

const INIT = "INIT";

export default (state, action) => {
  if (!state) {
    return {
      data: []
    };
  }
  switch (action.type) {
    case INIT:
      return {
        data: action.data
      };
    default:
      return state;
  }
};

export const initAction = data => {
  return { type: INIT, data };
};

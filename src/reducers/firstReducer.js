const INIT = "INIT";
const ADD = "ADD";

const firstReducer = (state, action) => {
  if (!state) return { user: [{ name: "", age: 0 }] };
  switch (action.type) {
    case INIT:
      return { user: [{ name: "Jack Chen", age: 29 }] };
    case ADD:
      return { user: [...state.user, { name: action.name, age: action.age }] };
    default:
      return state;
  }
};

export default firstReducer;

export const initAction = () => {
  return { type: INIT };
};

export const addAction = (name, age) => {
  return { type: ADD, name: name, age: age };
};

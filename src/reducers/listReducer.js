const INIT = "INIT";

export default (state, action) => {
  if (!state) {
    return {
      rows: []
    };
  }
  switch (action.type) {
    case INIT:
      return {
        rows: _load()
      };
    default:
      return state;
  }
};

const _load = () => {
  return [
    { fieldName: "messageId", fieldType: "string", fieldDesc: "消息唯一Id" }
  ];
};

export const initAction = () => {
  return { type: INIT };
};

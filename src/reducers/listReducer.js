const INIT = "INIT";

export default (state, action) => {
  if (!state) {
    return {
      apiRows: []
    };
  }
  switch (action.type) {
    case INIT:
      return {
        apiRows: _load()
      };
    default:
      return state;
  }
};

const _load = () => {
  return [
    { path: "/api/message/get", desc: "查询消息", type: "GET" },
    { path: "/api/message/send", desc: "发送消息", type: "POST" },
    { path: "/api/messages", desc: "查询消息列表", type: "GET" }
  ];
};

export const initAction = () => {
  return { type: INIT };
};

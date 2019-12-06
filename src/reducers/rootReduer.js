import { combineReducers } from "redux";
import firstReducer from "./firstReducer";
import navMenuReducer from "./navMenuReducer";
import listReducer from "./listReducer";
import calculatorReducer from "./calculatorReducer";

//连接多个 reducer 时，最好指明key值，也就是指明state的键。用state.firstReducer、state.navMenu来访问数据
const rootReducer = combineReducers({
  firstReducer,
  navMenu: navMenuReducer,
  list: listReducer,
  calculator: calculatorReducer
});

export default rootReducer;

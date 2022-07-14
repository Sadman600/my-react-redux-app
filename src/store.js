import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./Services/Reducers/counterReducer";
import todosReducer from "./Services/Reducers/todosReducer";

const store = createStore(todosReducer, applyMiddleware(thunk));

export default store;
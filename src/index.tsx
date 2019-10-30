import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import { configureStore } from "redux-starter-kit";
import App from "./App";
import "./index.css";
import { IndexReducer } from "./modules/store/index-reducer";
import * as serviceWorker from "./serviceWorker";

const rootReducer = combineReducers({
  index: IndexReducer,
  form: formReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

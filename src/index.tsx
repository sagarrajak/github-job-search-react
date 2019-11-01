import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { configureStore } from "redux-starter-kit";
import App from "./App";
import "./index.css";
import { searchReducer } from "./modules/search/searchSlice";
import { IndexReducer } from "./modules/store/index-reducer";
import * as serviceWorker from "./serviceWorker";

const rootReducer = combineReducers({
  index: IndexReducer,
  form: formReducer,
  search: searchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}><App /></Provider>
  </BrowserRouter>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { configureStore } from "redux-starter-kit";
import App from "./App";
import "./index.css";
import { jobCardReducer } from "./modules/search-results/job-card/jobCardSlice";
import { searchReducer } from "./modules/search/searchSlice";
import * as serviceWorker from "./serviceWorker";
import { IRootState } from "./modules/types";

const rootReducer = combineReducers<IRootState>({
  form: formReducer,
  search: searchReducer,
  jobCard: jobCardReducer,
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

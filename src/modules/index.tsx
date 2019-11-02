import React from "react";
import { Route, Switch } from "react-router-dom";
import ApplyPage from "./apply-page/applyPage";
import SearchResult from "./search-results/searchResult";

export default function IndexPage() {
  return (
    <Switch>
      <Route path='/apply' component={ApplyPage} />
      <Route path="/" component={SearchResult} />
    </Switch>
  );
}



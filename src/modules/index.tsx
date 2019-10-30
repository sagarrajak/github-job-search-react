import { Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import React from "react";
import { connect } from "react-redux";
import { Route, RouteComponentProps, Router, Switch } from "react-router-dom";
import SearchResult from "./search-results/search-result";
import Search from "./search/search";

interface IOwnProps extends RouteComponentProps<{ key: string }> {
}

// tslint:disable-next-line: no-empty-interface
interface IStateProps {
}

// tslint:disable-next-line: no-empty-interface
interface IDiaptchProps {
}

type IProps = IOwnProps & IStateProps & IDiaptchProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

  }),
);

function IndexPage(props: IProps) {
  const classes = useStyles();
  return (
    <Router {...props}>
      <Switch>
        <Route path="/result"><SearchResult {...props} /></Route>
        <Route path="/"><Search {...props} /></Route>
      </Switch>
    </Router>
  );
}

/**
 * @param state replace type any with your root state interface
 */
const mapStateToProps = (state: any): IStateProps => ({

});

const mapDispatchToProps = (dispatch: any): IDiaptchProps => {
  return {

  };
};

export default connect<IStateProps, IDiaptchProps, IOwnProps, {}>(mapStateToProps, mapDispatchToProps)(IndexPage);

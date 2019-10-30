import { Box, Theme, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

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

function SearchResult(props: IProps) {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h4">Search Result is working</Typography>
    </Box>
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

export default connect<IStateProps, IDiaptchProps, IOwnProps, {}>(mapStateToProps, mapDispatchToProps)(SearchResult);
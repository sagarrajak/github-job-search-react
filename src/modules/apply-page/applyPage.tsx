import { Box, Fab } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Undo from '@material-ui/icons/Undo';
import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import ApplyPageForm from './applyPageForm';

interface IOwnProps extends RouteComponentProps { }

interface IStateProps { }

interface IDiaptchProps { }

type IProps = IOwnProps & IStateProps & IDiaptchProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

  }),
);

const onFormSubmit = (values: any) => {
  return ((time: number) =>
    new Promise<any>((resolve) => setTimeout(() => resolve(), time)))(1500)
    .then(() => {
      alert(JSON.stringify(values));
    });
}

function ApplyPage(props: IProps) {
  const classes = useStyles();
  return (
    <Box flex flexDirection="column" justifyContent="space-arround" p={2}>
      <Fab
        variant="extended"
        size="small"
        onClick={() => props.history.goBack() }
        color="primary"
        aria-label="add">
        <Undo />
        Back
      </Fab>
      <ApplyPageForm onSubmit={onFormSubmit} />
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

export default connect<IStateProps, IDiaptchProps, IOwnProps, any>(mapStateToProps, mapDispatchToProps)(ApplyPage);

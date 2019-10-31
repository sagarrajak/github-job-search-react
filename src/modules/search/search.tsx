import { Box, Button, TextField, Theme, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
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
    textFieldContainer: {
      width: "40%",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    textField: {
      width: "100%",
    },
    searchButton: {
      width: "5%",
      height: theme.spacing(6),
    },
    searchText: {
      width: "10%",
    },
  }),
);

function Search(props: IProps) {
  const classes = useStyles();
  return (
    <Box display="flex" width="100" justifyContent="space-around" alignItems="center" boxShadow={2} m={3} p={3}>
      <Typography variant="h4" component="h3">Github Jobs</Typography>
      <Box className={classes.textFieldContainer} >
        <Typography variant="body1">What</Typography>
        <TextField
          className={classes.textField}
          id="search"
          label="Keyword"
          margin="normal"
        />
      </Box>
      <Box className={classes.textFieldContainer}>
        <Typography variant="body1">Where</Typography>
        <TextField
          className={classes.textField}
          id="location"
          label="Location"
          margin="normal"
        />
      </Box>
      <Button className={classes.searchButton} variant="contained" color="primary">Search</Button>
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

export default connect<IStateProps, IDiaptchProps, IOwnProps, {}>(mapStateToProps, mapDispatchToProps)(Search);

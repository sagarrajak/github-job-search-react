import { Box, Button, CircularProgress, TextField, Theme, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import queryString from 'query-string';
import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { IRootState } from "../types";
import { ISearchState, jobFetchedFinishedError, jobFetchedFinishedSuccess, jobfetchStarted, setKeyword } from "./searchSlice";
import { setSelectedCard } from '../search-results/job-card/jobCardSlice';

interface IOwnProps extends RouteComponentProps<{ key: string }> {}
type IStateProps = ISearchState;

interface IDiaptchProps {
  error: (error: any) => void;
  success: (data: any) => void;
  started: () => void;
  setKeyword: (keyword: string) => void;
  setSelectedJobToNull: () => void; // reset selected job when user search 
}

type IProps = IOwnProps & IStateProps & IDiaptchProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textFieldContainer: {
      width: "40%",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        width: "100%",
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
      }
    },
    textField: {
      width: "100%",
    },
    searchButton: {
      width: "5%",
      height: theme.spacing(6),
      [theme.breakpoints.down('sm')]: {
        width: "100%",
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
      }
    },
    searchText: {
      width: "10%",
    },
    mainContainer: {
      display: "flex",
      justifyContent: "space-arround",
      alignItems: "center",
      flexDirection: "row",
      [theme.breakpoints.down('sm')]: {
        flexDirection: "column",
      }
    },
  }),
);

function Search(props: IProps) {
  const classes = useStyles();
  const  [location, setLocation] = useState<string>('new york');

  const fetchJobs = useCallback(async () => {
    props.started();
    props.setSelectedJobToNull();
    const queryBody: {[key: string]: string} = {
        ['description']: props.keyword,
        ['location']: location,
    };
    const url = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';
    try {
      const query = queryString.stringify(queryBody);
      const response =
      await fetch(`${url}?${query}`);
      const json = await response.json();
      props.success(json);
    } catch (err) {
      props.error(JSON.stringify(err));
    }
  }, [props.keyword, location]);

  return (
      <Box className={classes.mainContainer} boxShadow={2} p={3}>
        <Typography variant="body2">Github Jobs</Typography>
        <Box className={classes.textFieldContainer} >
          <Typography variant="body1">What</Typography>
          <TextField
            className={classes.textField}
            id="search"
            label="Keyword / Title / Comapany"
            margin="normal"
            value={props.keyword}
            onChange={(event) => props.setKeyword(event.target.value)}
          />
        </Box>
        <Box className={classes.textFieldContainer}>
          <Typography variant="body1">Where</Typography>
          <TextField
            className={classes.textField}
            id="location"
            label="Location"
            margin="normal"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </Box>
        <Button 
          className={classes.searchButton} 
          disabled={props.isApiCallInProgress} 
          variant="contained" 
          color="primary" 
          onClick={fetchJobs} >
            Search
          </Button>
        { props.isApiCallInProgress ? <CircularProgress /> : null }
      </Box>
    );
}

/**
 * @param state replace type any with your root state interface
 */
const mapStateToProps = (state: IRootState): IStateProps => ({
  ...state.search,
});

const mapDispatchToProps = (dispatch: any): IDiaptchProps => {
  return {
    error: (error: any) => dispatch(jobFetchedFinishedError(error)),
    success: (data: any) => dispatch(jobFetchedFinishedSuccess(data)),
    started: () => dispatch(jobfetchStarted()),
    setKeyword: (keyword: string) => dispatch(setKeyword(keyword)),
    setSelectedJobToNull: () => dispatch(setSelectedCard(null)),
  };
};

export default connect<IStateProps, IDiaptchProps, IOwnProps, any>(mapStateToProps, mapDispatchToProps)(Search);

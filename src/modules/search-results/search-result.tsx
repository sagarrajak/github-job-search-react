import { Box, Grid, Hidden, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import Search from "../search/search";
import { ISearchState } from "../search/searchSlice";
import { IRootState } from "../types";
import JobCard from "./job-card/job-card";
import { IJobDescription } from "./job-card/types";

interface IOwnProps extends RouteComponentProps<{ key: string }> {}

type IStateProps = ISearchState;
type IProps = IOwnProps & IStateProps;

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

function SearchResult(props: IProps) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container>
          <Grid item md={12}>
            <Search {...props} />
          </Grid>
          <Grid item md={6} sm={12}>
            <Box width="95%" display='flex' flexDirection='column'>
              <Box p={2} >
                <Typography variant="h4"> Jobs on yes bank </Typography>
              </Box>
              <Box display="flex" flexDirection="column" p={2}>
                  {/* { <JobCard /> } */}
                  {
                    props.fetchedJobs.map((job: IJobDescription) => (
                      <JobCard  key={job.id} {...job}/>
                    ))
                  }
              </Box>
            </Box>
          </Grid>
          <Hidden mdDown>
            <Grid md={6}>
                <Box>This is result</Box>
            </Grid>
          </Hidden>
      </Grid>
    </React.Fragment>
  );
}

/**
 * @param state replace type any with your root state interface
 */
const mapStateToProps = (state: IRootState): IStateProps => ({
    ...state.search,
});

export default connect<IStateProps, any, IOwnProps, any>(mapStateToProps, null)(SearchResult);

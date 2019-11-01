import { Box, Grid, Hidden, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import Search from "../search/search";
import { ISearchState } from "../search/searchSlice";
import { IRootState } from "../types";
import JobCard from "./job-card/jobCard";
import { IJobDescription } from "./job-card/types";
import JobDetailed from './job-detailed/job-detailed';

interface IOwnProps extends RouteComponentProps<{ key: string }> { }

type IStateProps = ISearchState & {
  selectedId: string;
};
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
  const [selectedJob, setSelectedJob] = useState<IJobDescription | null>(null);

  useEffect(() => {
    if (props.selectedId) {
      const index = props.fetchedJobs.findIndex(job => job.id === props.selectedId);
      if (index >= 0) {
        setSelectedJob(props.fetchedJobs[index]);
        console.log(props.fetchedJobs, index);
      }
    } else {
      setSelectedJob(null); // reset selected job when null is set(when user press search) 
    }
  }, [props.selectedId]);

  return (
    <React.Fragment>
      <Grid container>
        <Grid item md={12}>
          <Search {...props} />
        </Grid>
        <Grid item md={6} sm={12}>
          <Box width="95%" display='flex' flexDirection='column'>
            <Box p={2} >
              <Typography variant="h4"> {props.keyword ? `Jobs on ${props.keyword}`
                : 'No Search Yet'} </Typography>
            </Box>
            <Box display="flex" flexDirection="column" p={2}>
              {
                props.fetchedJobs.map((job: IJobDescription) => (
                  <JobCard key={job.id} {...job} />
                ))
              }
            </Box>
          </Box>
        </Grid>
        <Hidden mdDown>
          <Grid md={6}>
            {selectedJob ? <JobDetailed {...selectedJob} /> : null}
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
  keyword: state.search.keyword,
  selectedId: state.jobCard.selectedId,
});

export default connect<IStateProps, any, IOwnProps, any>(mapStateToProps, null)(SearchResult);

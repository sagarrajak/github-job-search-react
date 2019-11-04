import { Grid, Hidden, withWidth } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import ApplyPage from "./apply-page/applyPage";
import { IJobDescription } from "./search-results/job-card/types";
import JobDetailed from "./search-results/job-detailed/jobDetailed";
import SearchResult from "./search-results/searchResult";
import { ISearchState } from "./search/searchSlice";
import { IRootState } from "./types";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";


interface IOwnProps {
  width: Breakpoint,
}
type IStateProps = ISearchState & {
  selectedId: string;
};
type IProps = IOwnProps & IStateProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    selectedJobContainer: {
      width: "95%",
    },
  }),
);

function IndexPage(props: IProps) {
  const classes = useStyles();
  const [selectedJob, setSelectedJob] = useState<IJobDescription | null>(null);
  const { width } = props;

  useEffect(() => {
    if (props.selectedId) {
      const index = props.fetchedJobs.findIndex(job => job.id === props.selectedId);
      if (index >= 0) {
        setSelectedJob(props.fetchedJobs[index]);
      }
    } else {
      setSelectedJob(null); // reset selected job when null is set(when user press search) 
    }
  }, [props.selectedId, props.fetchedJobs]);

  const isSmallScreen = /xs|sm/.test(width);

  return (
    <div>
      {
        isSmallScreen ? <Route path='/view-job' exact render={(routerProps) => {
        return (<Grid md={6} className={classes.selectedJobContainer}>
            {selectedJob ? <JobDetailed job={selectedJob} {...routerProps} /> : null}
          </Grid>);
      }}  /> : null }
      <Route path='/apply' exact component={ApplyPage} />
      {
        isSmallScreen ? 
          <Route path="/" exact component={SearchResult} /> :
            <Route path="/" component={SearchResult} />
      }
    </div>
  );
}

const mapStateToProps = (state: IRootState): IStateProps => ({
  ...state.search,
  keyword: state.search.keyword,
  selectedId: state.jobCard.selectedId,
});

export default withWidth()(connect<IStateProps, any, IOwnProps, any>(mapStateToProps)(IndexPage));
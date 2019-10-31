import { Box, Grid, Hidden, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import Search from "../search/search";
import JobCard from "./job-card/job-card";

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
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
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
const mapStateToProps = (state: any): IStateProps => ({

});

const mapDispatchToProps = (dispatch: any): IDiaptchProps => {
  return {

  };
};


export default connect<IStateProps, IDiaptchProps, IOwnProps, {}>(mapStateToProps, mapDispatchToProps)(SearchResult);

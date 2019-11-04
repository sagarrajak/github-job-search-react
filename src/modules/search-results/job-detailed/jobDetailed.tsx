import { Box, Button, Theme, Typography, Hidden, Fab } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { IJobCardState, setSelectedCard } from "../job-card/jobCardSlice";
import { IJobDescription } from "../job-card/types";
import { setAppliedJob } from "./jobDetailedSlice";
import Undo from '@material-ui/icons/Undo';

type IOwnProps = {
  job: IJobDescription,
} & RouteComponentProps;
type IStateProps = IJobCardState;
interface IDiaptchProps {
  setApplication: (job: IJobDescription) => void,
  resetSelectedJob: () => void,
}

type IProps = IOwnProps & IStateProps & IDiaptchProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerJobTitleText: {
      fontSize: "1.55em",
      fontWeight: 800,
    },
    subHeaderLocationText: {
      fontSize: "1em",
    },
    subHeaderCompany: {
      fontSize: "1.125em",
    },
    boxContainerActive: {
      backgroundColor: '#ccc6c6',
    },
  }),
);

function JobDeailed(props: IProps) {
  const classes = useStyles();
  
  const applyForJob = () => {
    props.setApplication(props.job);
    props.history.push('/apply');
  };

  return (
    <Box pb={2}>
      <Hidden mdUp>
        <Fab
          variant="extended"
          size="small"
          onClick={() => {
            props.resetSelectedJob();
            props.history.replace('/job-list')
          }}
          color="primary"
          aria-label="add"
        >  
        <Undo />
        Back
      </Fab>
      </Hidden>
      <Box
        className={classes.boxContainerActive}
        width="95%"
        boxShadow={2} p={2} mt={10.75}
        component={"div"}
      >
      <Typography className={classes.headerJobTitleText}>{props.job.title}</Typography>
      <Typography className={classes.subHeaderCompany}>{props.job.title}</Typography>
      <Typography className={classes.subHeaderLocationText}>{props.job.location}</Typography>
      <Box dangerouslySetInnerHTML={{__html: props.job.description }}></Box>
      <Button variant="contained" color="primary" onClick={applyForJob} >Apply</Button>
     </Box>
    </Box>
  );
}

const mapDispathToProps = (dispatch: any): IDiaptchProps => {
  return {
    setApplication:(job: IJobDescription) => dispatch(setAppliedJob(job)), 
    resetSelectedJob: () => dispatch(setSelectedCard(null)),
  }
};

const mapStateToProps = (state: any): IStateProps => ({
  ...state.jobCard,
});

export default connect<IStateProps, IDiaptchProps, IOwnProps, any>(mapStateToProps, mapDispathToProps)(JobDeailed);

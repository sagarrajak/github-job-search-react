import { Box, Fab, Typography } from "@material-ui/core";
import Undo from '@material-ui/icons/Undo';
import React, { useState } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { IAppliedJobState } from "../search-results/job-detailed/jobDetailedSlice";
import { IRootState } from "../types";
import ApplyPageForm from './applyPageForm';
import SuccessDialog from "./successDialog";
import { IApplyForm } from "./types";
import { IJobDescription } from "../search-results/job-card/types";

type IOwnProps = RouteComponentProps;
type IStateProps = IAppliedJobState;
type IProps = IOwnProps & IStateProps;

function ApplyPage(props: IProps) {
  const [formSuccess, setFormSuccess] = useState<IApplyForm | null>(null);

  const onFormSubmit = (values: any) => {
    return ((time: number) =>
      new Promise<any>((resolve) => setTimeout(() => resolve(), time)))(1500).then(() => {
        setFormSuccess(values as IApplyForm);
      });
  };

  if (props.job === null)
    props.history.push('/');

  const isJobSet = (job: IJobDescription) => {
    return (<Box pl={3} mt={3} mb={3}>
      <Typography variant="h5">{job.title}</Typography>
      <Typography variant="body1">{job.company}</Typography>
      <Typography variant="body1">{job.location}</Typography>
    </Box>);
  };

  return (
    <Box flex flexDirection="column" justifyContent="space-arround" p={2}>
      <Fab
        variant="extended"
        size="small"
        onClick={() => props.history.goBack()}
        color="primary"
        aria-label="add">
        <Undo />
        Back
      </Fab>
      {props.job ? isJobSet(props.job) : ''}
      <ApplyPageForm onSubmit={onFormSubmit} />
      <SuccessDialog {...{
        open: !!formSuccess,
        formValue: formSuccess,
        onClose: () => setFormSuccess(null),
      }} />
    </Box>
  );
};

const mapStateToProps = (state: IRootState): IStateProps => ({
  ...state.appliedJob,
});

export default connect<IStateProps, any, IOwnProps, any>(mapStateToProps)(ApplyPage);

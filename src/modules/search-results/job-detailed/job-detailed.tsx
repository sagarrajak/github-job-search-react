import { Box, Theme, Typography, Button } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import React from "react";
import { connect } from "react-redux";
import { IJobCardState } from "../job-card/jobCardSlice";
import { IJobDescription } from "../job-card/types";

type IOwnProps = IJobDescription;
type IStateProps = IJobCardState; 
interface IDiaptchProps {}

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
  return (
  <Box 
      className={classes.boxContainerActive}
      width="100%"
      boxShadow={2} p={2} 
      component={"div"}
    >
    <Typography className={classes.headerJobTitleText}>{props.title}</Typography>
    <Typography className={classes.subHeaderCompany}>{props.title}</Typography>
    <Typography className={classes.subHeaderLocationText}>{props.location}</Typography>
    <Box dangerouslySetInnerHTML={{__html: props.description }}></Box> 
    <Button variant="contained" color="primary" >Apply</Button>
  </Box>
  );
}

/**
 * @param state replace type any with your root state interface
 */
const mapStateToProps = (state: any): IStateProps => ({
  ...state.jobCard,
});


export default connect<IStateProps, IDiaptchProps, IOwnProps, any>(mapStateToProps)(JobDeailed);

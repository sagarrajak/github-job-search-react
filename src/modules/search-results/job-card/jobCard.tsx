import { Box, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { IRootState } from '../../types';
import { IJobCardState, setSelectedCard } from './jobCardSlice';
import { IJobDescription } from './types';
import { connect } from 'react-redux';

const useStyle = makeStyles((theme: Theme) => createStyles({
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
}));

type IOwnProps = IJobDescription;
type IStateProps = IJobCardState; 

interface IDiaptchProps {
  onSelectJob: (id: string) => void,
}

type IProps = IOwnProps & IStateProps & IDiaptchProps; 

function JobCard(props: IProps) {
  const classes = useStyle();
  return (
      <Box 
         className={classes.boxContainerActive}
          width="100%"
          boxShadow={2} p={2} 
          component={"div"} 
          onClick={() => props.onSelectJob(props.id)}
        >
        <Typography className={classes.headerJobTitleText}>{props.title}</Typography>
        <Typography className={classes.subHeaderCompany}>{props.title}</Typography>
        <Typography className={classes.subHeaderLocationText}>{props.location}</Typography>
        {/* <Box dangerouslySetInnerHTML={{__html: parseHTML(props.description) }}></Box> */}
     </Box>
  );
}

const mapStateToProps = (state: IRootState): IStateProps => ({
 ...state.jobCard,
});

const mapDispatchToProps = (dispatch: any): IDiaptchProps => {
  return {
    onSelectJob: (id) => dispatch(setSelectedCard(id)),
  };
};

export default connect<IStateProps, IDiaptchProps, IOwnProps, any>(mapStateToProps, mapDispatchToProps)(JobCard);
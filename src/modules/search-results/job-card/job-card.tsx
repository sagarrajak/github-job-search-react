import { Box, Paper, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

const useStyle = makeStyles((theme: Theme) => createStyles({
  headerText: {
    fontSize: "1.55em",
    fontWeight: 800,
  },
  subHeaderText: {
    fontSize: "1.125em",
  }
}));

export default function JobCard() {
  const classes = useStyle();
  return (
    <Box width="100%" boxShadow={1} p={2}>
        <Typography className={classes.headerText}>Some Sale Manager</Typography>
        <Typography className={classes.subHeaderText}>Mumbai, Maharashtra</Typography>
        <Typography variant="body2">{"Adheres to sales process \
          KYC Norms of the bank \
          Builds and manages credible & lifelong \
          ustomer relationship at appropriate \
          levels through reliable service…"}</Typography>
    </Box>
  )
}

import { Box, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { IJobDescription } from './types';

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
}));

export default function JobCard(props: IJobDescription) {
  const classes = useStyle();
  return (
    <Box width="100%" boxShadow={1} p={2}>
        <Typography className={classes.headerJobTitleText}>{props.title}</Typography>
        <Typography className={classes.subHeaderCompany}>{props.title}</Typography>
        <Typography className={classes.subHeaderLocationText}>{props.location}</Typography>
        {/* <Box dangerouslySetInnerHTML={{__html: parseHTML(props.description) }}></Box> */}
    </Box>
  );
}

const parseHTML = (html: string) => {
   if ( !html ) { return ''; }
   const dom = new DOMParser().parseFromString(html, "text/xml");
   console.log(dom);
   return html;
};

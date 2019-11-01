import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { IDialogProps } from './types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    boxContainer: {
      minWidth: "500px",
    },
  }),
);

export default function SuccessDialog(props: IDialogProps) {
  const classes = useStyles();
  const { onClose, open, formValue } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} className={classes.boxContainer}>
      <DialogTitle id="simple-dialog-title">Applied for job successfully</DialogTitle>
      <DialogContent>
        <Typography variant='h5'>You applied successfully for job</Typography>
        {
          formValue !== null ? (
            <Box p={2}>
              <Box display='flex' justifyContent='space-between'>
                <Typography variant="body1">Name</Typography>
                <Typography variant="body2">{formValue.name}</Typography>
              </Box>
              <Box display='flex' justifyContent='space-between'>
                <Typography variant="body1">Cover Letter</Typography>
                <Typography variant="body2">{formValue.email}</Typography>
              </Box>
              <Box display='flex' justifyContent='space-between'>
                <Typography variant="body1">Cover Letter</Typography>
                <Typography variant="body2">{formValue.cover_letter}</Typography>
              </Box>
            </Box>
          ) : null
        }
      </DialogContent>
      <DialogActions>
         <Button variant='contained' color='primary' onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

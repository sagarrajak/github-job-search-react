import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import React from 'react';
import { IDialogProps } from './types';


export default function SuccessDialog(props: IDialogProps) {

  const { onClose, open, formValue } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" 
        open={open} maxWidth={"sm"} fullWidth={true}>
      <DialogTitle id="simple-dialog-title">Application successful</DialogTitle>
      <DialogContent>
        {
          formValue !== null ? (
            <Box p={2}>
              <Box display='flex' justifyContent='space-between'>
                <Typography variant="body1">Name</Typography>
                <Typography variant="body2">{formValue.name}</Typography>
              </Box>
              <Box display='flex' justifyContent='space-between'>
                <Typography variant="body1">Email</Typography>
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

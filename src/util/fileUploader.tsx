import { Button } from "@material-ui/core";
import React from 'react';
import { WrappedFieldProps } from "redux-form";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

interface IOwnProps {
	label: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      width: theme.spacing(20),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    } 
  }),
);


export function FileInputField(props: WrappedFieldProps & IOwnProps) {
  const classes = useStyles();
  const onChange = (event: any) => {
      props.input.onChange(event.target.value[0]);
  };

	return (
    <React.Fragment>
        <Button variant="contained" className={classes.button}>
          <input
            accept="application/pdf,  application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            style={{ display: 'none' }}
            id="raised-button-file"
            onChange={onChange}
            type="file"
          />
          {props.label}
        </Button>
    </React.Fragment>
  )
}

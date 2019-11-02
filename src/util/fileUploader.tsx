import { Button } from "@material-ui/core";
import React, { useRef, MutableRefObject } from 'react';
import { WrappedFieldProps } from "redux-form";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { createRef } from "react";
import { useState } from "react";

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
  const fileInput: any = useRef(null);
  const [fileName, setFileName] = useState('');

  const onChange = (event: any) => {
    if(fileInput.current.files) {
      convertBase64(); 
      setFileName(fileInput.current.files[0].name);
    }
  };

  const convertBase64 = () => {
    if(!fileInput.current.files[0]) return;
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.current.files[0]);
    reader.onload = () => props.input.onChange(reader.result);
  };

	return (
    <React.Fragment>
      <input
        accept="application/pdf,  application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        id="raised-button-file"
        onChange={onChange}
        style={{ display: 'none' }}
        type="file"
        ref={fileInput}
      />
      <Button variant='contained' className={classes.button} onClick={() => {
        if (fileInput) {
          fileInput.current.click();
        }
      }}>{props.label}</Button>
      <label>{fileName}</label>
    </React.Fragment>
  );
}

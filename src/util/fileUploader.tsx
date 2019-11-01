import { Button } from "@material-ui/core";
import React from 'react';
import { WrappedFieldProps } from "redux-form";


interface IOwnProps {
	label: string;
}

export function FileInputField(props: WrappedFieldProps & IOwnProps) {

  const onChange = (event: any) => {
      props.input.onChange(event.target.value[0]);
  }

	return (
    <React.Fragment>
        <Button variant="contained">
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

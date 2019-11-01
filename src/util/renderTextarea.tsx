import { TextField } from "@material-ui/core";
import React from 'react';
import { WrappedFieldProps } from "redux-form";


interface IOwnProps {
	id: string;
	type: 'text'|'number'|'date'|'password';
	label: string;
}

export function TextareaField(props: WrappedFieldProps & IOwnProps) {
	return <TextField
	  {...props.input}
		id={props.id}
		type={props.type}
    label={props.label}
    multiline
		margin="normal"
		error={props.meta.touched && props.meta.invalid}
		helperText={props.meta.touched && props.meta.error ? props.meta.error : '' }
	/>
}

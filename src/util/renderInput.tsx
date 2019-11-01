import { WrappedFieldProps } from "redux-form";

import { TextField } from "@material-ui/core";
import React from 'react';

interface IOwnProps {
	id: string;
	type: 'text'|'number'|'date'|'password';
	label: string;
}

export function InputField(props: WrappedFieldProps & IOwnProps) {
	return <TextField
	  {...props.input}
		id={props.id}
		type={props.type}
		label={props.label}
		margin="normal"
		error={props.meta.touched && props.meta.invalid}
		helperText={props.meta.touched && props.meta.error ? props.meta.error : '' }
	/>
}

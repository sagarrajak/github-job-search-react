import { Button, CircularProgress, Paper, Theme, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { FileInputField } from "../../util/fileUploader";
import { InputField } from "../../util/renderInput";
import { TextareaField } from "../../util/renderTextarea";
import { isEmail, isRequired } from "../../util/validation";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

  }),
);

function ApplyPageForm(props: InjectedFormProps) {
  const classes = useStyles();
  return (
    <form>
        <Paper>
            <Typography  variant='h4'>Application Form</Typography>
            <Field  
              name="name"
              component={InputField}
              label="Name"
              type="text"
              validate={isRequired}
            />
            <Field 
              name='email'
              component={InputField}
              label="Email"
              type="text"
              validate={[isRequired, isEmail]}
            />
            <Field 
              name='cover_letter'
              component={TextareaField}
              label="Cover letter notes"
              type="text"
              validate={isRequired}
            />
            <Field 
              name="resume"
              component={FileInputField}
              label="Upload resume"
            />
            <Button variant="contained" onClick={props.handleSubmit} disabled={props.invalid || props.submitting}>Submit</Button>
            {props.submitting ? <CircularProgress /> : ''}
        </Paper>
    </form>
  );
}

export default reduxForm({
  form: 'applyForm',
})(ApplyPageForm);

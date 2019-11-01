import { Button, CircularProgress, Paper, Typography, Box } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { FileInputField } from "../../util/fileUploader";
import { InputField } from "../../util/renderInput";
import { TextareaField } from "../../util/renderTextarea";
import { isEmail, isRequired } from "../../util/validation";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formField: {
      width: "100%",
    },
    paperContainer: {
      padding: "2%",
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
    },
    submitButton: {
      width: theme.spacing(20),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    }
  }),
);

function ApplyPageForm(props: InjectedFormProps) {
  const classes = useStyles();
  return (
    <form>
        <Box p={4}>
            <Paper className={classes.paperContainer}>
              <Typography  variant='h5'>Application Form</Typography>
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
              <Button variant="contained"  className={classes.submitButton} onClick={props.handleSubmit} disabled={props.invalid || props.submitting} >Submit</Button>
              {props.submitting ? <CircularProgress /> : ''}
            </Paper>
        </Box>
    </form>
  );
}

export default reduxForm({
  form: 'applyForm',
})(ApplyPageForm);

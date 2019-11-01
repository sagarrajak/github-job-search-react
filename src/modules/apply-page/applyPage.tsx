import { Box, Fab } from "@material-ui/core";
import Undo from '@material-ui/icons/Undo';
import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import ApplyPageForm from './applyPageForm';
import SuccessDialog from "./successDialog";
import { IApplyForm } from "./types";

function ApplyPage(props: RouteComponentProps) {

  const [formSuccess, setFormSuccess] = useState<IApplyForm | null>(null);

  const onFormSubmit = (values: any) => {
    return ((time: number) =>
      new Promise<any>((resolve) => setTimeout(() => resolve(), time)))(1500).then(() => {
        setFormSuccess(values as IApplyForm);
      });
  };

  return (
    <Box flex flexDirection="column" justifyContent="space-arround" p={2}>
      <Fab
        variant="extended"
        size="small"
        onClick={() => props.history.goBack()}
        color="primary"
        aria-label="add">
        <Undo />
        Back
      </Fab>
      <ApplyPageForm onSubmit={onFormSubmit} />
      <SuccessDialog {...{
        open: !!formSuccess,
        formValue: formSuccess,
        onClose: () => setFormSuccess(null),
      }} />
    </Box>
  );
}

export default ApplyPage;

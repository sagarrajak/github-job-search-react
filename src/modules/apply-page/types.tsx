export interface IApplyForm {
  name: string;
  email: string;
  cover_letter: string;
}

export interface IDialogProps {
  open: boolean;
  formValue: IApplyForm|null;
  onClose: () => void;
}

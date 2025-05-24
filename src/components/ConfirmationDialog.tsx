import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import { PrimaryButton, SecondaryButton } from './buttons';

interface ConfirmationDialogProps {
  buttonText: string;
  confirmationText: string;
  onAccept: () => void;
  onDecline: () => void;
  buttonVariant?: 'text' | 'outlined' | 'contained';
  buttonColor?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  buttonText,
  confirmationText,
  onAccept,
  onDecline,
  buttonVariant = 'contained',
  buttonColor = 'primary',
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAccept = () => {
    onAccept();
    handleClose();
  };

  const handleDecline = () => {
    onDecline();
    handleClose();
  };

  return (
    <>
      <Button
        variant={buttonVariant}
        color={buttonColor}
        onClick={handleClickOpen}
      >
        {buttonText}
      </Button>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="confirmation-dialog-title"
        aria-describedby="confirmation-dialog-description"
      >
        <DialogTitle id="confirmation-dialog-title">
          Bestätigung
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="confirmation-dialog-description">
            {confirmationText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <SecondaryButton onClick={handleDecline} color="inherit">
            Nein
          </SecondaryButton>
          <PrimaryButton onClick={handleAccept} color="primary" variant="contained" autoFocus>
            Ja
          </PrimaryButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ConfirmationDialog;

import React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';

interface ConfirmationDialogProps {
    open: boolean;
    handleClose: () => void;
}

const SuccessScreen: React.FC<ConfirmationDialogProps> = ({
    open,
    handleClose,
}) => {

  return (
    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="confirmation-dialog-title"
    aria-describedby="confirmation-dialog-description"
    >
    <DialogTitle id="confirmation-dialog-title">
        Glückwunsch!!
    </DialogTitle>
    <DialogContent>
        <DialogContentText id="confirmation-dialog-description">
            Du hast die Aufgabe gelöst.
        </DialogContentText>
    </DialogContent>
    <DialogActions>
        <Button onClick={handleClose} color="primary" variant="contained" autoFocus>
        Weiter
        </Button>
    </DialogActions>
    </Dialog>
  );
};

export default SuccessScreen;

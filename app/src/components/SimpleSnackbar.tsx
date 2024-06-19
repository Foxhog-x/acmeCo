import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import { Dispatch, SetStateAction } from "react";

import CloseIcon from "@mui/icons-material/Close";
interface OpenState {
  bool: boolean;
  message: string;
}

interface IProps {
  open: OpenState;
  setOpen: React.Dispatch<React.SetStateAction<OpenState>>;
}
export default function SimpleSnackbar({ open, setOpen }: IProps) {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={open.bool}
        autoHideDuration={2000}
        onClose={handleClose}
        message="successfully submitted"
        color="green"
        action={action}
      />
    </div>
  );
}

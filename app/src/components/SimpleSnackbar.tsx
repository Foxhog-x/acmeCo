import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import { Dispatch, SetStateAction } from "react";
import CloseIcon from "@mui/icons-material/Close";
type Iprops = {
  bool: boolean | object;

  setOpen: Dispatch<SetStateAction<boolean>>;
};
export default function SimpleSnackbar({ open, setOpen }: Iprops) {
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

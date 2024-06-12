import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import React from 'react';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SuccessMsg() {

  return (
      <Alert  severity="success">
        You have Registered successfully
      </Alert>
    );
}
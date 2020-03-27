import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <Grid container direction="column">
        <TextField
          required
          id="outlined-required"
          label="Full Name"
          defaultValue="Hello World"
          variant="outlined"
        />
        
        <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue="Hello World"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Your message"
          defaultValue="Hello World"
          variant="outlined"
        />
        </Grid>
      </div>
    </form>
  );
}
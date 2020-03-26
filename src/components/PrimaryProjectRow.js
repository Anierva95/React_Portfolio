import React from 'react';
import { Grid } from '@material-ui/core';
import MediaCard from './card';

export default function PrimaryProjectRow() {
    return(      
    <Grid container direction="row">
    <Grid item xs={2}></Grid>
      <Grid item={true} xs={8}>
      <MediaCard/>
      <MediaCard/>
      <MediaCard/>
      </Grid>
    <Grid item xs={2}></Grid>
  </Grid>)
}
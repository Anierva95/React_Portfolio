import React from 'react';
import { Grid } from '@material-ui/core';
import MediaCard from './card'


export default function SecondaryProjectRow() {
    return(    
    <Grid container direction="row">
    <Grid item xs={2}></Grid>
      <Grid item={true} xs={3}>
        <MediaCard/>
        <MediaCard/>
        <MediaCard/>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item={true} xs={3}>
        <MediaCard/>
        <MediaCard/>
        <MediaCard/>
        </Grid>
    <Grid item xs={2}></Grid>
    </Grid>
  )
}
import React from 'react';
import { Grid } from '@material-ui/core';
import MediaCard from './card'


export default function SecondaryProjectRow() {

  const BoxSeperate = {
    "marginRight": "30px"
  }

    return(  
      <div>
    <Grid container direction="row">
    <Grid item xs={3}></Grid>
      <Grid item={true} xs={3}>
        <MediaCard/>
        </Grid>
        <Grid item xs={3}>
        <MediaCard/>
        </Grid>
      </Grid>

      <Grid container direction="row">
    <Grid item xs={3}></Grid>
      <Grid item={true} xs={3}>
        <MediaCard/>
        </Grid>
        <Grid item xs={3}>
        <MediaCard/>
        </Grid>
      </Grid>

      
      
    <Grid item xs={2}></Grid>

    <Grid container direction="row">
    <Grid item xs={3}></Grid>
      <Grid item={true} xs={3}>
        <MediaCard/>
        </Grid>
        <Grid item xs={3}>
        <MediaCard/>
        </Grid>
      </Grid>      
    <Grid item xs={2}></Grid>


    </div>  
   
  )
}
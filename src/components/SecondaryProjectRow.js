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
    <Grid item xs={2}></Grid>
      <Grid item={true} xs={3}>
        <div style={BoxSeperate}>
        <MediaCard/>
        </div>
        </Grid>
        <Grid item xs={3}>
          <div style={BoxSeperate}>
        <MediaCard/>
        </div>
        </Grid>
        <Grid item xs={3}>
          <div style={BoxSeperate}>
        <MediaCard/>
        </div>
        </Grid>
      </Grid>

      <Grid container direction="row">
    <Grid item xs={2}></Grid>
      <Grid item={true} xs={3}>
        <div style={BoxSeperate} >
        <MediaCard/>
        </div>
        </Grid>
        <Grid item xs={3}>
          <div style={BoxSeperate}>
        <MediaCard/>
        </div>
        </Grid>
        <Grid item xs={3}>
          <div style={BoxSeperate}>
        <MediaCard/>
        </div>
        </Grid>
      </Grid>
      
    <Grid item xs={2}></Grid>
    </div>  
   
  )
}
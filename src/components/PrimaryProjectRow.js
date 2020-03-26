import React from 'react';
import { Grid } from '@material-ui/core';
import MediaCard from './card';
import projects from '../PrimaryProjects.json';

export default function PrimaryProjectRow() {

    let projectcard = projects.map(project => {
        return(
            <MediaCard First_Name={project.First_Name}/> 
        )
    })

    return(      
    <Grid container direction="row">
    <Grid item xs={2}></Grid>
      <Grid item={true} xs={8}>
      {projectcard}
      </Grid>
    <Grid item xs={2}></Grid>
  </Grid>)
}
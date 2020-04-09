import React from 'react';
import { Grid } from '@material-ui/core';
import MediaCard from './card';
import projects from '../PrimaryProjects.json';

export default function PrimaryProjectRow() {

    let projectcard = projects.map(project => {
        return(
            <MediaCard
             Project_Name={project.Project_Name}
             Project_Technologies={project.Project_Technologies}
             Source_Link={project.Source_Link}
             /> 
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
import React from 'react';
import './App.css';
import PrimarySearchAppBar from './components/Navbar';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/theme';
import MediaCard from './components/card'
import { Grid } from '@material-ui/core';
import PrimaryProjectRow from './components/PrimaryProjectRow';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <PrimarySearchAppBar />
    <PrimaryProjectRow/>

    <Grid container direction="row">
    <Grid item xs={3}></Grid>
      <Grid item={true} xs={3}>
        <MediaCard/>
        <MediaCard/>
        <MediaCard/>
        </Grid>
        <Grid item={true} xs={3}>
        <MediaCard/>
        <MediaCard/>
        <MediaCard/>
        </Grid>
      <Grid item xs={3}></Grid>
      </Grid>
    </div>
    </ThemeProvider>
  );
}

export default App;

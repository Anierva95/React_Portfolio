import React from 'react';
import './App.css';
import PrimarySearchAppBar from './components/Navbar';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/theme';
import MediaCard from './components/card'
import { Grid } from '@material-ui/core'


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <PrimarySearchAppBar />

      <Grid container direction="row">

      <Grid item xs={2}></Grid>

        <Grid item={true} xs={8}>
        <MediaCard/>
        <MediaCard/>
        <MediaCard/>
        </Grid>

        <Grid item={true}>
        <MediaCard/>
        <MediaCard/>
        <MediaCard/>
        </Grid>

        <Grid item={true}>
        <MediaCard/>
        <MediaCard/>
        <MediaCard/>
        </Grid>

      <Grid item xs={2}></Grid>
      </Grid>
    </div>
    </ThemeProvider>
  );
}

export default App;

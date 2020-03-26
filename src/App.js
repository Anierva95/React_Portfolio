import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/theme';
import PrimarySearchAppBar from './components/Navbar';
import PrimaryProjectRow from './components/PrimaryProjectRow';
import SecondaryProjectRow from './components/SecondaryProjectRow';
import { Button, Typography } from '@material-ui/core'


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <PrimarySearchAppBar />
    <Typography color="inherit">
    <h1>Hello, my name is Anthony Nierva</h1>
    </Typography>
    <h2>I'm a Full-Stack Web Developer</h2>
    <Button style={{"marginBottom": "600px"}}>See my work</Button>
    <h1>My Project</h1>
    <PrimaryProjectRow/>
    <SecondaryProjectRow/>
    </div>
    </ThemeProvider>
  );
}

export default App;

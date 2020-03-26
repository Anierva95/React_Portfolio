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

    <section style={{"height": "100vh"}}>
  
    <PrimarySearchAppBar />
    <Typography color="inherit">
    <h1>Hello, my name is Anthony Nierva</h1>
    </Typography>
    <h2>I'm a Full-Stack Web Developer</h2>
    <a href="#projects" style={{"textDecoration" : "inherit"}} >
    <Button>See my work</Button>
    </a>
    </section>


    <section id="projects">
    <h1>My Projects</h1>
    <PrimaryProjectRow/>
    <SecondaryProjectRow/>
    </section>

    </div>
    </ThemeProvider>
  );
}

export default App;

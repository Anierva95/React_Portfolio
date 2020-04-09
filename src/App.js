import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/theme';
import darkTheme from './components/darktheme';
import PrimarySearchAppBar from './components/Navbar';
import PrimaryProjectRow from './components/PrimaryProjectRow';
import { Button, Typography } from '@material-ui/core';
import FormPropsTextFields from './components/form';
import { Grid } from '@material-ui/core';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">

    <section id="top" style={{"height": "100vh"}}>
    <PrimarySearchAppBar/>
    <div id="intro">
    <Typography style={{"marginTop": "200px"}}>
    <h1 style={{"color": "white"}}>Hey, My name is Anthony Nierva</h1>
    </Typography>
    <h2 style={{"color": "white"}}>I'm a Full-Stack Web Developer.</h2>
    <a href="#projects" style={{"textDecoration" : "inherit"}} >
    <Button variant="contained" color="primary" style={{"marginRight": "10px"}}>See my work</Button>
    </a>
    <a href="#contact" style={{"textDecoration" : "inherit"}} >
    <Button variant="contained" color="secondary">Wish to contact me?</Button>
    </a>
    </div>
    </section>

    <ThemeProvider theme={darkTheme}>
    <section id="projects" style={{"marginBottom": "200px"}}>
    <h1 id="myProjects">My Projects</h1>
    <PrimaryProjectRow/>
    </section>
    </ThemeProvider>


    <section id="contact" backgroundColor="secondary">
    <h1>I look forward to hearing from you!</h1>
    <FormPropsTextFields/>
    </section>


    </div>
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/theme';
import PrimarySearchAppBar from './components/Navbar';
import PrimaryProjectRow from './components/PrimaryProjectRow';
import SecondaryProjectRow from './components/SecondaryProjectRow';
import { Button, Typography } from '@material-ui/core';
import FormPropsTextFields from './components/form';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">

    <section id="top" style={{"height": "100vh"}}>
  
    <PrimarySearchAppBar/>
    <Typography color="inherit" style={{"marginTop": "200px"}}>
    <h1>Hey there! My name is Anthony Nierva</h1>
    </Typography>
    <h2>I'm a Full-Stack Web Developer.</h2>
    <a href="#projects" style={{"textDecoration" : "inherit"}} >
    <Button variant="contained" color="primary" style={{"marginRight": "10px"}}>See my work</Button>
    </a>
    <a href="#contact" style={{"textDecoration" : "inherit"}} >
    <Button variant="contained" color="secondary">Wish to contact me?</Button>
    </a>
    </section>


    <section id="projects" style={{"marginBottom": "200px"}}>
    <h1>My Projects</h1>
    <PrimaryProjectRow/>
    <SecondaryProjectRow/>
    </section>

    <section id="contact" backgroundColor="secondary">
    <FormPropsTextFields/>
    </section>


    </div>
    </ThemeProvider>
  );
}

export default App;

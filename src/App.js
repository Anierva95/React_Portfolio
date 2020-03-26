import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/theme';
import PrimarySearchAppBar from './components/Navbar';
import PrimaryProjectRow from './components/PrimaryProjectRow';
import SecondaryProjectRow from './components/SecondaryProjectRow';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <PrimarySearchAppBar />
    <PrimaryProjectRow/>
    <SecondaryProjectRow/>

    </div>
    </ThemeProvider>
  );
}

export default App;

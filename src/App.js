import React from 'react';
import './App.css';
import PrimarySearchAppBar from './components/Navbar';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/theme';
import MediaCard from './components/card'


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <PrimarySearchAppBar />
      <MediaCard/>
      <MediaCard/>
      <MediaCard/>
    </div>
    </ThemeProvider>
  );
}

export default App;

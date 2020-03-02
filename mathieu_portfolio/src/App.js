import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppNavBar from './components/AppNavBar';
import GridPhotos_1 from './components/GridPhotos_1';
import GridPhotos_2 from './components/Grid_Photos_2';
import Grid_Photos_3 from './components/Grid_Photos_3';
import GridPhotos_4 from './components/GridPhotos_4';
import Grid_Photos_Rows from './components/Grid_Photos_Rows';
import Home from './components/Home';
import HomeHeader from './components/HomeHeader';
import Home_Paragraph from './components/Home_Paragraph';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';

const useStyles = makeStyles( theme => ({
  app: {
    textAlign: 'center',
    backgroundColor: '#FFFFF',
  },
}
));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
    <div className={classes.app}>
    {/* <AppNavBar/>
    <GridPhotos_1/>
    <GridPhotos_2/>
    <Grid_Photos_3/>
    <Grid_Photos_Rows/>
    <GridPhotos_4/> */}
    <Route path="/">
      <Route path="/" exact>
        <AppNavBar/>
        <Home/>
        <Home_Paragraph/>
        <Grid_Photos_3/>
        <Footer/>
      </Route>
      <Route path="/action">
        <AppNavBar/>
        <GridPhotos_1/>
        <GridPhotos_2/>
        <Grid_Photos_Rows/>
        <GridPhotos_4/>
        <Footer/>
      </Route>
      <Route path="/landscapes">
        <AppNavBar/>
        <GridPhotos_1/>
        <GridPhotos_2/>
        <Grid_Photos_Rows/>
        <GridPhotos_4/>
        <Footer/>
      </Route>
      <Route path="/motions">
        <AppNavBar/>
        <GridPhotos_1/>
        <GridPhotos_2/>
        <Grid_Photos_Rows/>
        <GridPhotos_4/>
        <Footer/>
      </Route>
      <Route path="/about-me">
        <AppNavBar/>
        <AboutMe/>
        <Footer/>
      </Route>
    </Route>
    
    
    </div>
    </BrowserRouter>
  );
}

export default App;

// Copyright 2020, Gautier Marechal, All rights reserved
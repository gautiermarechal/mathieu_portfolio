import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
//HOME PAGE IMPORTS --------------------------------------------------
import AppNavBar from './components/AppNavBar';
import Home from './components/Home';
import Home_Paragraph from './components/Home_Paragraph';
import Grid_Photos_3_Home from './components/Grid_Photos_3_Home';
import Footer from './components/Footer';
//--------------------------------------------------------------------

//ACTIONS PAGE IMPORTS -----------------------------------------------
import GridPhotos_1_A from './components/action/GridPhotos_1_A';
import GridPhotos_2_A from './components/action/Grid_Photos_2_A';
import Grid_Photos_Rows_A from './components/action/Grid_Photos_Rows_A';
import GridPhotos_4_A from './components/action/GridPhotos_4_A';
//--------------------------------------------------------------------

//LANDSCAPES PAGE IMPORTS -----------------------------------------------
import GridPhotos_1_LD from './components/landscapes/GridPhotos_1_LD';
import GridPhotos_2_LD from './components/landscapes/Grid_Photos_2_LD';
import Grid_Photos_Rows_LD from './components/landscapes/Grid_Photos_Rows_LD';
import GridPhotos_4_LD from './components/landscapes/GridPhotos_4_LD';
//--------------------------------------------------------------------

//LIFESTYLE PAGE IMPORTS -----------------------------------------------
import GridPhotos_1_LF from './components/lifestyle/GridPhotos_1_LF';
import GridPhotos_2_LF from './components/lifestyle/Grid_Photos_2_LF';
import Grid_Photos_Rows_LF from './components/lifestyle/Grid_Photos_Rows_LF';
import GridPhotos_4_LF from './components/lifestyle/GridPhotos_4_LF';
//--------------------------------------------------------------------

//ABOUT ME PAGE IMPORTS -----------------------------------------------
import AboutMe from './components/AboutMe';
//--------------------------------------------------------------------

//COPYRIGHT IMPORTS -----------------------------------------------
import CopyrightClick from './assets/CopyrightClick';
//--------------------------------------------------------------------

const useStyles = makeStyles( theme => ({
  app: {
    textAlign: 'center',
    backgroundColor: '#F5F5F5',
  },
}
));


function App() {
  const classes = useStyles();
  CopyrightClick();
  return (
    <BrowserRouter>
    <div className={classes.app}>
    <Route path="/">
      <Route path="/" exact>
        <AppNavBar/>
        <Home/>
        <Home_Paragraph/>
        <Grid_Photos_3_Home/>
        <Footer/>
      </Route>
      <Route path="/action">
        <AppNavBar/>
        <GridPhotos_1_A/>
        <GridPhotos_2_A/>
        <Grid_Photos_Rows_A/>
        <GridPhotos_4_A/>
        <Footer/>
      </Route>
      <Route path="/landscapes">
        <AppNavBar/>
        <GridPhotos_1_LD/>
        <GridPhotos_2_LD/>
        <Grid_Photos_Rows_LD/>
        <GridPhotos_4_LD/>
        <Footer/>
      </Route>
      <Route path="/motions">
        <AppNavBar/>
        <GridPhotos_1_LF/>
        <GridPhotos_2_LF/>
        <Grid_Photos_Rows_LF/>
        <GridPhotos_4_LF/>
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
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

// FONTS IMPORT --------------------------------------------------
import GTAmerciaStandardRegular from './assets/fonts/GT-America-Standard-Regular.woff2';
import GTAmerciaStandardRegularItalic from './assets/fonts/GT-America-Standard-Regular-Italic.woff2';
import GTAmerciaExpandedBlack from './assets/fonts/GT-America-Expanded-Black.woff2';
import GTAmerciaExpandedBlackItalic from './assets/fonts/GT-America-Expanded-Black-Italic.woff2';

// ---------------------------------------------------------------

//HOME PAGE IMPORTS --------------------------------------------------
import AppNavBar from './components/AppNavBar';
import Home from './components/Home';
import AppNavBar_Home from './components/AppNavBar_Home';
import Footer from './components/Footer';
//--------------------------------------------------------------------

//ACTIONS PAGE IMPORTS -----------------------------------------------
import Grid_Photos_Rows_1_A from './components/action/Grid_Photos_Rows_1_A';
import GridPhotos_2_A from './components/action/Grid_Photos_2_A';
import Grid_Photos_Rows_2_A from './components/action/Grid_Photos_Rows_2_A';
import GridPhotos_4_A from './components/action/GridPhotos_4_A';
import Grid_Photos_Ski_Trick from './components/action/Grid_Photos_Ski_Trick';
//--------------------------------------------------------------------

//LANDSCAPES PAGE IMPORTS -----------------------------------------------
import Grid_Photos_Rows_1_LD from './components/landscapes/Grid_Photos_Rows_1_LD';
import GridPhotos_1_LD from './components/landscapes/GridPhotos_1_LD';
import GridPhotos_2_LD from './components/landscapes/Grid_Photos_2_LD';
import Grid_Photos_Rows_LD from './components/landscapes/Grid_Photos_Rows_LD';
import GridPhotos_4_LD from './components/landscapes/GridPhotos_4_LD';
//--------------------------------------------------------------------

//LIFESTYLE PAGE IMPORTS -----------------------------------------------
import Grid_Photos_Rows_1_LF from './components/lifestyle/Grid_Photos_Rows_1_LF';
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

//EMAIL SENT IMPORTS -----------------------------------------------
import EmailSent from './components/EmailSent';
//--------------------------------------------------------------------

const gTAmerciaStandardRegular = {
  fontFamily: 'GT America Standard Regular',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('GT America'),
    local('GT-America-Standard-Regular'),
    url(${GTAmerciaStandardRegular}) format('woff')
  `,
};

const gTAmerciaStandardRegularItalic = {
  fontFamily: 'GT America Standard Regular Italic',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('GT America'),
    local('GT-America-Standard-Regular-Italic'),
    url(${GTAmerciaStandardRegularItalic}) format('woff')
  `,
};

const gTAmerciaExpandedBlack = {
  fontFamily: 'GT America Expanded Black',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('GT America'),
    local('GT-America-Standard-Expanded-Black'),
    url(${GTAmerciaExpandedBlack}) format('woff')
  `,
};

const gTAmerciaExpandedBlackItalic = {
  fontFamily: 'GT America Expanded Black Italic',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('GT America'),
    local('GT-America-Standard-Expanded-Black-Italic'),
    url(${GTAmerciaExpandedBlackItalic}) format('woff')
  `,
};


const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'GT America Standard Regular',
      'GT America Standard Regular Italic',
      'GT America Expanded Black',
      'GT America Expanded Black Italic',
    ].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [gTAmerciaStandardRegular,gTAmerciaStandardRegularItalic, gTAmerciaExpandedBlack, gTAmerciaExpandedBlackItalic],
      },
    },
  },
});

console.log(theme.typography.fontFamily);

const useStyles = makeStyles( theme => ({
  app: {
    textAlign: 'center',
    backgroundColor: '#F5F5F5',
    fontFamily: theme.typography.fontFamily['GT America Standard Regular'],
  },
  homeContainer: {
    height: '100%',
    width: '100%',
  }
}
));

function App() {
  const classes = useStyles();
  CopyrightClick();
  return (
    <ThemeProvider theme={theme.typography.fontFamily['GT America Standard Regular']}>
    <BrowserRouter>
    <div className={classes.app}>
    <Route path="/">
      <Route path="/" exact>
        <div className={classes.homeContainer}>
        <AppNavBar_Home/>
        <Home/>
        {/* <Home_Paragraph/> */}
        {/* <Grid_Photos_3_Home/> */}
        <Footer/>
        </div>
      </Route>
      <Route path="/action">
        <AppNavBar/>
        <Grid_Photos_Rows_1_A/>
        {/* <Grid_Photos_Ski_Trick/>
        <GridPhotos_2_A/>
        <Grid_Photos_Rows_2_A/>
        <GridPhotos_4_A/> */}
        <Footer/>
      </Route>
      <Route path="/landscapes">
        <AppNavBar/>
        <Grid_Photos_Rows_1_LD/>
        {/* <GridPhotos_1_LD/>
        <GridPhotos_2_LD/>
        <Grid_Photos_Rows_LD/>
        <GridPhotos_4_LD/> */}
        <Footer/>
      </Route>
      <Route path="/lifestyle">
        <AppNavBar/>
        <Grid_Photos_Rows_1_LF/>
        {/* <GridPhotos_1_LF/>
        <GridPhotos_2_LF/>
        <Grid_Photos_Rows_LF/>
        <GridPhotos_4_LF/> */}
        <Footer/>
      </Route>
      <Route path="/about-me">
        <AppNavBar/>
        <AboutMe/>
        <Footer/>
      </Route>
      <Route path="/email-sent">
        <AppNavBar/>
        <EmailSent/>
        <Footer/>
      </Route>
    </Route>
    </div>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

// Copyright 2020, Gautier Marechal, All rights reserved
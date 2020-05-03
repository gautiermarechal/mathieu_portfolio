import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// FONTS IMPORT --------------------------------------------------
import GTAmerciaStandardRegular from './assets/fonts/GT-America-Standard-Regular.woff2';
import GTAmerciaStandardRegularItalic from './assets/fonts/GT-America-Standard-Regular-Italic.woff2';
import GTAmerciaExpandedBlack from './assets/fonts/GT-America-Extended-Black.woff2';
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

//SCROLL TOP IMPORTS -----------------------------------------------
import ScrollToTop from './assets/ScrollToTop';
//--------------------------------------------------------------------

//EMAIL SENT IMPORTS -----------------------------------------------
import EmailSent from './components/EmailSent';
//--------------------------------------------------------------------

// FONTS CONSTS ---------------------
const gTAmerciaStandardRegular = {
  fontFamily: 'GT America Standard Regular',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('GT America'),
    local('GT-America-Standard-Regular'),
    url(${GTAmerciaStandardRegular}) format('woff2')
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
    url(${GTAmerciaStandardRegularItalic}) format('woff2')
  `,
};

const gTAmerciaExpandedBlack = {
  fontFamily: 'GT America Extended Black',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('GT America'),
    local('GT-America-Extended-Black'),
    url(${GTAmerciaExpandedBlack}) format('woff2')
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
    url(${GTAmerciaExpandedBlackItalic}) format('woff2')
  `,
};
//------------------------------------------------------------------

//THEME FOR FONTS---------------------------------------------------
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'GT America Extended Black',
      'GT America Standard Regular',
      'GT America Standard Regular Italic',
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
//------------------------------------------------------------------


console.log(theme.typography.fontFamily);

const useStyles = makeStyles( theme => ({
  app: {
    textAlign: 'center',
    backgroundColor: '#F5F5F5',
  },
  homeContainer: {
    height: '100vh',
    width: '100%',
    fontFamily: 'GT America Extended Black',
  }
}
));

function App() {
  const classes = useStyles();
  CopyrightClick();
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <BrowserRouter>
    <ScrollToTop/>
    <div className={classes.app}>
    <Route path="/">
      <Route path="/" exact>
        <div className={classes.homeContainer}>
        <AppNavBar_Home/>
        <Home/>
        <Footer/>
        </div>
      </Route>
      <Route path="/action">
        <AppNavBar/>
        <Grid_Photos_Rows_1_A/>
        <Footer/>
      </Route>
      <Route path="/landscapes">
        <AppNavBar/>
        <Grid_Photos_Rows_1_LD/>
        <Footer/>
      </Route>
      <Route path="/lifestyle">
        <AppNavBar/>
        <Grid_Photos_Rows_1_LF/>
        <Footer/>
      </Route>
      <div className={"information-page"}>
      <Route path="/about-me">
        <AppNavBar/>
        <AboutMe/>
        <Footer/>
      </Route>
      </div>
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
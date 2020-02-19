import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppNavBar from './components/AppNavBar';
import GridPhotos_1 from './components/GridPhotos_1';
import GridPhotos_1_1 from './components/GridPhotos_1.1';
import GridPhotos_2 from './components/Grid_Photos_2';
import Grid_Photos_3 from './components/Grid_Photos_3';
import GridPhotos_4 from './components/GridPhotos_4';
import Grid_Photos_Rows from './components/Grid_Photos_Rows';

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
    <div className={classes.app}>
      <AppNavBar/>
      <GridPhotos_1/>
      <GridPhotos_2/> 
      <Grid_Photos_3/>
      <Grid_Photos_Rows/> 
      <GridPhotos_4/> 
    </div>
  );
}

export default App;

// Copyright 2020, Gautier Marechal, All rights reserved
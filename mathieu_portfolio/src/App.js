import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppNavBar from './components/AppNavBar';
import GridPhotos_1 from './components/GridPhotos_1';
import GridPhotos_2 from './components/Grid_Photos_2';

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
        
    </div>
  );
}

export default App;

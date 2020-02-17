import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { purple } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import mathLogo from '../assets/Mathieu_Tranchida_Logo.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: 'black', 
    fontFamily: "'Rubik', sans-serif",
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '53px',
  },
  smallTitle: {
    flexGrow: 1,
    fontFamily: "'Rubik', sans-serif",
  },
  toolBar: {
    minHeight: '100px',
  },
  appBar: {
    backgroundColor: 'white',
    boxShadow: 'none',
    fontFamily: "'Rubik', sans-serif",
    flexGrow: 1,
  },
  logo:{
    maxHeight: '100%',
    maxWidth: '100%',
  },
}));

const ColorButton1 = withStyles(theme => ({
    root: {
      color: 'black',
      fontFamily: "'Rubik', sans-serif",
      height: '100%',
      width: '100%', 
      borderRadius: '0%',
      backgroundColor: 'white',
      border: '5px none',
      borderRadius: '1%',
      '&:hover': {
        backgroundColor: 'black',
        color: 'white',
        border: '5px solid',
        borderColor: 'black',
      },
    },
  }))(Button);

  const ColorButton2 = withStyles(theme => ({
    root: {
      color: 'black',
      fontFamily: "'Rubik', sans-serif",
      height: '100%',
      width: '100%', 
      borderRadius: '0%',
      backgroundColor: 'white',
      '&:hover': {
        backgroundColor: 'seagreen',
        color: 'yellow',
      },
    },
  }))(Button);

  const ColorButton3 = withStyles(theme => ({
    root: {
      color: 'black',
      fontFamily: "'Rubik', sans-serif",
      height: '100%',
      width: '100%', 
      borderRadius: '0%',
      backgroundColor: 'white',
      '&:hover': {
        backgroundColor: 'tomato',
        color: 'deepskyblue',
      },
    },
  }))(Button);

  const ColorButton4 = withStyles(theme => ({
    root: {
      color: 'black',
      fontFamily: "'Rubik', sans-serif",
      height: '100%',
      width: '100%', 
      borderRadius: '0%',
      backgroundColor: 'white',
      '&:hover': {
        backgroundColor: 'darkturquoise',
        color: 'navajowhite',
      },
    },
  }))(Button);

export default function AppNavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar  className={classes.toolBar}>
            <Grid container spacing={0}>
                <Grid item xs ={2}>
                <img className={classes.logo} src={mathLogo}/>
                </Grid>
                <Grid item xs ={2}>
                <ColorButton1>
                        <Typography variant="h5" className={classes.smallTitle}>
                            Ski
                        </Typography>
                    </ColorButton1>
                </Grid>
                <Grid item xs ={2}>
                    {/* <Typography variant="subtitle1" className={classes.title}>
                        Mathieu Tranchida
                    </Typography> */}
                      <ColorButton1>
                    <Typography variant="h5" className={classes.smallTitle}>
                        Climbing
                    </Typography>
                    </ColorButton1>
                </Grid>
                <Grid item xs ={2}>
                    <ColorButton1>
                    <Typography variant="h5" className={classes.smallTitle}>
                        Landscapes
                    </Typography>
                    </ColorButton1>
                </Grid>
                <Grid item xs ={2}>
                    <ColorButton1>
                    <Typography variant="h5" className={classes.smallTitle}>
                        Motions
                    </Typography>
                    </ColorButton1>
                </Grid>
                <Grid item xs ={2}>
                    <ColorButton1>
                    <Typography variant="h5" className={classes.smallTitle}>
                      About Me
                    </Typography>
                    </ColorButton1>
                </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// Copyright 2020, Gautier Marechal, All rights reserved
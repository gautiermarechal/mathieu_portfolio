import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import BarDrawer from './BarDrawer';
import Mathieu_Logo from '../assets/Logo_White_Mathieu_Tranchida.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '95px',
  },
  title: {
    flexGrow: 1,
    color: 'black', 
    textAlign: 'center',
    verticalAlign: 'middle',
    marginTop: '20px',
  },
  smallTitle: {
    flexGrow: 1,
    textDecoration: 'none',
  },
  toolBar: {
    flexGrow: 1,
    minHeight: '95px',
  },
  appBar: {
    backgroundColor: '#000000',
    color: 'white',
    boxShadow: 'none',
    flexGrow: 1,
  },
  logo:{
    flexGrow: 1,
    textDecoration: 'none',
    color: 'black',
    height: '95px',
    paddingTop: '15px',
    paddingBottom: '15px',
  },
  sectionDesktop: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    flexGrow: 1,
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  iconGroup: {
    marginTop: '8px',
  },
}));

export default function AppNavBar() {
  const classes = useStyles();
  const collapse = useState(false);

  const desktopMenu = (
    <Grid container spacing={0} justify="center">
                <Grid item xs ={2}>
                </Grid>
                <Grid item xs ={2}>
                </Grid>
                <Grid item xs ={2}>
                <Link to="/">
                      <img src={Mathieu_Logo} className={classes.logo}/>
                </Link>             
                </Grid>
                <Grid item xs ={2}>
                </Grid>
                <Grid item xs ={2}>
                </Grid>
            </Grid>
  );

  const mobileMenu = (
    <Grid container spacing={0}>
      <Grid item xs ={3}>
      <a href="\">
        <img src={Mathieu_Logo} className={classes.logo}/>
      </a>       
      </Grid>
      <Grid item xs ={9}>
        <BarDrawer/>
      </Grid>
    </Grid>
  );
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar  className={classes.toolBar}>
          <div className={classes.sectionDesktop}>
            {desktopMenu}
          </div>
          <div className={classes.sectionMobile}>
            {mobileMenu}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// Copyright 2020, Gautier Marechal, All rights reserved
import React from 'react';
import {useState} from 'react';
import { Route, Link } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import BarDrawer from './BarDrawer';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import IconButton from '@material-ui/core/IconButton';

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
    marginTop: '20px',
  },
  smallTitle: {
    flexGrow: 1,
    fontFamily: "'Rubik', sans-serif",
    textDecoration: 'none',
  },
  toolBar: {
    flexGrow: 1,
    minHeight: '100px',
  },
  appBar: {
    backgroundColor: '#FFFAFA',
    color: 'black',
    boxShadow: 'none',
    fontFamily: "'Rubik', sans-serif",
    flexGrow: 1,
  },
  logo:{
    flexGrow: 1,
    fontFamily: "'Rubik', sans-serif",
    textDecoration: 'none',
    color: 'black',
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

const ColorButton1 = withStyles(theme => ({
    root: {
      color: 'black',
      fontFamily: "'Rubik', sans-serif",
      height: '100%',
      width: '100%', 
      borderRadius: '0%',
      backgroundColor: '#FFFAFA',
      border: '5px none',
      borderRadius: '0',
      '&:hover': {
        backgroundColor: 'black',
        color: 'white',
        border: '5px none',
        borderColor: 'black',
      },
    },
  }))(Button);

export default function AppNavBar() {
  const classes = useStyles();

  const desktopMenu = (
    <Grid container spacing={0}>
                <Grid item xs ={2}>
                <Link to="/" className={classes.logo}>
                <Typography variant="h5" className={classes.smallTitle}>
                      Mathieu <br/> Tranchida
                </Typography>   
                </Link>             
                </Grid>
                <Grid item xs ={2}>
                <Link to="/action" className={classes.smallTitle}>
                <ColorButton1>
                        <Typography variant="h5" className={classes.smallTitle}>
                            Action
                        </Typography>
                </ColorButton1>
                </Link>
                </Grid>
                <Grid item xs ={2}>
                  <Link to="/landscapes" className={classes.smallTitle}>
                    <ColorButton1>
                    <Typography variant="h5" className={classes.smallTitle}>
                        Landscapes
                    </Typography>
                    </ColorButton1>
                    </Link>
                </Grid>
                <Grid item xs ={2}>
                  <Link to="/motions" className={classes.smallTitle}>
                    <ColorButton1>
                    <Typography variant="h5" className={classes.smallTitle}>
                        Motions
                    </Typography>
                    </ColorButton1>
                  </Link>
                </Grid>
                <Grid item xs ={2}>
                  <Link to="/about-me" className={classes.smallTitle}>
                    <ColorButton1>
                    <Typography variant="h5" className={classes.smallTitle}>
                      About Me
                    </Typography>
                    </ColorButton1>
                  </Link>
                </Grid>
                <Grid item xs={2}>
                  <div className={classes.iconGroup}>
                  <Link to="/instagram"><IconButton><InstagramIcon/></IconButton></Link>
                  <Link to="/linkedin"><IconButton><LinkedInIcon/></IconButton></Link>
                  <Link to="/youtube"><IconButton><YouTubeIcon/></IconButton></Link>
                  </div>
                </Grid>
            </Grid>
  );

  const mobileMenu = (
    <Grid container spacing={0}>
      <Grid item xs ={6}>
      <a href="\" className={classes.smallTitle}>
      <Typography variant="h5" className={classes.title} href="/">
                      Mathieu Tranchida
      </Typography> 
      </a>       
      </Grid>
      <Grid item xs ={6}>
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
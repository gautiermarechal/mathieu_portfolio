import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import BarDrawer from './BarDrawer';
import Mathieu_Logo from '../assets/Logo_White_Mathieu_Tranchida.png';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';


function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


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
    height: '95px',
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
    [theme.breakpoints.up('1100')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    flexGrow: 1,
    display: 'flex',
    [theme.breakpoints.up('1100')]: {
      display: 'none',
    },
  },
  iconGroup: {
    marginTop: '8px',
  },
  grid: {
    height: '95px',
  }
}));

const ColorButton1 = withStyles(theme => ({
    root: {
      color: 'white',
      height: '100%',
      width: '100%', 
      borderRadius: '0%',
      backgroundColor: '#000000',
      border: '0px',
      borderRadius: '0',
      '&:hover': {
        backgroundColor: 'white',
        color: 'black',
        border: '0px',
        borderColor: 'black',
      },
    },
  }))(Button);

export default function AppNavBar(props) {
  const classes = useStyles();

  const desktopMenu = (
    <Grid container spacing={0} justify="center" className={classes.grid}>
                <Grid item xs ={2} style={{height: '95px'}}>
                <Link to="/action" className={classes.smallTitle}>
                <ColorButton1>
                        <Typography variant="h6" className={classes.smallTitle}>
                            Action
                        </Typography>
                </ColorButton1>
                </Link>
                </Grid>
                <Grid item xs ={2} style={{height: '95px'}}>
                  <Link to="/landscapes" className={classes.smallTitle}>
                    <ColorButton1>
                    <Typography variant="h6" className={classes.smallTitle}>
                        Landscapes
                    </Typography>
                    </ColorButton1>
                    </Link>
                </Grid>
                <Grid item xs ={2} style={{height: '95px'}}>
                <Link to="/">
                      <img src={Mathieu_Logo} className={classes.logo}/>
                </Link>
                </Grid>
                <Grid item xs ={2} style={{height: '95px'}}>
                  <Link to="/lifestyle" className={classes.smallTitle}>
                    <ColorButton1>
                    <Typography variant="h6" className={classes.smallTitle}>
                        Lifestyle
                    </Typography>
                    </ColorButton1>
                  </Link>
                </Grid>
                <Grid item xs ={2} style={{height: '95px'}}>
                  <Link to="/information" className={classes.smallTitle}>
                    <ColorButton1>
                    <Typography variant="h6" className={classes.smallTitle}>
                      Information
                    </Typography>
                    </ColorButton1>
                  </Link>
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
      <HideOnScroll {...props}>
      <AppBar className={classes.appBar}>
        <Toolbar  className={classes.toolBar}>
          <div className={classes.sectionDesktop}>
            {desktopMenu}
          </div>
          <div className={classes.sectionMobile}>
            {mobileMenu}
          </div>
        </Toolbar>
      </AppBar>
      </HideOnScroll>
    </div>
  );
}

// Copyright 2020, Gautier Marechal, All rights reserved
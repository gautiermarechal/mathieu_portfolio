import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from '../../assets/TiledData_Action';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
    // padding: '5px !important',
  },
  gridList: {
    width: 'auto',
    height: 'auto',
    // padding: '2px',
  },
  itemImage: {
    // padding: '4px !important',
  },
  title: {
    flexGrow: 1,
    color: 'black', 
    fontFamily: "'Rubik', sans-serif",
    textAlign: 'center',
    verticalAlign: 'middle',
    margin: theme.spacing(0),
    paddingTop: theme.spacing(5),
    height: '100px !important',
    lineHeight: '200px ',
    [theme.breakpoints.down('md')]: {
      lineHeight: 'none',
      paddingTop: theme.spacing(0),
    },
    endPageTitle: {
      textAlign: 'center',
      verticalAlign: 'middle',
      height: '1000px !important',
      width: '1000px',
      transform: 'rotate(46deg)',
      marginLeft: theme.spacing(-2),
      position: 'absolute',
      left: '-300px',
      top: '-300px'
    },
  },
}));

export default function GridPhotos_Rows() {
  const classes = useStyles(); 

  return (
    <div className={classes.root}>
    <Grid container>
    <Grid item md={6} spacing={0}>
    <GridList cellHeight={600} className={classes.gridList} cols={1} spacing={0}>
        {tileData.slice(22,27).map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1} className={classes.itemImage}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </Grid>
    <Grid item md={6} spacing={0}>
    <GridList cellHeight={400} className={classes.gridList} cols={1} spacing={0}>
        {tileData.slice(28,34).map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1} className={classes.itemImage}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
        <GridListTile rows={1.5}>
        <Typography variant="h1" className={classes.endPageTitle}>
        SteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteep
        SteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteep
        SteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteep
        SteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteep
        SteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteep
        SteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteep
        SteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteep
        SteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteep
        SteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteep
        SteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteep
        SteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteepSteep
        </Typography>
        </GridListTile>
        </GridList>
    </Grid>
    </Grid>
    </div>
  );
}

// Copyright 2020, Gautier Marechal, All rights reserved
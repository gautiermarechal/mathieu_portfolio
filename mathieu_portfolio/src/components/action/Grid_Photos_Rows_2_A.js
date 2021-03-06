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
    padding: theme.spacing(0),
  },
  gridList: {
    width: 'auto',
  },
  tile: {
    display: 'flex',
    // position: 'relative',
    // width: 'auto',
    // height: 'auto',
  },
  title: {
    flexGrow: 1,
    color: 'black', 
    fontFamily: "'Rubik', sans-serif",
    textAlign: 'center',
    verticalAlign: 'middle',
    margin: theme.spacing(0),
    paddingTop: theme.spacing(0),
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
      top: '-300px',
      overflow: 'hidden',
    },
  },
  actualImage: {
    width: '100%',
  },
  endTile: {
    height: '430px !important',
  },
  // leftList: {
  //   paddingRight: theme.spacing(0),
  // },
  // rightList: {
  //   paddingLeft: theme.spacing(0),
  // },
}));

export default function GridPhotos_Rows_2_A() {
  const classes = useStyles(); 

  return (
    <div className={classes.root}>
    <Grid container>
    <Grid item md={6} className={classes.leftList}>
    <GridList cellHeight={'auto'} className={classes.gridList} cols={1} spacing={0}>
        {tileData.slice(22,30).map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1} className={classes.tile}>
            <img src={tile.img} alt={tile.title} className={classes.actualImage}/>
          </GridListTile>
        ))}
      </GridList>
    </Grid>
    <Grid item md={6} className={classes.rightList}>
    <GridList cellHeight={'auto'} className={classes.gridList} cols={1} spacing={0}>
        {tileData.slice(30).map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1} className={classes.tile}>
            <img src={tile.img} alt={tile.title} className={classes.actualImage}/>
          </GridListTile>
        ))}
        {/* <GridListTile className={classes.endTile}>
        <Typography variant="h1" className={classes.endPageTitle}>
        ParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallel
        ParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallel
        ParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallel
        ParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallel
        ParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallel
        ParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallel
        ParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallel
        ParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallel
        ParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallel
        ParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallel
        ParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallel
        ParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallel
        ParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallel
        ParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallelParallel
        </Typography>
        </GridListTile> */}
        </GridList>
    </Grid>
    </Grid>
    </div>
  );
}

// Copyright 2020, Gautier Marechal, All rights reserved
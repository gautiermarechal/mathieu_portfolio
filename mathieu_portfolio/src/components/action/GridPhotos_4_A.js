import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import tileData from '../../assets/TiledData_Action';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    // padding: '5px !important',
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
  itemImage: {
    // padding: '10px !important',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
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
}));

export default function GridPhotos_1() {
  const classes = useStyles(); 
  const theme = useTheme();
  const colMatches = useMediaQuery(theme.breakpoints.up('md'));

  const getGridListCol = () => {
    if(colMatches){
      return 2;
    }
    else
      return 1;
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={500} className={classes.gridList} cols={getGridListCol()} spacing={0}>
        {tileData.slice(35).map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1} className={classes.itemImage}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
            classes={{
              root: classes.titleBar,
            }}/>
          </GridListTile>
        ))}
        <GridListTile><Typography variant="h2" className={classes.endPageTitle}>
        ClimbingClimbingClimbingClimbingClimbingClimbingClimbingClimbing
        ClimbingClimbingClimbingClimbingClimbingClimbingClimbingClimbing
        ClimbingClimbingClimbingClimbingClimbingClimbingClimbingClimbing
        ClimbingClimbingClimbingClimbingClimbingClimbingClimbingClimbing
        ClimbingClimbingClimbingClimbingClimbingClimbingClimbingClimbing
        ClimbingClimbingClimbingClimbingClimbingClimbingClimbingClimbing
        ClimbingClimbingClimbingClimbingClimbingClimbingClimbingClimbing
        ClimbingClimbingClimbingClimbingClimbingClimbingClimbingClimbing
        ClimbingClimbingClimbingClimbingClimbingClimbingClimbingClimbing
        ClimbingClimbingClimbingClimbingClimbingClimbingClimbingClimbing
        ClimbingClimbingClimbingClimbingClimbingClimbingClimbingClimbing
        ClimbingClimbingClimbingClimbingClimbingClimbingClimbingClimbing
        ClimbingClimbingClimbingClimbingClimbingClimbingClimbingClimbing
        ClimbingClimbingClimbingClimbingClimbingClimbingClimbingClimbing
        ClimbingClimbingClimbingClimbingClimbingClimbingClimbingClimbing
        ClimbingClimbingClimbingClimbingClimbingClimbingClimbingClimbing
        ClimbingClimbingClimbingClimbingClimbingClimbingClimbingClimbing
        ClimbingClimbingClimbingClimbingClimbingClimbingClimbingClimbing
        ClimbingClimbingClimbingClimbingClimbingClimbingClimbingClimbing
        ClimbingClimbingClimbingClimbingClimbingClimbingClimbingClimbing
        ClimbingClimbingClimbingClimbingClimbingClimbingClimbingClimbing
        ClimbingClimbingClimbingClimbingClimbingClimbingClimbingClimbing
        ClimbingClimbingClimbingClimbingClimbingClimbingClimbingClimbing
        ClimbingClimbingClimbingClimbingClimbingClimbingClimbingClimbing</Typography></GridListTile>
      </GridList>
    </div>
  );
}

// Copyright 2020, Gautier Marechal, All rights reserved
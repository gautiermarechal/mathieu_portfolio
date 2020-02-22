import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from '../assets/TiledData';

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
    display: 'flex',
  },
}));

export default function GridPhotos_1(props) {
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
      <GridList cellHeight={500} className={classes.gridList} cols={getGridListCol()}>
        {tileData.slice(6,12).map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1} className={classes.itemImage}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

// Copyright 2020, Gautier Marechal, All rights reserved
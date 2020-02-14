import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    padding: '5px !important',
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
  itemImage: {
    padding: '10px !important',
  },
}));

export default function GridPhotos_1() {
  const classes = useStyles(); 

  return (
    <div className={classes.root}>
      <GridList cellHeight={500} className={classes.gridList} cols={2}>
        {tileData.slice(9,11).map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1} className={classes.itemImage}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

// Copyright 2020, Gautier Marechal, All rights reserved
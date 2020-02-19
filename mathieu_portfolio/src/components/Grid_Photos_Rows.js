import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from '../assets/TiledData';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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
    width: 'auto',
    height: 'auto',
    padding: '2px',
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
    paddingTop: '20% !important',
  },
}));

export default function GridPhotos_Rows() {
  const classes = useStyles(); 

  return (
    <div className={classes.root}>
    <Grid container>
    <Grid item xs={6}>
    <GridList cellHeight={500} className={classes.gridList} cols={1}>
        {tileData.slice(19,22).map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1} className={classes.itemImage}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </Grid>
    <Grid item xs={6}>
    <GridList cellHeight={400} className={classes.gridList} cols={1}>
        {tileData.slice(24,27).map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1} className={classes.itemImage}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
      <Typography variant="h2" className={classes.title}>Ski. Photos. Life.</Typography>
    </Grid>
    </Grid>
    </div>
  );
}

// Copyright 2020, Gautier Marechal, All rights reserved
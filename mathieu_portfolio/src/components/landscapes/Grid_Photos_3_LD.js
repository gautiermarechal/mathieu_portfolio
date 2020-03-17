import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import tileData from '../../assets/TiledData_Landscapes';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    // padding: '5px !important',
    heigth: '400px',
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    // margin: '5px !important',
    height: '100%',
  },
  title: {
    color: 'white',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  supportPaper: {
    // padding: '10px',
    height: '100%',
    boxShadow: 'none',
  },
  itemImage:{
    borderRadius: '10px !important',
  }
}));

export default function Grid_Photos_3() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Paper className={classes.supportPaper} elevation={10}>
      <GridList className={classes.gridList} cols={3} spacing={0}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} className={classes.itemImage}>
            <img src={tile.img} 
            alt={tile.title} 
            />
            <GridListTileBar
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </Paper>
    </div>
  );
}

// Copyright 2020, Gautier Marechal, All rights reserved
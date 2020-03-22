import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';

import tileData from '../../assets/TiledData_Lifestyle';

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
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  infoBarOpened : {
    height: '100%',
    fontFamily: "'Rubik', sans-serif",
  },
}));

export default function GridPhotos_1(props) {
  const classes = useStyles(); 
  const theme = useTheme();
  const colMatches = useMediaQuery(theme.breakpoints.up('md'));
  const [showInfo, setShowInfo] = useState(false);
  const [infoContent, setInfoContent] = useState(
    <GridListTileBar
            classes={{
              root: classes.titleBar,
            }}/>
  );

  console.log(showInfo);

  function hidePhotoInfo(){
    if(showInfo){
      console.log(showInfo);
      setInfoContent(
        <GridListTileBar
            classes={{
              root: classes.titleBar,
            }}
            />
      );
      setShowInfo(false);
    }
  }

  function showPhotoInfo(){
    console.log(showInfo);
    if(!showInfo){
      setInfoContent(
        <React.Fragment>
          {
            <GridListTileBar
            classes={{
              root: classes.infoBarOpened,
            }}
            title={
              <Typography>Hello</Typography>
              }/>
              
          }
        </React.Fragment>
      );
      setShowInfo(true);
    }
  }

  const getGridListCol = () => {
    if(colMatches){
      return 2;
    }
    else
      return 1;
  }
  
  return (
    <div className={classes.root}>
      <GridList cellHeight={700} className={classes.gridList} cols={getGridListCol()} spacing={0}>
        {tileData.slice(0,6).map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1} className={classes.itemImage} onClick={showInfo? () => hidePhotoInfo() : () => showPhotoInfo()}>
            <img src={tile.img} alt={tile.title} />
            {infoContent}
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

// Copyright 2020, Gautier Marechal, All rights reserved
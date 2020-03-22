import React from 'react';
import {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import tileData from '../../assets/TiledData_Lifestyle';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    // padding: '10px !important',
  },
  gridList: {
    // padding: '2px',
    // paddingTop: '4px',
    width: '100%',
    height: '100%',
  },
  iconLargePhoto: {
    color: 'rgba(255,255,255, 0.9)',
  },
  infoBar: {
    backgroundColor: 'rgba(0,0,0, 0)',  
    fontFamily: "'Rubik', sans-serif",
    background:
    'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  infoBarOpened : {
    height: '100%',
    fontFamily: "'Rubik', sans-serif",
  },
  photoDescription: {
    whiteSpace: 'normal',
  },

}));

export default function GridPhotos_2() {
  const classes = useStyles();
  const largePhoto = tileData[6];
  const [showInfo, setShowInfo] = useState(false);
  const [infoContent, setInfoContent] = useState(
    <GridListTileBar
            className={classes.infoBar}
            title={
            <Typography variant="h6">
              {largePhoto.title}
            </Typography>
            }
            actionIcon={
              <IconButton className={classes.iconLargePhoto} onClick={() => showPhotoInfo()}>
                <InfoIcon/>
              </IconButton>
            }
            />
  );

function showPhotoInfo(){
  if(!showInfo){
    setInfoContent(
    <GridListTileBar
          className={classes.infoBarOpened}
          title={
            <Typography variant="h4">
              {largePhoto.title}
            </Typography>
          }
          subtitle={
            <Typography variant="body1" className={classes.photoDescription}>
              {largePhoto.description}
            </Typography>
          }
          actionIcon={
            <IconButton className={classes.iconLargePhoto} onClick={() => hidePhotoInfo()}>
              <InfoIcon/>
            </IconButton>
          }
          />
      );
      setShowInfo(true);
    } 
}

function hidePhotoInfo(){
  if(showPhotoInfo){
    setInfoContent(
      <GridListTileBar
            className={classes.infoBar}
            title={
              <Typography variant="h6">
                {largePhoto.title}
              </Typography>
            }
            actionIcon={
              <IconButton className={classes.iconLargePhoto} onClick={() => showPhotoInfo()}>
                <InfoIcon/>
              </IconButton>
            }
            />
    );
  }
}

  return (
    <div className={classes.root}>
      <GridList cellHeight={650} className={classes.gridList} cols={1} spacing={0}>
        {<GridListTile key={largePhoto.img} cols={largePhoto.cols || 1}>
            <img src={largePhoto.img} alt={largePhoto.title} />
            {infoContent}
          </GridListTile>
        }
      </GridList>
    </div>
  );
}

// Copyright 2020, Gautier Marechal, All rights reserved
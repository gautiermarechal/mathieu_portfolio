import React from 'react';
import {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import tileData from '../assets/TiledData';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    padding: '2px',
    paddingTop: '4px',
    width: '100%',
    height: '100%',
  },
  iconLargePhoto: {
    color: 'rgba(255,255,255, 0.9)',
  },
  infoBar: {
    backgroundColor: 'rgba(0,0,0, 0)',  
    fontFamily: "'Rubik', sans-serif",
  },
  infoBarOpened : {
    height: '100%',
  },

}));

export default function GridPhotos_2() {
  const classes = useStyles();
  const largePhoto = tileData[0];
  const [showInfo, setShowInfo] = useState(false);

  useEffect(
    function showPhotoInfo () {
      console.log(showInfo);
      if(!showInfo){
        setShowInfo(true);
        console.log(showInfo);
      }
      else{
        setShowInfo(false);
      }
      console.log('called');
      console.log(showInfo);
    },
    [showInfo]
  );

  const [infoContent, setInfoContent] = useState(
    <GridListTileBar
            className={classes.infoBar}
            title={largePhoto.title}
            actionIcon={
              <IconButton className={classes.iconLargePhoto} onClick={() => showPhotoInfo()}>
                <InfoIcon/>
              </IconButton>
            }
            />
  );

  useEffect(
    function displayNewInfo(){
      if(showInfo){
        setInfoContent(
          <GridListTileBar
                className={classes.infoBarOpened}
                title={largePhoto.title}
                subtitle={largePhoto.title}
                actionIcon={
                  <IconButton className={classes.iconLargePhoto} onClick={() => showPhotoInfo()}>
                    <InfoIcon/>
                  </IconButton>
                }
                />
        );
      };
  }, 
  [showInfo, infoContent]
  );
 

  return (
    <div className={classes.root}>
      <GridList cellHeight={800} className={classes.gridList} cols={2}>
        {<GridListTile key={largePhoto.img} cols={largePhoto.cols || 1}>
            <img src={largePhoto.img} alt={largePhoto.title} />
            {infoContent}
          </GridListTile>
        }
      </GridList>
    </div>
  );
}

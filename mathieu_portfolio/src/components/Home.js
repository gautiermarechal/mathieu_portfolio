import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { Route, Link } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import tileData from '../assets/TiledData_Action';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // padding: '7.5px',
    fontFamily: "'Rubik', sans-serif !important",
  },
  gridList: {
    width: '100%',
    height: '100%',
    fontFamily: "'Rubik', sans-serif",
  },
  itemPaper: {
    width: '100%',
    height: '100%',
  },
  paper:{
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',
    backgroundColor: '#F4F4F4',
    borderRadius: '10px',
    boxShadow: 'none',
  },
  titleHeader: {
    padding: '100px 75px',
  },
  tile:{
    // borderRadius: '7px ',
  },
  tileBar: {
    backgroundColor: 'rgba(0,0,0, 0.3)',
    height: '100%',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgba(0,0,0, 0.5)',
    }
  },
}));

export default function Home(props) {
  const classes = useStyles(); 
  const theme = useTheme();
  const colMatches = useMediaQuery(theme.breakpoints.up('md'));
  const allImages = tileData;
  const [paperTitle, setPaperTitle] = useState([
    'Action',
    'Landscapes',
    'Motions',
    'About Me'
]);
const linkRoutes = ['/action', '/landscapes', '/motions', '/about-me'];

  const getGridListCol = () => {
    if(colMatches){
      return 2;
    }
    else
      return 1;
  }
  
  return (
    <div className={classes.root}>
      <GridList 
        cellHeight={335} 
        className={classes.gridList} 
        cols={getGridListCol()} 
        spacing={0}>
        {paperTitle.map((title, index) => (
          <GridListTile key={title} cols={1} classes={{tile: classes.tile}}>
            <img src={allImages[index].img}></img>
            <Link to={linkRoutes[index]} className={classes.link}>
              <GridListTileBar
              className={classes.tileBar}
              title={
                <h1 className={classes.titleHeader}>{title}</h1>
              }
              />
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

// Copyright 2020, Gautier Marechal, All rights reserved
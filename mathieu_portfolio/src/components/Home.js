import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { Route, Link } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import tileData from '../assets/TiledData_HomeGrid';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    flexGrow: 1,
    padding: theme.spacing(0),
  },
  gridList: {
    width: 'auto',
  },
  itemPaper: {
    width: '100%',
    height: '100%',
  },
  paper:{
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: 'auto',
    backgroundColor: '#F4F4F4',
    borderRadius: '10px',
    boxShadow: 'none',
  },
  titleHeader: {
    padding: '100px 75px',
  },
  tile:{
    display: 'flex'
  },
  tileBar: {
    backgroundColor: 'rgba(0,0,0, 0.3)',
    height: '100%',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgba(0,0,0, 0.5)',
    }
  },
  actualImage: {
    width: '100%',
  },
}));

export default function Home(props) {
  const classes = useStyles(); 
  const theme = useTheme();
  const colMatches = useMediaQuery(theme.breakpoints.up('md'));
  const allImages = tileData;
  const [paperTitle, setPaperTitle] = useState([
    'ACTION',
    'LANDSCAPES',
    'LIFESTYLE',
    'INFORMATION'
]);
const linkRoutes = ['/action', '/landscapes', '/lifestyle', '/about-me'];

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
        cellHeight={'auto'} 
        className={classes.gridList} 
        cols={getGridListCol()} 
        spacing={0}>
        {paperTitle.map((title, index) => (
          <GridListTile key={title} cols={1} className={classes.tile}>
            <img src={allImages[index].img} className={classes.actualImage}></img>
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
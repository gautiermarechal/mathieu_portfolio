import React from 'react';
import { Route, Link } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import IconButton from '@material-ui/core/IconButton';
import Mathieu_Logo from '../assets/Logo_White_Mathieu_Tranchida.png';


const useStyles = makeStyles({
  root: {
    backgroundColor: 'black',
  },
  list: {
    width: 250,
    fontFamily: "'Rubik', sans-serif",
    textDecoration: 'none !important',
    backgroundColor: 'black',
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    float: 'right',
    marginTop: '20px',
    marginBottom: '20px',
    color: 'white',
  },
  iconGroup: {
    margin: '0 auto',
  },
  smallTitle: {
    flexGrow: 1,
    fontFamily: "'Rubik', sans-serif",
    textDecoration: 'none',
  },
});

const ColorButton1 = withStyles(theme => ({
  root: {
    color: 'white',
    fontFamily: "'Rubik', sans-serif",
    height: '100%',
    width: '100%', 
    borderRadius: '0%',
    backgroundColor: 'black',
    border: '5px none',
    borderRadius: '1%',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
      border: '5px none',
      borderColor: 'black',
    },
  },
}))(Button);

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Link to="/action" className={classes.smallTitle}>
          <ListItem key={"Action"}>
            <ListItemText primary={
              <ColorButton1>
              <Typography variant="h5" className={classes.smallTitle}>
              Action
              </Typography>
              </ColorButton1>
            }
            />
          </ListItem>
        </Link>
        <Link to="/landscapes" className={classes.smallTitle}>
          <ListItem key={"Landscapes"}>
            <ListItemText primary={
              <ColorButton1>
              <Typography variant="h5" className={classes.smallTitle}>
              Landscapes
              </Typography>
              </ColorButton1>
            }
            />
          </ListItem>
        </Link>
        <Link to="/lifestyle" className={classes.smallTitle}>
          <ListItem key={"Motions"}>
            <ListItemText primary={
              <ColorButton1>
              <Typography variant="h5" className={classes.smallTitle}>
              Motions
              </Typography>
              </ColorButton1>
            }
            />
          </ListItem>
        </Link>
        <Link to="/about-me" className={classes.smallTitle}>
          <ListItem key={"About-Me"}>
            <ListItemText primary={
              <ColorButton1>
              <Typography variant="h5" className={classes.smallTitle}>
              Information
              </Typography>
              </ColorButton1>
            }
            />
          </ListItem>
        </Link>
        <ListItem>
        <div className={classes.iconGroup}>
        <a href="https://www.instagram.com/mathieutranchida/" target="_blank"><IconButton><InstagramIcon/></IconButton></a>
        <a href="https://www.linkedin.com/in/mathieu-tranchida-17765212b/" target="_blank"><IconButton><LinkedInIcon/></IconButton></a>
        <a href="https://www.youtube.com/user/MrIntelx9" target="_blank"><IconButton><YouTubeIcon/></IconButton></a>
        </div>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('right', true)}  className={classes.menuButton}><MenuIcon/></Button>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)} classes={{ paper: classes.root }}>
        {sideList('right')}
      </Drawer>
    </div>
  );
}

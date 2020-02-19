import React from 'react';
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

const useStyles = makeStyles({
  list: {
    width: 250,
    fontFamily: "'Rubik', sans-serif",
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    float: 'right',
    marginTop: '20px',
    marginBottom: '20px',
  },
  iconGroup: {
    margin: '0 auto',
  }
});

const ColorButton1 = withStyles(theme => ({
  root: {
    color: 'black',
    fontFamily: "'Rubik', sans-serif",
    height: '100%',
    width: '100%', 
    borderRadius: '0%',
    backgroundColor: 'white',
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
        {['Action', 'Landscapes', 'Motions', 'About Me'].map((text) => (
          <ListItem key={text}>
            <ListItemText primary={
              <ColorButton1>
              <Typography variant="h5">
              {text}
              </Typography>
              </ColorButton1>
            } />
          </ListItem>
        ))}
        <ListItem>
        <div className={classes.iconGroup}>
                  <IconButton><InstagramIcon/></IconButton>
                  <IconButton><LinkedInIcon/></IconButton>
                  <IconButton><YouTubeIcon/></IconButton>
                  </div>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('right', true)}  className={classes.menuButton}><MenuIcon/></Button>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
    </div>
  );
}

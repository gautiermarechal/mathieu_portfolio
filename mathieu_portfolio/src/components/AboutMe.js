import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ParagraphAboutMe from './ParagraphAboutMe';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

const useStyles = makeStyles( theme => ({
    root: {
    '& > *': {
        margin: theme.spacing(1),
        width: 300,
        textAlign: 'center',
        backgroundColor: 'white',
        },
    },
    title: {
        padding: '40px',
    },
    messageField: {
        // paddingBottom: '50px',
    },
    paper: {
        margin: theme.spacing(10),
        marginLeft: theme.spacing(30),
        marginRight: theme.spacing(30),
        backgroundColor: '#FFFFFF !important',
        minWidth: '320px',
        boxShadow: 'none',
        [theme.breakpoints.down(850)]: {
            margin: theme.spacing(3),
        },
        [theme.breakpoints.down(330)]: {
            margin: theme.spacing(0),
        },
    },
    iconsGroup: {
        margin: theme.spacing(6),
    },
    icons: {
        fontSize: '75px',
        padding: theme.spacing(3),
        color: theme.palette.secondary,
    },
}));

const ColorButton1 = withStyles(theme => ({
    root: {
      color: 'black',
      fontFamily: "'Rubik', sans-serif",
      height: '50px',
      width: '70%',
      margin: theme.spacing(2), 
      borderRadius: '0%',
      '&:hover': {
        backgroundColor: 'black',
        color: 'white',
        borderColor: 'black',
        margin: theme.spacing(2), 
      },
    },
  }))(Button);

export default function AboutMe() {
    const classes = useStyles();
    return(
    <React.Fragment>
    <ParagraphAboutMe/>
    <Paper elevation={3} className={classes.paper}>
        <Typography variant="h4" align="center" className={classes.title}>Contact Me</Typography>  
    <form className={classes.root} >   
        <TextField id="outlined-basic" label="First Name" variant="outlined"/>
        <TextField id="outlined-basic" label="Last Name" variant="outlined"/>
        <br/>
        <TextField id="outlined-basic" label="Email" variant="outlined"/>
        <br/>
        <TextField 
        className={classes.messageField}
        id="outlined-basic" 
        label="Message" 
        variant="outlined" 
        multiline
        rows="8"
        />
    </form>
    <ColorButton1>Send</ColorButton1>
    </Paper>
        <div className={classes.iconsGroup}>
            <Link to="https://www.instagram.com/mathieutranchida/"><IconButton><InstagramIcon className={classes.icons}/></IconButton></Link>
            <Link to="/linkedin"><IconButton><LinkedInIcon className={classes.icons}/></IconButton></Link>
            <Link to="/youtube"><IconButton><YouTubeIcon className={classes.icons}/></IconButton></Link>
        </div>
    </React.Fragment>
    );
}

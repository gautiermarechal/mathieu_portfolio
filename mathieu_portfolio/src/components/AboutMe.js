import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

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
        margin: theme.spacing(3),
        marginLeft: theme.spacing(30),
        marginRight: theme.spacing(30),
        backgroundColor: 'white',
    },
}));

const ColorButton1 = withStyles(theme => ({
    root: {
      color: 'black',
      fontFamily: "'Rubik', sans-serif",
      height: '50px',
      width: '500px', 
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

export default function AboutMe() {
    const classes = useStyles();
    return(
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
        <ColorButton1>Send</ColorButton1>


    </form>
    </Paper>
    );
}

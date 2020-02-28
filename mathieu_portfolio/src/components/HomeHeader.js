import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: theme.spacing(1),
        backgroundColor: 'rgb(0,0,0,0)',
        color: 'white',
        boxShadow: 'none',
        fontFamily: "'Rubik', sans-serif",
        flexGrow: 1,
        textAlign: 'left',
    },
    typo: {
        padding: '20px',
        width: '142px',
        backgroundColor: 'rgb(0,0,0,0.8)',
    },
}));

export default function HomeHeader() {
    const classes = useStyles();
    return(
    <AppBar className={classes.root} >
        <Typography variant='subtitle' className={classes.typo}>Mathieu Tranchida</Typography> 
    </AppBar>       
    );
}
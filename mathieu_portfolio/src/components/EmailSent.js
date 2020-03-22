import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles( theme => ({
    root: {
        flexGrow: 1,
    },
    text: {
        flexGrow: 1,
        margin: theme.spacing(15),
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(3),
        }
    },
}));

export default function EmailSent() {
    const classes = useStyles();
    return(
        <Container className={classes.root}>
        <Typography variant="h4" className={classes.text}>
            <Typography variant="h2">Success!</Typography>
            Your email has been sent successfully. You have received a copy of your email
            If you cannot find it, be sure to check your spam folder. 
            Thanks for getting in touch with me, I'll reply as soon as possible!
            I am looking forward speaking with you.
            See you!
        </Typography>
        </Container>
    );
}

// Copyright 2020, Gautier Marechal, All rights reserved
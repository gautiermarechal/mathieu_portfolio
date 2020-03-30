import React from 'react';
import '../App.css';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root:{
        paddingLeft: '100px',
        paddingRight: '100px',
        paddingTop: '20px',
        paddingBottom: '50px',
        backgroundColor: 'white',
        [theme.breakpoints.down('md')]: {
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingTop: '35px',
            paddingBottom: '25px',
        },
    },
    title: {
        padding: '10px',
    },
}));

export default function Home_Paragraph(){
    const classes = useStyles();
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('xs'));

    function changeTitle(){
        if(smallScreen) {
            return "h4";
        }
        else {
            return "h3";
        }
    }


    return(
        <Box className={classes.root}>
            <Typography variant={changeTitle()} align={'center'} className={classes.title}>
                    TESTIMONIALS
            </Typography>
            <br/>
            <Typography variant='body1' align={'justify'}>
            &emsp;&emsp;&emsp;Mathieu is a very professional photographer. In scenarios like my movie "From Switzerland With Love", the priority is the video and Mathieu knew how to immortalize each moment of the sessions while disturbing the cameramen in no way. From lifestyle to action, he produced quality content that I am extremely happy with.
            <br/>
            <br/>
            &emsp;&emsp;&emsp;Mathieu est un photographe très professionnel. Dans un tournage comme pour mon film « From Switzerland With Love », l’important est d’abord la vidéo et Mathieu a su immortaliser chaque moment des sessions tout en dérangeant aucunement les caméramans. Du lifestyle à l’action, il a produit du contenu du qualité et dont je suis extrêmement content.
            <br/>
            <br/>
            <strong>- Laurent de Martin, Professional Skier & Producer</strong>
            </Typography>
        </Box>
    );
}
import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import imageMath from '../assets/photos/Mathieu_Profile.jpg';
import signatureMathAboutMe from '../assets/Signature_AboutMe.png';


const useStyles = makeStyles( theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'white !important',
        overFlow: 'hidden',
    },
    tileParagraph: {
        backgroundColor: 'black',
        color: 'white',
        fontSize: '1vw',
        [theme.breakpoints.down('md')]: {
            height: '1900px',
        }
    },
    paragraph: {
        paddingLeft: '35px',
        paddingRight: '35px',
        paddingTop: '35px',
        paddingBottom: '35px',
        textAlign: 'justify',
        overflow: 'visible',
        lineHeight: '2',
        [theme.breakpoints.down('960')]: {
            textAlign: 'justify',
            paddingLeft: '30px',
            paddingRight: '30px',
            paddingTop: '120px',
            paddingBottom: '10px',
        },
        [theme.breakpoints.down('xs')]: {
            textAlign: 'justify',
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingTop: '15%',
            paddingBottom: '10px',
        },
    },
    mathSignature: {
        height: '150x',
        width: '150px',
        float: 'right',
    },
    mathImage: {
        [theme.breakpoints.down('1088')]: {
            width: '100%',  
        },

    },
    titleFont: {
        fontFamily: 'GT America Expanded Black',
    },
}));

export default function ParagraphAboutMe() {
    const classes = useStyles();
    // const theme = useTheme();
    const theme = useTheme();
    const colMatches = useMediaQuery(theme.breakpoints.up('1100'));
    const heightMatches = useMediaQuery(theme.breakpoints.down('1100'));
    const smallScreen = useMediaQuery(theme.breakpoints.down('xs'));

    function changeTitle(){
        if(smallScreen) {
            return "h4";
        }
        else {
            return "h3";
        }
    }

    const getGridListCol = () => {
        if(colMatches){
          return 2;
        }
        else
          return 1;
      }

    const getGridListHeight = () => {
    if(heightMatches){
        return 'auto';
    }
    else
        return 900;
    }

    return(
        <GridList className={classes.root} cellHeight={getGridListHeight()} spacing={0} cols={getGridListCol()}>
            <GridListTile>
                <img src={imageMath} className={classes.mathImage}/>
            </GridListTile>
            <GridListTile className={classes.tileParagraph}>
                <Box className={classes.paragraph}>
                <Typography variant={changeTitle()} align={'left'} className={classes.titleFont}>
                    ABOUT ME
                </Typography>
                <br/>
                <Typography variant="body1">
                &emsp;&emsp;&emsp; My name is Mathieu Tranchida and I’m a photographer. I was born in France in 1998 and grew up in Switzerland. At a very young age, I discovered a passion for the mountains and extreme sports through ski movies. My friends and I loved it so much that started to film each other going off cliffs and doing tricks on skis. It was fun for a while, but I soon realized that I had more fun shooting pictures than getting hurt in front of the camera. Since that time, I never stopped taking pictures.
                <br/>
                <br/>
                &emsp;&emsp;&emsp; In 2017, I decided to leave Europe and study abroad to challenge myself. I made it to Concordia University in Montreal, where I started a business degree to acquire the skills to run my own production company. During my degree, I did my best to broaden my horizons on photography and out of the mountains. I reached out to many associations to shoot their events. Leading me to capture a wide variety of subjects including team sports, fashion shows, galas, conferences and clothing lines.
                <br/> 
                <br/>
                &emsp;&emsp;&emsp; More recently, I got the chance to work with companies and professional athletes. Allowing me to develop new skills and understand the power of images in a commercial setting. Arc’teryx Montreal was the first company to trust me with photography projects and we developed close ties throughout the years.
                <br/> 
                <br/>
                &emsp;&emsp;&emsp; If you have any questions, interests or business inquiries, feel free to contact me through the “Info” section of the website. There, you will be able to find a list of companies I worked with, testimonials from professional athletes, and more…  For the rest, I’ll let my pictures speak for myself!
                <br/>
                </Typography>
                <img src={signatureMathAboutMe} className={classes.mathSignature}/>
                </Box>
            </GridListTile>
        </GridList>
    );
}

// Copyright 2020, Gautier Marechal, All rights reserved
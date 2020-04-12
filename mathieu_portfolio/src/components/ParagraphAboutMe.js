import React from 'react';
import '../App.css';
import { makeStyles, ThemeProvider,  } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import imageMath from '../assets/photos/information/©MathieuTranchida_Web_Information_Headshot.jpg';
import signatureMathAboutMe from '../assets/Signature_AboutMe.png';
import { createMuiTheme } from '@material-ui/core/styles';
// FONTS IMPORT --------------------------------------------------
import GTAmerciaStandardRegular from '../assets/fonts/GT-America-Standard-Regular.woff2';
import GTAmerciaStandardRegularItalic from '../assets/fonts/GT-America-Standard-Regular-Italic.woff2';
import GTAmerciaExpandedBlack from '../assets/fonts/GT-America-Extended-Black.woff2';
import GTAmerciaExpandedBlackItalic from '../assets/fonts/GT-America-Expanded-Black-Italic.woff2';
// ---------------------------------------------------------------

const gTAmerciaStandardRegular = {
    fontFamily: 'GT America Standard Regular',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
      local('GT America'),
      local('GT-America-Standard-Regular'),
      url(${GTAmerciaStandardRegular}) format('woff2')
    `,
  };
  
  const gTAmerciaStandardRegularItalic = {
    fontFamily: 'GT America Standard Regular Italic',
    fontStyle: 'italic',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
      local('GT America'),
      local('GT-America-Standard-Regular-Italic'),
      url(${GTAmerciaStandardRegularItalic}) format('woff2')
    `,
  };
  
  const gTAmerciaExpandedBlack = {
    fontFamily: 'GT America Extended Black',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
      local('GT America'),
      local('GT-America-Extended-Black'),
      url(${GTAmerciaExpandedBlack}) format('woff2')
    `,
  };
  
  const gTAmerciaExpandedBlackItalic = {
    fontFamily: 'GT America Expanded Black Italic',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
      local('GT America'),
      local('GT-America-Standard-Expanded-Black-Italic'),
      url(${GTAmerciaExpandedBlackItalic}) format('woff2')
    `,
  };

const themeStandardRegular = createMuiTheme({
    typography: {
      fontFamily: [
        'GT America Standard Regular'
      ].join(','),
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [gTAmerciaStandardRegular],
        },
      },
    },
  });

  const themeStandardRegularItalic = createMuiTheme({
    typography: {
      fontFamily: [
        'GT America Standard Regular Italic',
      ].join(','),
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [gTAmerciaStandardRegularItalic],
        },
      },
    },
  });

const themeExpandedBlack = createMuiTheme({
    typography: {
      fontFamily: [
        'GT America Expanded Black',
      ].join(','),
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [gTAmerciaExpandedBlack],
        },
      },
    },
  });

  const themeExpandedBlackItalic = createMuiTheme({
    typography: {
      fontFamily: [
        'GT America Expanded Black Italic',
      ].join(','),
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [gTAmerciaExpandedBlackItalic],
        },
      },
    },
  });


const useStyles = makeStyles( theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'white !important',
        overFlow: 'hidden',
    },
    tileParagraph: {
        backgroundColor: 'black',
        color: 'white',
        fontSize: '0vw',
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
        lineHeight: '2 !important',
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
        fontSize: '5vw',
      //   [theme.breakpoints.down('1165')]: {
      //     display: 'none',  
      // },
    },
    mathImage: {
        [theme.breakpoints.down('1100')]: {
            width: '100%',  
        },
    },
    aboutMeTitleFont: {
        fontFamily: 'GT America Standard Regular'
    }
}));

export default function ParagraphAboutMe() {
    const classes = useStyles();
    const theme = useTheme();
    const colMatches = useMediaQuery(theme.breakpoints.up('1100'));
    const heightMatches = useMediaQuery(theme.breakpoints.down('1100'));
    const smallScreen = useMediaQuery(theme.breakpoints.down('xs'));

    function changeTitle(){
        if(smallScreen) {
            return "subtitle1";
        }
        else {
            return "h6";
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
        return 1050;
    }

    return(
        <ThemeProvider theme={themeStandardRegular}>
        <GridList className={classes.root} cellHeight={getGridListHeight()} spacing={0} cols={getGridListCol()}>
            <GridListTile>
                <img src={imageMath} className={classes.mathImage}/>
            </GridListTile>
            <GridListTile className={classes.tileParagraph}>
                <Box className={classes.paragraph}>
                <ThemeProvider theme={themeExpandedBlackItalic}>
                <Typography variant={changeTitle()} align={'left'}>
                    MY STORY
                </Typography>
                </ThemeProvider>
                <br/>
                <ThemeProvider theme={themeStandardRegular}>
                <Typography variant="body1" style={{lineHeight: '1.75'}}>
                {/* <strong>My Story</strong> */}
                {/* <br/> */}
                &emsp;&emsp;&emsp; My name is Mathieu Tranchida and I’m a photographer. I was born in France, grew up in Switzerland and moved to Montreal in 2016 to complete a Business Degree at Concordia University. After spending most of my childhood outdoors, skiing in the mountains. Early on, I developed an interest for sport images through ski movies and magazines. Until I was 18 years old, I had never thought about taking pictures for a living. However, after an injury that ended my season, I chose to pick up a camera and shoot footage of my friends. It changed my life. Since then, I’ve taken my camera with me anywhere I go.
                <br/>
                <br/>
                <ThemeProvider theme={themeExpandedBlackItalic}>
                <Typography variant={changeTitle()} align={'left'}>
                  MY EXPERIENCE
                </Typography>
                </ThemeProvider>
                &emsp;&emsp;&emsp; I have been shooting photos professionally since 2017. In these last four years, I have produced sport, event, film, product and portrait shoots, working with several globally known brands such as: Arc’teryx, 686, and Psicobloc. I have also been published in online articles with magazines L’équipe and Skipass. During this time I have come to realize my strengths lay in capturing movement in sports. 
                <br/> 
                <br/>
                &emsp;&emsp;&emsp; I am very comfortable with my gear in the outdoors and am able to safely carry heavy backpacks through the backcountry. As an outdoor photographer, you must be able to react in difficult situations. Consequently, I have trained to become autonomous with the outdoors. I am a certified Advanced Wilderness First Aider (AWFA). I also have avalanche training and experience in moving through difficult terrain to effectuate rescues. For more information on my experience in the outdoors, please visit the testimonials section. 
                <br/> 
                <br/>
                {/* <ThemeProvider theme={themeExpandedBlackItalic}>
                <Typography variant={changeTitle()} align={'left'}>
                  MY SERVICES
                </Typography>
                </ThemeProvider>
                &emsp;&emsp;&emsp; You are a company, an athlete or an individual with an outdoor project in mind? Send me an email through the <strong>contact</strong> section below. I am always excited to get involved with new people and their projects.
                <br/>
                You want to buy a print or a digital image? Send me an email through the <strong>contact</strong> section below.
                <br/>
                Please note that pricing depends on the needs and duration of your project. 
                <br/>
                Any other inquiry should be done though the contact section.
                <br/> */}
                </Typography>
                </ThemeProvider>
                <img src={signatureMathAboutMe} className={classes.mathSignature} draggable="false"/>
                </Box>
            </GridListTile>
        </GridList>
        </ThemeProvider>
    );
}

// Copyright 2020, Gautier Marechal, All rights reserved
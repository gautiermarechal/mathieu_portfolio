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
        fontSize: 'large',
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
        [theme.breakpoints.down('1205')]: {
          fontSize: '1rem', 
      },
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
    },
    mathImage: {
        [theme.breakpoints.down('1100')]: {
            width: '100%',  
        },
    },
    aboutMeTitleFont: {
        fontFamily: 'GT America Standard Regular'
    },
    text: {
      [theme.breakpoints.up('1686')]: {
        fontSize: '1.1vw !important',
      },
      [theme.breakpoints.up('2021')]: {
        lineHeight: '1.23 !important',
      },
    },
}));

export default function ParagraphAboutMe() {
    const classes = useStyles();
    const theme = useTheme();
    const colMatches = useMediaQuery(theme.breakpoints.up('1120'));
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
        return 900;
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
                  ABOUT
                </Typography>
                </ThemeProvider>
                <ThemeProvider theme={themeStandardRegular}>
                <Typography variant="body1" style={{lineHeight: '1.75',}} className={classes.text}>
                {/* <strong>My Story</strong> */}
                {/* <br/> */}
                &emsp;&emsp;&emsp; Mathieu Tranchida is a professional outdoor photographer specialized in capturing movement in sports. He spends most of his time between Montreal and his home country of Switzerland.
                <br/>
                <br/>
                <ThemeProvider theme={themeExpandedBlackItalic}>
                </ThemeProvider>
                &emsp;&emsp;&emsp; After spending most of his childhood outdoors, Mathieu developed an interest in sport images through ski movies and magazines. Until he was 18 years old, Matt had never thought about being behind the lens. However, after an injury that ended his ski season, he chose to pick up a camera and shoot footage of his friends. Since then, Mathieu never stopped taking pictures.
                <br/> 
                <br/>
                &emsp;&emsp;&emsp; Mathieu has been shooting photos professionally since 2017. In the last four years, Mathieu mainly produced sport, product and event images for brands such as Arc’teryx and Psicobloc. He has also been published in online articles with French magazines L’équipe and Skipass. 
                <br/> 
                <br/>
                &emsp;&emsp;&emsp; Over the years, Mathieu has proved to be comfortable in the outdoors and showed the ability to operate in exposed terrain with professional camera equipment. Mathieu is a certified Advanced Wilderness First Aider (AWFA) and has avalanche training. For more information about his experience in the outdoors, please visit the <a href="#testimonials" style={{color: 'inherit', textDecoration: 'inherit'}}><strong>testimonials</strong></a> section or send an email through the contact section.
                <br/> 
                <br/>
                &emsp;&emsp;&emsp; <a href="#contact" style={{color: 'inherit', textDecoration: 'inherit'}}><strong>Contact</strong></a> section for quotes on projects and prints below.
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
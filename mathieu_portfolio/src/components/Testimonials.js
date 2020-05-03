import React from 'react';
import '../App.css';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';
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
        'GT America Extended Black',
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
            return "h6";
        }
        else {
            return "h5";
        }
    }


    return(
        <ThemeProvider theme={themeStandardRegular}>
        <Box className={classes.root}>
            <ThemeProvider theme={themeExpandedBlack}>
            <Typography variant={changeTitle()} align={'center'} className={classes.title} id="testimonials">
                    TESTIMONIALS
            </Typography>
            </ThemeProvider>
            <br/>
            <Typography variant='body1' align={'justify'}>
            &emsp;&emsp;&emsp;Mathieu is a very professional photographer. During the shoot of our movie "From Switzerland With Love", the priority is first and foremost the film and Mathieu knew how to immortalize each moment of the sessions without disturbing the cameramen in any way. From lifestyle to action, he produced quality content that I am extremely happy with.
            <br/>
            <br/>
            <ThemeProvider theme={themeStandardRegularItalic}><Typography variant='body1' align={'justify'}><strong>Laurent de Martin, Professional Skier & Producer</strong></Typography></ThemeProvider>
            <br/>
            <Divider/>
            <br/>
            &emsp;&emsp;&emsp;Very fortunate to have met Mathieu through Arc'teryx! Over the years we have done a variety of shoots together and he is always able to create a feeling of exhilaration and intensity in his work. It has been such a pleasure to shoot training, product, lifestyle, and outdoor projects with him. Looking forward to the many more to come!
            <br/>
            <br/>
            <ThemeProvider theme={themeStandardRegularItalic}><Typography variant='body1' align={'justify'}><strong>Zoe Beauchemin, Climbing Athlete for Arc’teryx and Allez-up</strong></Typography></ThemeProvider>
            <br/>
            <Divider/>
            <br/>
            &emsp;&emsp;&emsp;It was a pleasure to work with Mathieu. He’s an outstanding photographer who knows exactly how to get the “money shot”. All his photos are created with deliberate intention. He is able to combine the needs of his client with his artistic vision to create spectacular photos. He achieves what few others do as well, which is to capture the atmosphere and the emotion of an event.
            <br/>
            <br/>
            <ThemeProvider theme={themeStandardRegularItalic}><Typography variant='body1' align={'justify'}><strong>Alexa Fay, Digital Marketing Director of Psicobloc Open Series</strong></Typography></ThemeProvider>
            <br/>
            <Divider/>
            <br/>
            &emsp;&emsp;&emsp;Mathieu is professional and always at the top of his game. His images are technically beautiful. He's always wiling to learn new skills to adapt to customer needs. He is capable of creating the right settings no matter the request or environment.
            <br/>
            <br/>
            <ThemeProvider theme={themeStandardRegularItalic}><Typography variant='body1' align={'justify'}><strong>Katherine Boivin, Marketing Lead at Arc’teryx Montreal</strong></Typography></ThemeProvider>            
            <br/>
            <Divider/>
            <br/>
            &emsp;&emsp;&emsp;Mat’s artistic vision always blows my mind. His enthusiasm and passion for the work he does is extremely inspiring. He never takes no for an answer and is constantly trying to come up with new ideas and new ways to take his work to a new level. He really goes above and beyond and takes pride in creating the best possible outcome in whatever he’s working on. I have had the pleasure of working together with Mat on a few projects. He is very easy to work with, contributing fresh, new ideas while still capturing the essence of whatever concept he is working on. Collaborating with him is an experience I always look forward to.
            <br/>
            <br/>
            <ThemeProvider theme={themeStandardRegularItalic}><Typography variant='body1' align={'justify'}><strong>Aidan Cameron, Content Creator</strong></Typography></ThemeProvider>            
            </Typography>
        </Box>
        </ThemeProvider>
    );
}
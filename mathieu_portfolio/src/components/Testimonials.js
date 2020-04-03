import React from 'react';
import '../App.css';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
// FONTS IMPORT --------------------------------------------------
import GTAmerciaStandardRegular from '../assets/fonts/GT-America-Standard-Regular.woff2';
import GTAmerciaStandardRegularItalic from '../assets/fonts/GT-America-Standard-Regular-Italic.woff2';
import GTAmerciaExpandedBlack from '../assets/fonts/GT-America-Expanded-Black.woff2';
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
    fontFamily: 'GT America Expanded Black',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
      local('GT America'),
      local('GT-America-Standard-Expanded-Black'),
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
        <ThemeProvider theme={themeStandardRegular}>
        <Box className={classes.root}>
            <ThemeProvider theme={themeExpandedBlack}>
            <Typography variant={changeTitle()} align={'center'} className={classes.title}>
                    TESTIMONIALS
            </Typography>
            </ThemeProvider>
            <br/>
            <Typography variant='body1' align={'justify'}>
            &emsp;&emsp;&emsp;Mathieu is a very professional photographer. In scenarios like my movie "From Switzerland With Love", the priority is the video and Mathieu knew how to immortalize each moment of the sessions while disturbing the cameramen in no way. From lifestyle to action, he produced quality content that I am extremely happy with.
            <br/>
            <br/>
            <ThemeProvider theme={themeStandardRegularItalic}><Typography variant='body1' align={'justify'}>&emsp;&emsp;&emsp;Mathieu est un photographe très professionnel. Dans un tournage comme pour mon film « From Switzerland With Love », l’important est d’abord la vidéo et Mathieu a su immortaliser chaque moment des sessions tout en dérangeant aucunement les caméramans. Du lifestyle à l’action, il a produit du contenu du qualité et dont je suis extrêmement content.</Typography></ThemeProvider>
            <br/>
            <br/>
            <ThemeProvider theme={themeStandardRegularItalic}><Typography variant='body1' align={'justify'}><strong>Laurent de Martin, Professional Skier & Producer</strong></Typography></ThemeProvider>
            <br/>
            <br/>
            &emsp;&emsp;&emsp;Very fortunate to have met Mathieu through Arc'teryx! Over the years we have done a variety of shoots together and he is always able to create a feeling of exhilaration and intensity in his work. It has been such a pleasure to shoot training, product, lifestyle, and outdoor projects with him. Looking forward to the many more to come!
            <br/>
            <br/>
            <ThemeProvider theme={themeStandardRegularItalic}><Typography variant='body1' align={'justify'}>&emsp;&emsp;&emsp;Très chanceuse d'avoir rencontré Mathieu via Arc'teryx! Au fil des années, nous avons réalisé une variété de tournages ensemble et il a toujours été capable de créer un sentiment d'exaltation et d'intensité dans son travail. Ce fut un plaisir de tourner avec lui sur des projets d'entraînement, de produit, de style de vie et de plein air. Au plaisir des nombreux autres à venir!</Typography></ThemeProvider>
            <br/>
            <br/>
            <ThemeProvider theme={themeStandardRegularItalic}><Typography variant='body1' align={'justify'}><strong>Zoe Beauchemin, Climbing Athlete for Arc’teryx and Allez-up</strong></Typography></ThemeProvider>
            <br/>
            <br/>
            &emsp;&emsp;&emsp;It was a pleasure to work with Mathieu. He’s an outstanding photographer who knows exactly how to get the “money shot”. All his photos are created with deliberate intention. He is able to combine the needs of his client with his artistic vision to create spectacular photos. He achieves what few others do as well, which is to capture the atmosphere and the emotion of an event.
            <br/>
            <br/>
            <ThemeProvider theme={themeStandardRegularItalic}><Typography variant='body1' align={'justify'}>&emsp;&emsp;&emsp;C’était un plaisir de travailler avec Mathieu. C’est un photographe hors pair qui sait exactement comment obtenir la “money shot”. Toutes ses photos sont créées avec intention. Il réussit à jumeler les besoins de son client avec sa vision artistique pour créer des photos spectaculaires. Il arrive à faire ce que peu de photographes réussissent aussi bien et c’est de capturer l’ambiance et l’émotion d’un événement.</Typography></ThemeProvider>
            <br/>
            <br/>
            <ThemeProvider theme={themeStandardRegularItalic}><Typography variant='body1' align={'justify'}><strong>Alexa Fay, Digital Marketing Director of Psicobloc Open Series</strong></Typography></ThemeProvider>
            <br/>
            <br/>
            &emsp;&emsp;&emsp;Mathieu is professional and always at the top of his game. His images are technically beautiful. He's always wiling to learn new skills to adapt to customer needs. He is capable of creating the right settings no matter the request or environment.
            <br/>
            <br/>
            <ThemeProvider theme={themeStandardRegularItalic}><Typography variant='body1' align={'justify'}>&emsp;&emsp;&emsp;Mathieu est professionnel et toujours au sommet de son art. Ses images sont techniquement belles. Il est toujours prêt à acquérir de nouvelles compétences pour s'adapter aux besoins des clients. Il est capable de créer les bons paramètres, peu importe la demande ou l'environnement.</Typography></ThemeProvider>
            <br/>
            <br/>
            <ThemeProvider theme={themeStandardRegularItalic}><Typography variant='body1' align={'justify'}><strong>Katherine Boivin, Marketing Lead at Arc’teryx Montreal</strong></Typography></ThemeProvider>            
            </Typography>
        </Box>
        </ThemeProvider>
    );
}
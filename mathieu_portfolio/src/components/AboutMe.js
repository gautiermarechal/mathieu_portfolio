import React, {useState} from 'react';
import '../App.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ParagraphAboutMe from './ParagraphAboutMe';
import { Redirect } from 'react-router-dom';
import * as emailjs from 'emailjs-com';
import Testimonials from './Testimonials';
import Collaboration from './Collaborations';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CopyrightClick from '../assets/CopyrightClick';
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

const useStyles = makeStyles( theme => ({
    root: {
    '& > *': {
        margin: theme.spacing(1),
        width: 300,
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: '0px',
        },
        borderRadius: '0px',
    },
    title: {
        padding: '40px',
    },
    messageField: {
        borderColor: 'black',
        borderRadius: '0px',
        width: '400px',
        [theme.breakpoints.down('xs')]: {
            width: '300px',
        },
        '& .Mui-Paper-root': {
          borderRadius: '0px',
        }
    },
    paper: {
        margin: theme.spacing(0),
        backgroundColor: '#FFFFFF !important',
        minWidth: '320px',
        boxShadow: 'none',
        [theme.breakpoints.down(850)]: {
            margin: theme.spacing(0),
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
    inputField: {
        width: '400px',
        [theme.breakpoints.down('xs')]: {
            width: '300px',
        },
    },
}));

const CustomFields = withStyles({
    root: {
        '.MuiFormControl-root': {
                borderColor: 'black',
                borderRadius: '0px',
        },
        '.MuiTextField-root': {
            '& fieldset': {
                borderColor: 'black',
              },
        },
    }
})(TextField);

const ColorButton1 = withStyles(theme => ({
    root: {
      color: 'black',
      height: '50px',
      width: '90%',
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

export default function AboutMe(props) {
    const classes = useStyles(props);

    const [firstName, setFirstName] = useState('');
    const [firstNameEntered, setFirstNameEntered] = useState(false);
    const [firstNameError, setFirstNameError] = useState('');

    const [lastName, setLastName] = useState('');
    const [lastNameEntered, setLastNameEntered] = useState(false);
    const [lastNameError, setLastNameError] = useState();

    const [email, setEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [emailError, setEmailError] = useState();

    const [message, setMessage] = useState('');
    const [messageEntered, setMessageEntered] = useState(false);
    const [messageError, setmessageError] = useState('');

    const [submitted, setSubmitted] = useState(false);

    function handleEmailValidity(e) {
        setEmail(e.target.value);
        email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)? setEmailIsValid(true) : setEmailIsValid(false);

    };

    function handleFirstNameValidity(e){
        setFirstName(e.target.value);
        if(e.target.value === null || e.target.value === ''){
            setFirstNameEntered(false);
        }
        else setFirstNameEntered(true);
    };

    function handleLastNameValidity(e){
        setLastName(e.target.value);
        if(e.target.value === null || e.target.value === ''){
            setLastNameEntered(false);
        }
        else setLastNameEntered(true);
    };

    function handleMessageValidity(e){
        setMessage(e.target.value);
        if(e.target.value === null || e.target.value === ''){
            setMessageEntered(false);
        }
        else setMessageEntered(true);
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(firstName);
        console.log(firstNameEntered);

        if(emailIsValid){
            setEmailError(null);
        }
        else{
            setEmailError('Invalid email address.');
        }
        if(firstNameEntered){
            setFirstNameError(null)
        }
        else{
            setFirstNameError('Please enter your first name.')
        }
        if(lastNameEntered){
            setLastNameError(null)
        }
        else{
            setLastNameError('Please enter your last name.')
        }
        if(messageEntered){
            setmessageError(null)
        }
        else{
            setmessageError('Please enter your message.')
        }

        if(emailIsValid && firstNameEntered && lastNameEntered && messageEntered){
            e.preventDefault();
        
            let templateParams ={
                from_name: email,
                to_name: 'gaut.marechal@gmail.com',
                message_html: message,
                form_firstname: firstName,
                form_lastname: lastName,
            }
    
            emailjs.send(
                'gmail',
                'template_WDXJtXKk',
                templateParams,
                'user_o37wsc4OLEGzp03XSyGed'
            )
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            }
            )
    
            resetForm();
    
            setSubmitted(true);
        }

    }

    function resetForm() {
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
    }

    return(
    <ThemeProvider theme ={themeStandardRegular}>
    <React.Fragment>
    <ParagraphAboutMe/>
    <Testimonials/>
    <ThemeProvider theme={themeExpandedBlack}><Collaboration/></ThemeProvider>
    <Paper elevation={3} className={classes.paper}>
        <ThemeProvider theme={themeExpandedBlack}><Typography variant="h5" align="center" className={classes.title}>CONTACT</Typography></ThemeProvider>
        <ThemeProvider theme={themeStandardRegularItalic}><Typography variant="h5" align="center" >Contact me if you want to book a shoot, buy a picture, chat or anything else</Typography></ThemeProvider>
    <form className={classes.root} noValidate onSubmit={(e) => handleSubmit(e)}>
        <TextField 
        classes={{root: classes.inputField}}
        id="outlined-basic" 
        label="First Name" 
        variant="standard"
        required={true}
        value={firstName}
        onChange={(event) => handleFirstNameValidity(event)}
        helperText={firstNameError}/>
        <br/>
        <TextField 
        classes={{root: classes.inputField}}
        id="outlined-basic" 
        label="Last Name" 
        variant="standard"
        required={true}
        value={lastName}
        onChange={(event) => handleLastNameValidity(event)}
        helperText={lastNameError}/>
        <br/>
        <TextField 
        classes={{root: classes.inputField}}
        id="outlined-basic" 
        label="Email" 
        variant="standard"
        required={true}
        value={email}
        onChange={(event) => handleEmailValidity(event)}
        helperText={emailError}/>
        <br/>
        <TextField
        classes={{root: classes.messageField}} 
        id="outlined-basic" 
        label="Message" 
        variant="outlined" 
        required={true}
        multiline
        rows="12"
        value={message}
        onChange={(event) => handleMessageValidity(event)}
        helperText={messageError}/>
        <ThemeProvider theme={themeExpandedBlack}><ColorButton1 type={"submit"}>Send</ColorButton1></ThemeProvider>
    </form>
    </Paper>
    {submitted ? <Redirect to="/email-sent"/> : null}
    </React.Fragment>
    </ThemeProvider>
    );
}

import React, {useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ParagraphAboutMe from './ParagraphAboutMe';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import IconButton from '@material-ui/core/IconButton';
import { Link, Redirect } from 'react-router-dom';
import * as emailjs from 'emailjs-com';
import { green } from '@material-ui/core/colors';

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
        margin: theme.spacing(10),
        marginLeft: theme.spacing(30),
        marginRight: theme.spacing(30),
        backgroundColor: '#FFFFFF !important',
        minWidth: '320px',
        boxShadow: 'none',
        [theme.breakpoints.down(850)]: {
            margin: theme.spacing(3),
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
    inputColor: {
        color: green,
    }
}));

const ColorButton1 = withStyles(theme => ({
    root: {
      color: 'black',
      fontFamily: "'Rubik', sans-serif",
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

export default function AboutMe() {
    const classes = useStyles();

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
    <React.Fragment>
    <ParagraphAboutMe/>
    <Paper elevation={3} className={classes.paper}>
        <Typography variant="h4" align="center" className={classes.title}>Contact Me</Typography>  
    <form className={classes.root} noValidate onSubmit={(e) => handleSubmit(e)}>   
        <TextField 
        className={classes.inputColor}
        id="outlined-basic" 
        label="First Name" 
        variant="standard"
        required={true}
        value={firstName}
        onChange={(event) => handleFirstNameValidity(event)}
        helperText={firstNameError}/>
        <TextField 
        id="outlined-basic" 
        label="Last Name" 
        variant="standard"
        required={true}
        value={lastName}
        onChange={(event) => handleLastNameValidity(event)}
        helperText={lastNameError}/>
        <br/>
        <TextField 
        id="outlined-basic" 
        label="Email" 
        variant="standard"
        required={true}
        value={email}
        onChange={(event) => handleEmailValidity(event)}
        helperText={emailError}/>
        <br/>
        <TextField 
        className={classes.messageField}
        id="outlined-basic" 
        label="Message" 
        variant="standard" 
        required={true}
        multiline
        rows="10"
        value={message}
        onChange={(event) => handleMessageValidity(event)}
        helperText={messageError}/>
        <ColorButton1 type={"submit"}>Send</ColorButton1>
    </form>
    </Paper>
        <div className={classes.iconsGroup}>
            <a href="https://www.instagram.com/mathieutranchida/" target="_blank"><IconButton><InstagramIcon className={classes.icons}/></IconButton></a>
            <a href="https://www.linkedin.com/in/mathieu-tranchida-17765212b/" target="_blank"><IconButton><LinkedInIcon className={classes.icons}/></IconButton></a>
            <a href="https://www.youtube.com/user/MrIntelx9" target="_blank"><IconButton><YouTubeIcon className={classes.icons}/></IconButton></a>
        </div>
    {submitted ? <Redirect to="/email-sent"/> : null}
    </React.Fragment>
    );
}

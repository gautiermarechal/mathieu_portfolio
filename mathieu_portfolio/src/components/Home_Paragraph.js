import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root:{
        paddingLeft: '100px',
        paddingRight: '100px',
        paddingTop: '50px',
        paddingBottom: '50px',
    },
    iconGroup: {
        paddingTop: '35px',
    },
}));

export default function Home_Paragraph(){
    const classes = useStyles();
    return(
        <Box className={classes.root}>
            <Typography variant='h5' align={'left'}>
                Hi there!
            </Typography>
            <Typography variant='body1' align={'justify'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue eget arcu dictum varius duis at. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Urna neque viverra justo nec ultrices dui sapien eget. Aliquam ut porttitor leo a diam sollicitudin tempor id. Id aliquet lectus proin nibh nisl condimentum id venenatis a. A diam maecenas sed enim ut. Tortor id aliquet lectus proin nibh nisl. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Eleifend donec pretium vulputate sapien nec. Tortor dignissim convallis aenean et tortor at risus. At tellus at urna condimentum mattis pellentesque.
            </Typography>
            <div className={classes.iconGroup}>
                  <Link to="/instagram"><IconButton><InstagramIcon/></IconButton></Link>
                  <Link to="/linkedin"><IconButton><LinkedInIcon/></IconButton></Link>
                  <Link to="/youtube"><IconButton><YouTubeIcon/></IconButton></Link>
            </div>
        </Box>
    );
}
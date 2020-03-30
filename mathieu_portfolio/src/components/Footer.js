import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  iconGroup: {
    marginTop: '8px',
    color: 'white',
    padding: theme.spacing(2),
    '&:hover': {
      backgroundColor: 'white',
      color: 'black'
    }
  },
  icon: {
    fontSize: '3rem',
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
      <Box>
        <Typography 
        component="body" 
        style={{ backgroundColor: 'black', height: '200px', width: 'auto' }}
        align="center">
            <Typography 
                variant="subtitle1" 
                style={{color: 'white', paddingTop: '60px'}}>Mathieu Tranchida - 2020 All rights Reserved ©
            </Typography>
                  <div>
                  <a href="https://www.instagram.com/mathieutranchida/" target="_blank"><IconButton classes={{root: classes.iconGroup}}><InstagramIcon classes={{root: classes.icon}}/></IconButton></a>
                  <a href="https://www.linkedin.com/in/mathieu-tranchida-17765212b/" target="_blank"><IconButton classes={{root: classes.iconGroup}}><LinkedInIcon classes={{root: classes.icon}}/></IconButton></a>
                  <a href="https://www.youtube.com/user/MrIntelx9" target="_blank"><IconButton classes={{root: classes.iconGroup}}><YouTubeIcon classes={{root: classes.icon}}/></IconButton></a>
                  </div>
        </Typography>
      </Box>
  );
}
// Copyright 2020, Gautier Marechal, All rights reserved
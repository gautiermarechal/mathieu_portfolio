import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Footer() {
  return (
      <Box >
        <Typography 
        component="body" 
        style={{ backgroundColor: '#202020', height: '200px', width: 'auto' }}
        align="center">
            <Typography 
                variant="subtitle1" 
                style={{color: 'white', paddingTop: '90px'}}>Mathieu Tranchida - 2020 All rights Reserved ©</Typography>
        </Typography>
      </Box>
  );
}
// Copyright 2020, Gautier Marechal, All rights reserved
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import tileData from '../assets/TiledData_Action';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles( theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'white !important',
        overFlow: 'hidden',
    },
    paragraph: {
        paddingLeft: '50px',
        paddingRight: '80px',
        paddingTop: '70px',
        paddingBottom: '50px',
        textAlign: 'justify',
        overflow: 'visible',
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
}));

export default function ParagraphAboutMe() {
    const classes = useStyles();
    const imageMath = tileData[16].img;
    const theme = useTheme();
    const colMatches = useMediaQuery(theme.breakpoints.up('md'));

    const getGridListCol = () => {
        if(colMatches){
          return 2;
        }
        else
          return 1;
      }

    return(
        <GridList className={classes.root} cellHeight={500} spacing={0} cols={getGridListCol()}>
            <GridListTile>
                <img src={imageMath}/>
            </GridListTile>
            <GridListTile >
                <Box className={classes.paragraph}>
                <Typography variant="h4" align={'center'}>
                    About Me
                </Typography>
                <br/>
                <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue eget arcu dictum varius duis at. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Urna neque viverra justo nec ultrices dui sapien eget. Aliquam ut porttitor leo a diam sollicitudin tempor id. Id aliquet lectus proin nibh nisl condimentum id venenatis a. A diam maecenas sed enim ut. Tortor id aliquet lectus proin nibh nisl. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Eleifend donec pretium vulputate sapien nec. Tortor dignissim convallis aenean.
                </Typography>
                </Box>
            </GridListTile>
        </GridList>
    );
}
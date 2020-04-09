import React from 'react';
import '../App.css';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import  GridList from '@material-ui/core/GridList';
import  GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import Logo_686 from '../assets/Logo_Companies/686 Logo.png';
import Logo_ArcTeryx from '../assets/Logo_Companies/Arcteryx Logo - Blanc.png';
import Logo_CasaCares from '../assets/Logo_Companies/Casa Cares Logo - Normal.png';
import Logo_iF3 from '../assets/Logo_Companies/iF3 Logo - Blanc.png';
import Logo_Lequipe from '../assets/Logo_Companies/Léquipe Logo - Normal.png';
import Logo_Psicobloc from '../assets/Logo_Companies/Psicobloc Logo.png';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root:{
        overflow: 'hidden',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '20px',
        paddingBottom: '40px',
        backgroundColor: 'black',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(2),
        },
    },
    paperContainer: {
        display: 'block',
        backgroundColor: 'black',
        margin: '0px',
        minHeight: '100%',
        minHeight: '175px',
        maxWidth: '150px',
        maxHeight: '175px',
        marginBottom: theme.spacing(1),
        borderRadius: '15px',
    },
    logoImage686: {
        display: 'inline-block',
        justifyContent: 'center',
        position: 'relative',
        width: '80%',
        height: 'auto',
        margin: 'auto',
        marginTop: '39.5px',
        marginBottom: '39.5px',
    },
    logoImageArc: {
        display: 'inline-block',
        justifyContent: 'center',
        position: 'relative',
        width: '80%',
        height: 'auto',
        margin: 'auto',
        marginTop: '58.2655px',
        marginBottom: '58.2655px',
    },
    logoImageLequipe: {
        display: 'inline-block',
        justifyContent: 'center',
        position: 'relative',
        width: '80%',
        height: 'auto',
        margin: 'auto',
        marginTop: '75.3045px',
        marginBottom: '75.3045px',
    },
    logoImageIF3: {
        display: 'inline-block',
        justifyContent: 'center',
        position: 'relative',
        width: '80%',
        height: 'auto',
        margin: 'auto',
        marginTop: '46.9685px',
        marginBottom: '46.9685px',
    },
    gridList: {
        display: 'inline-block',
        padding: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(0),
            paddingRight: theme.spacing(0),
            paddingTop: theme.spacing(0),
            paddingBottom: theme.spacing(0),
        },
    },
    tile: {
        display: 'inline-block',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '150px',
        maxWidth: '150px',
        minHeight: '175px',
        maxHeight: '175px',
        borderRadius: '15px',
        transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        '&:hover': {
            WebkitTransform: 'scale(1,1, 1.1)',
            transform: 'scale(1.1)',
            borderRadius: '15px',
            // minHeight: '180px',
            // maxWidth: '155px',
            // maxHeight: '180px',
        },
    },
    title: {
        padding: '20px',
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

    function changeSpacing(){
        if(smallScreen) {
            return 10;
        }
        else {
            return 30;
        }
    }

    return(
        <Box className={classes.root}>
            <Typography variant={changeTitle()} align={'center'} className={classes.title}>
                COLLABORATIONS
            </Typography>
            <br/>
            {/* <Typography variant='body1' align={'justify'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue eget arcu dictum varius duis at. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Urna neque viverra justo nec ultrices dui sapien eget. Aliquam ut porttitor leo a diam sollicitudin tempor id. Id aliquet lectus proin nibh nisl condimentum id venenatis a. A diam maecenas sed enim ut. Tortor id aliquet lectus proin nibh nisl. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Eleifend donec pretium vulputate sapien nec. Tortor dignissim convallis aenean et tortor at risus. At tellus at urna condimentum mattis pellentesque.
            </Typography> */}
            <GridList cellHeight={"auto"} cols={3} spacing={changeSpacing()} className={classes.gridList}>
                <GridListTile className={classes.tile}>
                <a href="https://ca.686.com/blogs/news/gfs-camp-recap-with-laurent-de-martin?utm_source=ebay&utm_medium=affiliate&utm_campaign=generic&clickId=3048279547">
                <Paper classes={{root: classes.paperContainer}}>
                    <img src={Logo_686} className={classes.logoImage686}/>
                </Paper>
                </a>
                </GridListTile>
                <GridListTile className={classes.tile}>
                    <a href="https://www.facebook.com/arcteryxmontreal/media_set/?set=a.2269975689763053">
                    <Paper className={classes.paperContainer}>
                    <img src={Logo_ArcTeryx}className={classes.logoImageArc}/>
                    </Paper>
                    </a>
                </GridListTile>
                <GridListTile className={classes.tile}>
                    <a href="https://www.facebook.com/media/set/?set=a.2127903393912473&type=3">
                    <Paper className={classes.paperContainer}>
                    <img src={Logo_CasaCares}className={classes.logoImage686}/>
                    </Paper>
                    </a>
                </GridListTile>
                <GridListTile className={classes.tile}>
                    <a href="https://www.lequipe.fr/Adrenaline/Ski-freeride/Actualites/Couloir-itineraire-domaine-piste-preferes-le-val-d-isere-de-leo-taillefer/998758"> 
                    <Paper className={classes.paperContainer}>
                    <img src={Logo_Lequipe}className={classes.logoImageLequipe}/>
                    </Paper>
                    </a>
                </GridListTile>
                <GridListTile className={classes.tile}>
                    <a href=" https://www.facebook.com/media/set/?set=a.10156832575509189&type=3">
                    <Paper className={classes.paperContainer}>
                    <img src={Logo_iF3}className={classes.logoImageIF3}/>
                    </Paper>
                    </a>
                </GridListTile>
                <GridListTile className={classes.tile}>
                    <a href="https://www.instagram.com/p/B1odeuHDAog/?utm_source=ig_web_copy_link ">
                    <Paper className={classes.paperContainer}>
                    <img src={Logo_Psicobloc}className={classes.logoImage686}/>
                    </Paper>
                    </a>
                </GridListTile>
            </GridList>
        </Box>
    );
}
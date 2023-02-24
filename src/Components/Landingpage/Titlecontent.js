import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
// import myteam from '../images/myteam.jpg';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { makeStyles } from '@mui/styles';

const Content = () => {
    const styles = (theme) => {
        return {
          toolBar: {
            height: '10vh',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
            backgroundColor: 'white',
          },
          logo: {
            color: 'blue',
            cursor: 'pointer',
          },
          link: {
            color: "#000"
          },
          menuIcon: {
            color: '#000',
          },
          formContainer: {
            flexGrow: 1,
            padding: '10px',
            maxWidth: '700px',
            margin: '30px auto',
            [theme.breakpoints.between('xs', 'sm')]: {
              width: '100%',
            },
          },
          form: {
            marginTop: '30px',
          },
          formHeading: {
            textAlign: 'center',
          },
          heroBox: {
            width: '100%',
            display: 'flex',
            minHeight: '600px',
            alignItems: 'center',
            justifyContent: 'center',
          },
          gridContainer: {
            display: 'flex',
            alignItems: 'center',
            maxWidth: '1300px',
            padding: '50px',
          },
          aboutUsContainer: {
            width: '100%',
            display: 'flex',
            minHeight: '400px',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '30px 0px 50px 0px',
          },
          aboutUsSubtitle: {
            opacity: '0.7',
            paddingBottom: '30px',
            fontSize: '18px',
          },
          title: {
            paddingBottom: '15px',
          },
          subtitle: {
            opacity: '0.4',
            paddingBottom: '30px',
          },
          largeImage: {
            width: '100%',
          },
          sectionGridContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            minHeight: '500px',
          },
          sectionGridItem: {
            backgroundColor: '#f2f0f1',
            textAlign: 'center',
            padding: '30px',
            width: '200px',
            borderRadius: '10px',
            margin: '10px !important',
          },
          inputField: {
            marginBottom: '20px !important',
          },
          textArea: {
            width: '100%',
            marginBottom: '20px',
            fontSize: '16px',
            padding: '10px',
          },
          footerContainer: {
            display: 'flex',
            alignItems: 'center',
            miHeight: '10vh',
            padding: '20px',
            justifyContent: 'center',
            backgroundColor: '#f2f0f1',
            flexDirection: 'column',
          },
          footerText: {
            paddingBottom: '10px',
          },
          footerDate: {
            opacity: '0.4',
          },
          testimonialCard: {
            backgroundColor: '#fff',
            padding: '10px',
            minHeight: '200px',
            display: 'flex',
            alignItems: 'center',
          },
          testimonialStatement: {
            paddingBottom: '25px',
          },
          avatar: {
            marginRight: '10px',
          },
          testimonialPosition: {
            fontSize: '14px',
            opacity: '0.6',
          },
        };
      };
      
    const classes = makeStyles(styles);
    // const classes = useStyles();
    

  return (
      <Box className={classes.heroBox}
      style={{width: '100%',
      display: 'flex',
      minHeight: '500px',
      alignItems: 'center',
      justifyContent: 'center',}}>
          <Grid container spacing={6} className={classes.gridContainer}
          style={{display: 'flex',
          alignItems: 'center',
          maxWidth: '1300px',
          padding: '50px',}}>
        <Grid item xs={8} md={7}>
            <Typography variant="h3" fontWeight={700} className={classes.title}
                  style={{paddingBottom: '15px'}}>
                Let's level up your Career
           </Typography>
                <Typography
                      variant="h6"
                      className={classes.subtitle}
                      style={{opacity: '0.7',
                             paddingBottom: '30px',
                             }}>
                      Track your academic status. See your progress in abetter way by
                      visualization. Teachers can grade students, view their submission details.
                      Reports can be updated. Personal interaction rooms for better understanding.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '200px', fontSize: '16px',m:2, }}
          >
            Register as Employee
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '200px', fontSize: '16px',m:2, }}
          >
            Register as Company
          </Button>
        </Grid>
            <Grid item xs={4} md={5}>
            <QueryStatsIcon sx={{ fontSize: "20vw",color:'blue',fontWeight: 700,
              letterSpacing: '.3rem', }}/>      
          {/* <img src={myteam} alt="My Team" className={classes.largeImage} /> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Content;
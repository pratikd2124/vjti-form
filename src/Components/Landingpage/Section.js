import React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AddTaskIcon from '@mui/icons-material/AddTask';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { Alert } from 'react-bootstrap';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

// import useStyles from '@material-ui/core/styles';

const Section = () => {
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

  const sectionItems = [
    {
      id: 1,
      icon: <EngineeringOutlinedIcon sx={{ fontSize: 100 }} color="primary" />,
      button : <Alert variant="contained">Get Hired</Alert>,  
      sentence:
        'Get a job based on your skills',
    },
    {
      id: 2,
      icon: <TextSnippetIcon sx={{ fontSize: 100 }} color="primary" />,
      button : <Alert variant="contained">Quick Application</Alert>,
      sentence:
        'Apply directly through portal',
    },
    {
      id: 3,
      icon: < AddTaskIcon sx={{ fontSize: 100 }} color="primary" />,
      button : <Alert variant="contained">Test Section</Alert>,
      sentence: 'Skill based test for better results',
      },
    {
      id: 4,
      icon: <DashboardIcon sx={{ fontSize: 100 }} color="primary" />,
      button : <Alert variant="contained">Dashboard</Alert>,
      sentence: 'An overall lokout of task',
      },
      {
        id: 5,
        icon: <AssignmentIndIcon sx={{ fontSize: 100 }} color="primary" />,
        button : <Alert variant="contained">Career guidance</Alert>,
        sentence: 'Ask career related queries',
      },
      {
        id: 6,
        icon: <ConnectWithoutContactOutlinedIcon sx={{ fontSize: 100 }} color="primary" />,
        button : <Alert variant="contained">Group Chat</Alert>,
        sentence: 'Contanct to recruiters',
      },
  ];
  return (
    <Box sx={{ flexGrow: 1, minHeight: '400px',}}>
          <Grid container spacing={2} columns={14} rows={12}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                width: '100%',
                minHeight: '500px',
          }}>
        {sectionItems.map((item) => (
            <Grid
            item
            xs={8}
            md={4}
            sx={{ boxShadow: 4,mx:2 }}
            minHeight={300}
            key={item.id}
            className={classes.setionGridItem}
            style={{ backgroundColor: '#f2f0f1',
            textAlign: 'center',
            padding: '30px',
            width: '200px',
            borderRadius: '20px',
                    marginBottom: '50px',
                }}     
          >
                {item.icon} 
                {item.button}
            <Typography>{item.sentence}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section;
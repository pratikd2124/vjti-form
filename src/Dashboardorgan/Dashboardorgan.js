import React, { useState } from 'react';

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssessmentIcon from '@mui/icons-material/Assessment';

import Jobsview from './Jobs/Jobsview';
import Profile from './Companyprofile/Profile';
import Trackview from './Tracking/Trackview';


import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));



export default function Dashboardorgan() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [menudata, Setmenudata] = useState("Profile");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    
  };


  return (
    <>
  <div > 
      <Box sx={{ display: 'flex',}}>
    <CssBaseline />
    <AppBar
        position="fixed"
      sx={{ bgcolor:"#6670de", width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar sx={{display:'flex', justifyContent:"space-between"}}>
          <Typography variant="h6" noWrap component="div">
          Dashboard
          </Typography>
              {/* <Accountmenu sx={{ml:'auto'}} />     */}
      </Toolbar>
    </AppBar>
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          bgcolor:"#01063d",
          color:"grey",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      {/* <List>
        {['Job Recommendation', 'Profile', 'Skill assessment', 'Resume analysis', 'Job search and application'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider /> */}
      <List>
        <ListItem  disablePadding onClick={()=>Setmenudata("Post A Job")} >
          <ListItemButton
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}>
              <ListItemIcon sx={{color:'white'}}>
              <WorkHistoryIcon />
              </ListItemIcon>
              <ListItemText primary="Post A Job" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />

        <List>
        <ListItem  disablePadding onClick={()=>Setmenudata("Freelancer")}>
                <ListItemButton
                  selected={selectedIndex === 1}
                  onClick={(event) => handleListItemClick(event, 1)}>
              <ListItemIcon sx={{color:'white'}}>
              <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary="Freelancer" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem  disablePadding onClick={()=>Setmenudata("Company Details")}>
                <ListItemButton
                  selected={selectedIndex === 2}
                  onClick={(event) => handleListItemClick(event, 2)}>
              <ListItemIcon sx={{color:'white'}}>
              <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Company Details" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      <List>
        <ListItem  disablePadding onClick={()=>Setmenudata("Track application")}>
                <ListItemButton
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}>
              <ListItemIcon sx={{color:'white'}}>
              <FindInPageIcon />
              </ListItemIcon>
              <ListItemText primary="Track application" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        
    </Drawer>
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: 'rgba(245,245,255,0.5)', p: 3, }}
    >
      <Toolbar />
         {menudata == "Post A Job" && <Jobsview />}
        {menudata == "Company Details" && <Profile />}
        {menudata == "Track application" && <Trackview/>}
       {/* {menudata == "Resume analysis" && <Resumeanalysis/>} */}
        
    </Box>
  </Box>
    </div>
    </>
    
  );
}
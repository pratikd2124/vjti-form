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
// import Carrerview from './Carrerpath/Carrerview';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Careerview from './Careerpath/Careerview';
import Freelanceview from './Freelancer/Freelanceview';
import TrackCards from './Tracking/TrackCards';
import ViewTest from '../Test/CreateTest/ViewTest';
import AppBar from '@mui/material/AppBar';

const drawerWidth = 240;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   }),
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-end',
// }));



export default function Dashboardorgan(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [menudata, Setmenudata] = useState("Post A Job");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);

  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <div >
        <Box sx={{ display: 'flex', }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` }, bgcolor: "#6670de",
            }}
          >
            <Toolbar sx={{ display: 'flex', justifyContent: "space-between" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Dashboard
              </Typography>
              {/* <Accountmenu sx={{ml:'auto'}} />     */}
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: "#000e4f", color: 'grey' }
              }}
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
                <ListItem disablePadding onClick={() => Setmenudata("Post A Job")} >
                  <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}>
                    <ListItemIcon sx={{ color: 'white' }}>
                      <WorkHistoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Post A Job" />
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider />

              <List>
                <ListItem disablePadding onClick={() => Setmenudata("Freelancer")}>
                  <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}>
                    <ListItemIcon sx={{ color: 'white' }}>
                      <AssessmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Freelancer" />
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider />


              <List>
                <ListItem disablePadding onClick={() => Setmenudata("Track application")}>
                  <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}>
                    <ListItemIcon sx={{ color: 'white' }}>
                      <FindInPageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Track application" />
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem disablePadding onClick={() => Setmenudata("Assessment")}>
                  <ListItemButton
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}>
                    <ListItemIcon sx={{ color: 'white' }}>
                      <FindInPageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Assessment" />
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider />
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: "#000e4f", color: 'grey' }
              }}
              open
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
                <ListItem disablePadding onClick={() => Setmenudata("Post A Job")} >
                  <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}>
                    <ListItemIcon sx={{ color: 'white' }}>
                      <WorkHistoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Post A Job" />
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider />

              <List>
                <ListItem disablePadding onClick={() => Setmenudata("Freelancer")}>
                  <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}>
                    <ListItemIcon sx={{ color: 'white' }}>
                      <AssessmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Freelancer" />
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider />


              <List>
                <ListItem disablePadding onClick={() => Setmenudata("Track application")}>
                  <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}>
                    <ListItemIcon sx={{ color: 'white' }}>
                      <FindInPageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Track application" />
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem disablePadding onClick={() => Setmenudata("Assessment")}>
                  <ListItemButton
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}>
                    <ListItemIcon sx={{ color: 'white' }}>
                      <FindInPageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Assessment" />
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider />
            </Drawer>
          </Box>

          <Box
            component="main"
            sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` }, bgcolor: 'rgba(245,245,255,0.5)', p: 3, }}
          >
            <Toolbar />
            {menudata === "Post A Job" && <Jobsview />}
            {menudata === "Company Details" && <Profile />}
            {menudata === "Track application" && <Trackview />}
            {menudata === "Assessment" && <ViewTest />}

            {menudata === "Freelancer" && <Freelanceview />}

          </Box>
        </Box>
      </div>
    </>

  );
}
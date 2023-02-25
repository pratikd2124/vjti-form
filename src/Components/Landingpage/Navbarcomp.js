import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import InsightsIcon from '@mui/icons-material/Insights';
import { makeStyles } from '@mui/styles';
import { Link, Navigate, useNavigate } from 'react-router-dom';


// const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const useStyle = makeStyles({
  Typography: {
    '&:hover': {
      color: 'rgb(212, 228, 255)'
    }
  },
})

const Navbarcomp = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const classes = useStyle()
  const navigate = useNavigate()

  const role = localStorage.getItem("role")
  const user = JSON.parse(localStorage.getItem("user-vjti"))


  return (
    <AppBar position="static" sx={{ mt: 0, }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <InsightsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',

            }}
          >
            EMPROVE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}

              <MenuItem onClick={handleCloseNavMenu} style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography component={Link} to="/login"
                  sx={{ my: 2, mx: 1, color: 'black', display: 'flex', textDecoration: 'none', }}>
                  Login
                </Typography>
              </MenuItem>

              {/* <MenuItem onClick={handleCloseNavMenu} style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography component={Link} to="/classroom"
                  sx={{ my: 2, mx: 1, color: 'black', display: 'flex', textDecoration: 'none', }}>
                  Classroom
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography component={Link} to="/notices"
                  sx={{ my: 2, mx: 1, color: 'black', display: 'flex', textDecoration: 'none', }}>
                  Notices
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography component={Link} to="https://trackfinity.netlify.app/"
                  sx={{ my: 2, mx: 1, color: 'black', display: 'flex', textDecoration: 'none', }}>
                  Video Calling
                </Typography>
              </MenuItem> */}

            </Menu>
          </Box>
          <InsightsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            EMPROVE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            {!role && <Typography component={Link} to="/login" className={classes.Typography}
              sx={{ my: 2, mx: 2, color: 'white', display: 'flex', textDecoration: 'none' }}>
              Login
            </Typography>}
            {role && <Typography component={Link} to={role === "employee" ? "/dashboard" : "/organization"} className={classes.Typography}
              sx={{ my: 2, mx: 2, color: 'white', display: 'flex', textDecoration: 'none', }}>
              Dashboard
            </Typography>}


            {/* {orgName && <>
              <Typography component={Link} to="/classroom" className={classes.Typography}
                sx={{ my: 2, mx: 1, color: 'white', display: 'flex', textDecoration: 'none', }}>
                Classroom
              </Typography>
              <Typography component={Link} to={role === "Student" ? "/subjects" : "/courses"} state={role === "Student" && { id: JSON.parse(localStorage.getItem("profile")).courseid }} className={classes.Typography}
                sx={{ my: 2, mx: 1, color: 'white', display: 'flex', textDecoration: 'none', }}>
                Courses
              </Typography>
              <Typography component={Link} to="/assignedtests" className={classes.Typography}
                sx={{ my: 2, mx: 1, color: 'white', display: 'flex', textDecoration: 'none', }}>
                Tests
              </Typography>
              <Typography component={Link} to="/notices" className={classes.Typography}
                sx={{ my: 2, mx: 1, color: 'white', display: 'flex', textDecoration: 'none', }}>
                Notices
              </Typography>
              {JSON.parse(localStorage.getItem("role")) !== "Student" && JSON.parse(localStorage.getItem("role")) !== "Parent" && <Typography component="a" href="https://trackfinity.netlify.app/"
                sx={{ my: 2, mx: 1, color: 'white', display: 'flex', textDecoration: 'none', }}>
                Video Calling
              </Typography>}
              {JSON.parse(localStorage.getItem("role")) === "Student" && <Typography component="a" href="http://webknights.pythonanywhere.com/profile" className={classes.Typography}
                sx={{ my: 2, mx: 1, color: 'white', display: 'flex', textDecoration: 'none', }}>
                Profile
              </Typography>}
              <Typography component="a" href="https://google-calendar-clone.netlify.app/" className={classes.Typography}
                sx={{ my: 2, mx: 1, color: 'white', display: 'flex', textDecoration: 'none', }}>
                Calendar
              </Typography>
              {JSON.parse(localStorage.getItem("role")) !== "Student" && JSON.parse(localStorage.getItem("role")) !== "Parent" && JSON.parse(localStorage.getItem("role")) !== "Developer" && <Typography component="a" href="http://webknights.pythonanywhere.com/classes"
                sx={{ my: 2, mx: 1, color: 'black', display: 'flex', textDecoration: 'none', }}>
                Classes
              </Typography>} */}
            {/* </>} */}


            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button> 
            ))}*/}
          </Box>

          {user && <Box sx={{ flexGrow: 0 }}>
            <Typography component={Link} to={"/"} onClick={() => {
              localStorage.removeItem("user-vjti");
              localStorage.removeItem("role");
            }} className={classes.Typography}
              sx={{ my: 2, mx: 2, color: 'white', display: 'flex', textDecoration: 'none', }}>
              Logout
            </Typography>
          </Box>}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbarcomp;

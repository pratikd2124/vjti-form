import React,{useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import DraftsIcon from '@mui/icons-material/Drafts';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import NestedList from './NestedList.js'
import ControlledAccordions from './ControlledAccordions.js'
const Notification = () => {

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <ControlledAccordions/> <hr/>
      <NestedList/>
      <div className='container'>
      <List sx={{ width: '100%', bgcolor: 'background.paper', }} component="nav">
      <ListItem >      
        <ListItemButton onClick={handleExpandClick}>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
          />
        {expanded ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
      </ListItem>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemText sx={{ pl: 4 }}
                primary=""
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this… neighborhood doing errands this neighborhood doing errands this neighborhood doing errands this"}
                  </React.Fragment>
                }
                />
                  {/* <ListItemText primary="Starred" /> */}
              </List>
      </Collapse>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
          </ListItem>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemText sx={{ pl: 4 }}
                primary=""
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this… neighborhood doing errands this neighborhood doing errands this neighborhood doing errands this"}
                  </React.Fragment>
                }
                />
                  {/* <ListItemText primary="Starred" /> */}
              </List>
      </Collapse>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </div>
    
    </>
  )
}

export default Notification
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
      <div className="container text-center w-75">
      <ControlledAccordions/> <hr/>

      </div>
      {/* <NestedList/> */}
      
    
    </>
  )
}

export default Notification
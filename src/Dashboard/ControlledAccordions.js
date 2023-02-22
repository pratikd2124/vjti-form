import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DraftsIcon from '@mui/icons-material/Drafts';
import IconButton from '@mui/material/IconButton';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='container mx-auto'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1') }>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>
            <IconButton  size="small">
              <DraftsIcon  fontsize="small"/>
            </IconButton>
          </Typography>
          
          <Typography sx={{ width: '33%', flexShrink: 0,p:0.5,ml:1 }}>
            General settings
          </Typography>
          <Typography sx={{ width: '33%',color: 'text.secondary' }}>I am an accordion</Typography>
          <Typography sx={{ width: '13%',color: 'text.secondary' }}>
            Date/time
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography>
            <IconButton  size="small">
              <DraftsIcon  fontsize="small"/>
            </IconButton>
          </Typography>
          
          <Typography sx={{ width: '33%', flexShrink: 0,p:0.5,ml:1 }}>Users</Typography>
          <Typography sx={{ width: '33%',color: 'text.secondary' }}>
            You are currently not an owner
          </Typography>
          <Typography sx={{ width: '13%',color: 'text.secondary' }}>
            Date/time
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography>
            <IconButton  size="small">
              <DraftsIcon  fontsize="small"/>
            </IconButton>
          </Typography>
          
          <Typography sx={{ width: '33%', flexShrink: 0,p:0.5,ml:1 }}>
            Advanced settings
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography>
            <IconButton  size="small">
              <DraftsIcon  fontsize="small"/>
            </IconButton>
          </Typography>
          
          <Typography sx={{ width: '33%', flexShrink: 0,p:0.5,ml:1 }}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Careerinput(props) {
  return (
    <Box
      sx={{
        width: 500,
              maxWidth: '100%',
        m:2,
      }}
    >
      <TextField fullWidth label="Search Relevant career path" value={props.value} onChange={(e)=>{props.setvalue(e.target.value)}} id="fullWidth" />
    </Box>
  );
}
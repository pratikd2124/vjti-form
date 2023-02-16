import React from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Skillinput = () => {
    return (
    <div>
            {/* {props.map((Val) => {
            return (
              
            );
          })} */}
    <Stack direction="row" spacing={1}>
      <Chip label="Chip Outlined" variant="outlined" />
    </Stack>
    </div>
  )
}

export default Skillinput
import React from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Skillinput = (props) => {
  console.log(props.selectedSkills)
  return (
    <div>
      {/* {props.map((Val) => {
            return (
              
            );
          })} */}
      <Stack direction="row" spacing={1}>
        {props.selectedSkills ? props.selectedSkills.map((data) =>
        (
          <Chip key={data} label={data} variant="outlined" />
        ))
          : ""
        }
      </Stack>
    </div>
  )
}

export default Skillinput
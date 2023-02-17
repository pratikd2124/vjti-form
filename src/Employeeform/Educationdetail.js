import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function Educationdetail(props) {
  console.log(props.userInput)
  return (
    <>
    <div className="container-fluid mx-auto">
        <div className="column justify-content-space-around">
          {/* {props.map((Val) => {
            return (
              
            );
          })} */}
          <List sx={{ width: '100%', maxWidth: 720, bgcolor: 'background.paper' }}>
      
      <Grid container spacing={2} direction="row" alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={12} md={6}  sx={{bgcolor:'white', ml:2,p:3}} >
                  <Typography gutterBottom variant="h6" component="h2">
                    {props.userInput.name || "Name"}
                </Typography>
                <Typography sx={{ mb: 0.5 }} color="text.secondary">
                {props.userInput.category || "Category"}
                </Typography>
                  <Typography sx={{ mb: 0.5 }} color="text.secondary">
                  {props.userInput.degree || "Degree"}
                </Typography>
                <Typography sx={{ mb: 0.5 }} color="text.secondary">
                {props.userInput.startdate || "00:00:0000"} -  {props.userInput.enddate || "00:00:0000"}
                </Typography>
      <hr/>
              </Grid>
              
       </Grid>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
      
      
    </List>
        </div>
      </div>
    </>
    
  );
}
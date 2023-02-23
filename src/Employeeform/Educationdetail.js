import * as React from 'react';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function Educationdetail(props) {
  console.log(props.userinput)
  return (
    <>
      <div className="container-fluid mx-auto">
        <div className="column justify-content-space-around">
          {/* {props.map((Val) => {
            return (
              
            );
          })} */}
          <List sx={{ width: '100%', maxWidth: 720, bgcolor: 'background.paper' }}>
            {props.userinput ? props.userinput?.map((userInput) => (
              <List Item key={userInput.university} sx={{ width: '100%', maxWidth: 720, bgcolor: 'background.paper' }}>
                <Grid container spacing={2} direction="row" alignItems="center" justifyContent="center">
                  <Grid item xs={12} sm={12} md={6} sx={{ bgcolor: 'white', ml: 2, p: 3 }} >
                    <Typography gutterBottom variant="h6" component="h2">
                      {userInput.university || "Name"}
                    </Typography>
                    <Typography sx={{ mb: 0.5 }} color="text.secondary">
                      {userInput.category || "Category"}
                    </Typography>
                    <Typography sx={{ mb: 0.5 }} color="text.secondary">
                      {userInput.degree || "Degree"}
                    </Typography>
                    <Typography sx={{ mb: 0.5 }} color="text.secondary">
                      {userInput.startDate || "00:00:0000"} -  {userInput.endDate || "00:00:0000"}
                    </Typography>
                    <hr />
                  </Grid>

                </Grid>
              </List>
            )):""}


          </List>
        </div>
      </div>
    </>

  );
}
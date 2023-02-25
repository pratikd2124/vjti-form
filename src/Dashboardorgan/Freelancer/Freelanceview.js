import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Button from '@mui/material/Button';

import GetFreelance from './GetFreelance.js';
import Skillinput from '../../Employeeform/Skillinput.js';
import { Spinner } from 'react-bootstrap';
const Freelanceview = () => {
  const jsonData = [
    {
      companyname: "JVC PVT LTD",
      time: "8:00",
      date: "20-02-2023",
      jobrole: "MERN Developer",
      location: "Pune",
      jobtype: "Part Time",
      salary: "$20000"
    },
    {
      companyname: "JVC PVT LTD",
      time: "8:00",
      date: "20-02-2023",
      jobrole: "MERN Developer",
      location: "Pune",
      jobtype: "Part Time",
      salary: "$20000"
    },
    {
      companyname: "JVC PVT LTD",
      time: "8:00",
      date: "20-02-2023",
      jobrole: "MERN Developer",
      location: "Pune",
      jobtype: "Part Time",
      salary: "$20000"
    }
  ]

  const [datas, setdata] = useState([])
  const url = "http://localhost:5000/user/jobs"

  useEffect(() => {
    setdata([])
    fetch(url + "/getfreelancerbyemail/" + JSON.parse(localStorage.getItem("user-vjti")).email, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json().then(data => {
      setdata([...datas, { ...data.data }])
    }))
  }, [])

  const handleDelete = (id) => {
    fetch(url + "/deleteFree/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json().then(data => {
      if (data.success) {
        fetch(url + "/getfreelancerbyemail/" + JSON.parse(localStorage.getItem("user-vjti")).email, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => res.json().then(data => {
          setdata([...datas, { ...data.data }])
        }))
      }
    }))
  }

  return (
    <>
      <GetFreelance sx={{ ml: 'auto' }} data={datas} setdata={setdata} />

      <Container maxWidth="lg" >
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={12} md={6}>

            {datas ? datas.forEach((jsondata) => (
              <Card className="shadow " sx={{ mb: 3, minWidth: 400, maxWidth: 500, maxheight: 300, p: 2, borderRadius: '20px', }}>
                <Box sx={{ display: 'flex', alignItems: 'center', pb: 1.5, gap: 1 }}>
                  <Avatar
                    size="sm"
                    src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"
                    sx={{ p: 0.5, border: '2px solid', borderColor: 'background.body' }}
                  />
                  <Typography component="div" variant="h6">
                    {jsondata.companyname || ""} <br />


                  </Typography>
                </Box>

                <CardContent>
                  <Typography component="div" variant="h5" sx={{ fontWeight: "bold" }}>
                    {jsondata.title}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', pb: 1.5, gap: 1 }}>
                    <Typography sx={{ m: 1 }} color="text.secondary" gutterBottom>
                      <LocationOnIcon />  {jsondata.location}
                    </Typography>
                    <Typography sx={{ m: 1, }} color="text.secondary" >
                      {jsondata.desc}
                    </Typography>
                  </Box>

                  <Typography sx={{ m: 1, }} color="text.secondary" variant="h5">

                    <Skillinput selectedSkills={jsondata.skills} />
                  </Typography>

                </CardContent>
                <CardActions>
                  <Button variant="contained" onClick={() => { handleDelete(jsondata._id) }} size="small" sx={{ ml: 'auto', px: 4, }}>Delete</Button>
                </CardActions>
              </Card>)):<Spinner style={{marginLeft:"50%"}} animation="border" variant="primary" />}
            {/*  */}
            {/* <Card className="shadow " sx={{ mb:1, minWidth: 400,maxWidth:500, maxheight:300, p: 2, borderRadius: '20px', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', pb: 1.5, gap: 1 }}>
                        <Avatar
                                size="sm"
                                src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"
                                sx={{ p: 0.5, border: '2px solid', borderColor: 'background.body' }}
                              />
                              <Typography component="div" variant="h6">
                                  Company Name <br />
                                  <Typography variant="body2"  >
                            Posted time /date
                            
                            </Typography>
                            </Typography>
                      </Box>
                      
                          <CardContent>
                          <Typography component="div" variant="h5" sx={{fontWeight:"bold"}}>
                                Django developer
                              </Typography>
                              <Box sx={{ display: 'flex', alignItems: 'center', pb: 1.5, gap: 1 }}>
                                <Typography sx={{ m: 1 }}  color="text.secondary" gutterBottom>
                                    <LocationOnIcon/>  Place of work
                                </Typography>
                                <Typography sx={{ m: 1,}}  color="text.secondary" >
                                    Full time / Part time
                                </Typography>
                              </Box>
                            
                            <Typography sx={{ m: 1,}}  color="text.secondary" variant="h5">
                                $ 20,000 - $ 30,000
                            </Typography>
                            
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" size="small" sx={{ ml: 'auto',px:4 , }}>Apply</Button>
                        </CardActions>
                        </Card> */}

          </Grid>
        </Grid>
      </Container>

    </>
  )
}

export default Freelanceview
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Button from '@mui/material/Button';
import Skillinput from '../Employeeform/Skillinput';
import Search from './Searchbar/Search';
import { Alert } from '@mui/material';

const Jobcard = () => {
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

  const [data, setdata] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/user/jobs/getJobsByUserIdNotApplied/" + JSON.parse(localStorage.getItem("user-vjti"))._id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => {
      res.json().then((data) => {
        console.log(data)
        if (data.success) {
          setdata(data.data)
        } else {
          alert(data.error)
        }
      })
    })
  }, [])

  const handleSubmit = (id) => {
    console.log(id)
    const job = {
      jobid: id,
      userid: JSON.parse(localStorage.getItem("user-vjti"))._id,
      type: "jobcard"
    }
    fetch("http://localhost:5000/user/jobs/applyJob", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        job
      })
    }).then((res) => {
      res.json().then(data => {
        console.log(data)
        if (data.success) {
          fetch("http://localhost:5000/user/jobs/getJobsByUserIdNotApplied/" + JSON.parse(localStorage.getItem("user-vjti"))._id, {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }).then((res) => {
            res.json().then(data => {
              console.log(data)
              if (data.success) {
                setdata(data.data)
              } else {
                alert(data.error)
              }
            })
          })
          alert("Applied Successfully")
        } else {
          alert(data.error)
        }
      })
    }
    )


  }


  const [selectedSkills, setSelectedSkills] = useState([])

  const handleSearch = () => {
    console.log(selectedSkills)
    fetch("http://localhost:5000/user/jobs/getjobsbyskill/" + selectedSkills + "/" + JSON.parse(localStorage.getItem("user-vjti"))._id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => {
      res.json().then(data => {
        console.log(data)
        if (data.success) {
          setdata(data.data)
        } else {
          alert(data.error)
        }
      })
    }
    )
  }


  return (
    <>
      <Search selectedSkills={selectedSkills} setSelectedSkills={setSelectedSkills} handleSearch={handleSearch} />
      <Container maxWidth="lg" >
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={12} md={6}>
            {data && data.map((jsondata) => (
              <Card className="shadow " sx={{ mb: 3, maxWidth: "50vw", minWidth: "40vw", maxheight: 300, p: 2, borderRadius: '20px', }}>
                <Box sx={{ display: 'flex', alignItems: 'center', pb: 1.5, gap: 1 }}>
                  <Avatar
                    size="sm"
                    src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"
                    sx={{ p: 0.5, border: '2px solid', borderColor: 'background.body' }}
                  />
                  <Typography component="div" variant="h6">
                    {jsondata.jobtitle || ""} <br />

                  </Typography>
                </Box>

                <CardContent>
                  <Typography component="div" variant="p" >
                    {jsondata.jobdesc || ""}
                  </Typography>
                  <Typography component="div" variant="h5" sx={{ fontWeight: "bold" }}>
                    <Skillinput selectedSkills={jsondata.skills} />
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', pb: 1.5, gap: 1 }}>
                    <Typography sx={{ m: 1 }} color="text.secondary" gutterBottom>
                      Location : {jsondata.location}
                    </Typography>
                    <Typography sx={{ m: 1, }} color="text.secondary" >
                      {jsondata.jobtype}
                    </Typography>
                  </Box>

                  <Typography sx={{ m: 1, }} color="text.secondary">

                    Salary : {jsondata.salary || ""}
                  </Typography>

                </CardContent>
                <CardActions>
                  <Button variant="contained" size="small" sx={{ ml: 'auto', px: 4, }} onClick={() => {
                    handleSubmit(jsondata._id)
                  }} >Apply</Button>


                </CardActions>
              </Card>
            ))}
            {data.length === 0 && <Alert severity="error">No Jobs Found</Alert>}
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

export default Jobcard
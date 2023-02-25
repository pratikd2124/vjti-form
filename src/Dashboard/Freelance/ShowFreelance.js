import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Skillinput from '../../Employeeform/Skillinput';
import Button from '@mui/material/Button';
import Search from '../Searchbar/Search';


const ShowFreelance = () => {

    const jsonData = [
        {
            companyname: "JVC PVT LTD",
            title: "MERN Developer",
            desc: "Do a great job and get paid",
            skills: ["HTML", "CSS", "JS"],
            salary: "$20000"
        },
        {
            companyname: "JVC PVT LTD",
            title: "MERN Developer",
            desc: "Do a great job and get paid",
            skills: ["HTML", "CSS", "JS"],
            salary: "$20000"
        },
        {
            companyname: "JVC PVT LTD",
            title: "MERN Developer",
            desc: "Do a great job and get paid",
            skills: ["HTML", "CSS", "JS"],
            salary: "$20000"
        }
    ]

    const url = "http://localhost:5000/user/jobs"

    const [data, setdata] = useState([])

    // useEffect(() => {
    //     fetch(url + "/getJobs", {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     }).then((res) => {
    //         res.json().then(data => {
    //             console.log(data)
    //             if (data.error) return alert(data.error)
    //             setdata(data.data)
    //         })
    //     })
    // }, [])

    // const handleGet = () => {
    //     fetch(url + "/getJobs", {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     }).then((res) => {
    //         res.json().then(data => {
    //             console.log(data)
    //             if (data.error) return alert(data.error)
    //             setdata(data.data)
    //         })
    //     })
    // }


    const [show1, setShow1] = useState(false);

    const handleShow1 = () => setShow1(true)

    const [selectedSkills, setSelectedSkills] = useState([])

    const handleSearch = () => {
        console.log(selectedSkills)

    }

    return (
        <>
            <Search selectedSkills={selectedSkills} setSelectedSkills={setSelectedSkills} />
            <Container maxWidth="lg" >
                <Grid container spacing={3} alignItems="center" justifyContent="center">
                    <Grid item xs={12} sm={12} md={6}>
                        {jsonData && jsonData.map((jsondata) => (
                            <Card className="shadow " sx={{ mb: 3, maxWidth: "50vw", minWidth: "40vw", maxheight: 300, p: 2, borderRadius: '20px', }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', pb: 1.5, gap: 1 }}>
                                    <Avatar
                                        size="sm"
                                        src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"
                                        sx={{ p: 0.5, border: '2px solid', borderColor: 'background.body' }}
                                    />
                                    <Typography component="div" variant="h6">
                                        {jsondata.title || ""} <br />

                                    </Typography>
                                </Box>

                                <CardContent>
                                    <Typography component="div" variant="p" >
                                        {jsondata.desc || ""}
                                    </Typography>
                                    <Typography component="div" variant="h5" sx={{ fontWeight: "bold" }}>
                                        <Skillinput selectedSkills={jsondata.skills} />
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', pb: 1.5, gap: 1 }}>
                                        {/* <Typography sx={{ m: 1 }} color="text.secondary" gutterBottom>
                                            Location : {jsondata.location}
                                        </Typography> */}
                                        {/* <Typography sx={{ m: 1, }} color="text.secondary" >
                                            {jsondata.jobtype}
                                        </Typography> */}
                                    </Box>

                                    <Typography sx={{ m: 1, }} color="text.secondary">

                                        Salary : {jsondata.salary || ""}
                                    </Typography>

                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" size="small" sx={{ ml: 'auto', px: 4, }} >Get Hired</Button>
                                    {/* <Button variant="contained" color="error" size="small" sx={{ ml: 'auto', px: 4, }}>Delete</Button> */}


                                </CardActions>
                            </Card>))}

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
            </Container >
        </>
    )
}

export default ShowFreelance
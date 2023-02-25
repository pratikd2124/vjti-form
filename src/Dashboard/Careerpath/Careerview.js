import React, { useState } from 'react'
import Careerinput from './Careerinput.js'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Typography from '@mui/material/Typography';
import {  Grid } from '@mui/material';
import { Button, Spinner } from 'react-bootstrap';
import Careerpath from './Careerpath';
const Careerview = () => {
    const [value, setvalue] = useState("")
    const [ans,setans] = useState([])

    console.log(value)
    const [isQuery,setisQuery] = useState(false)
    
    const handleSubmit = () => {
        setisQuery(true)
        fetch("http://54.64.228.28/guidance/" + value, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json().then(res => {
            console.log(res)
            setans(res)
            setisQuery(false)

        }))

    }

  return (
      <>
          {/* <div className='container d-flex flex-direction-column justify-content-center'> */}
          
          
       
          <Grid container>
              <Grid item xs={12} justifyContent="center">
              <h1>Career Guidance Road Map</h1> 
              </Grid>
              <Grid sx={{ marginLeft: 50, m: 5 }} item xs={12}
              container
            direction="column"
              alignItems="center"
              justifyContent="center">
                  <Careerinput value={value} setvalue={setvalue} />
                  <div className="container text-center">
                  <Button sx={{m:2,p:3}} className="btn btn-lg" variant="primary" onClick={()=>{handleSubmit()}} >Create</Button>
                      
                  </div>
              </Grid>
              
          </Grid>
          <div style={{marginRight:"25%"}}>
          {ans.length > 0 || !isQuery ? ans.map((data, index) => (<>
                  <Careerpath data={data} key={index} />
              </>)) : <Spinner style={{marginLeft:"65%"}} animation="border" variant="primary" />}</div>
          {/* </div> */}
          
      </>
  )
}

export default Careerview
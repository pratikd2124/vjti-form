import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button, Modal } from 'react-bootstrap';



const TrackCards = () => {
  const [jobs, setjobs] = useState([])
  const url = "http://localhost:5000/user/jobs"

  useEffect(() => {
    fetch(url + "/getjobsbyemail/" + JSON.parse(localStorage.getItem("user-vjti")).email, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => {
      res.json().then(data => {

        console.log(data)
        setjobs(data.data)
      })
    })
  }, [])

  const [show, setShow] = useState(false);
  const [subdata, setsubdata] = useState([])
  // /getappliedcandidates/:jobid

  const handleView = (id) => {
    console.log(id)
    fetch(url + "/getcandidates/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => {
      res.json().then(data => {
          console.log(data)
          setsubdata(data.data)
          setShow(true)

      })
    })
  }


  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Job Title</th>
            <th>Job Location</th>
            <th>Job Salary</th>
            <th>Job Type</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {jobs ? jobs.map((data, index) => (<tr>
            <td>{index + 1}</td>
            <td>{data.jobtitle}</td>
            <td>{data.location}</td>
            <td>{data.salary}</td>
            <td>{data.jobType}</td>
            <td><Button variant="primary" onClick={() =>{handleView(data._id)} }>
              View
            </Button></td>
          </tr>)) : ""}

        </tbody>
      </Table>

      <Modal show={show} style={{ marginTop: "5vh" }} size="lg" onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Candidate List</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {subdata ? subdata.map((data, index) => (<tr>
                <td>{index + 1}</td>
                <td>{data.userid.username}</td>
                <td>{data.userid.email}</td>
                <td>{new Date(data.createdAt).toISOString()}</td>
                <td>{data.status}</td>
                
              </tr>)) : ""}

            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>

  )
}

export default TrackCards;
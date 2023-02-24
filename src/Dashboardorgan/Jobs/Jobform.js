import React, { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



  
const Jobform = () => {
    const [userInput, setUserInput] = useState({
        jobtitle:"", 
        desc: "", 
        laocation:"",
        salary: "",
        startdate: "",
        enddate: "",
        name: "",
        grade: "",
        category:""
        
    })

  return (
      <>
      <Form>
      <Form.Group className="mb-3" controlId="jobtitle">
        <Form.Label>Job Title</Form.Label>
        <Form.Control type="text" placeholder="Job Title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="jobdec">
        <Form.Label>Job Desciption</Form.Label>
        <Form.Control type="text" placeholder="Job Desciption" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="jobdec">
        <Form.Label>Job Location</Form.Label>
        <Form.Control type="text" placeholder="Job Location" />
      </Form.Group>
        <Form.Group className="mb-3" controlId="jobdec">
        <Form.Label>Salary Offered</Form.Label>
        <Form.Control type="text" placeholder="Salary Offered" />
      </Form.Group>
        <Form.Group className="mb-3" controlId="jobdec">
        <Form.Label>Job Type</Form.Label>
        <Form.Select aria-label="Default select example">
            <option>Select Job Type</option>
            <option value="1">Internship</option>
            <option value="2">Part Time</option>
            <option value="3">Full Time</option>
        </Form.Select>
      </Form.Group>      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </>
  )
}

export default Jobform
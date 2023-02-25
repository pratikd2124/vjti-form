import React, { useState} from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

const Hire = () => {
  return (
      <>
      <Form>
      <Form.Group className="mb-3" controlId="jobtitle">
        <Form.Label>Project Title</Form.Label>
        <Form.Control type="text" placeholder="Job Title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="jobdec">
        <Form.Label>Job Desciption</Form.Label>
        <Form.Control type="text" placeholder="Job Desciption" />
      </Form.Group>
      
        <Form.Group className="mb-3" controlId="jobdec">
        <Form.Label>Estimated Stipend offered</Form.Label>
        <Form.Control type="text" placeholder="Salary Offered" />
      </Form.Group>
      
        <Form.Group className="mb-3" controlId="jobdec">
        <Form.Label>Skills Required</Form.Label>
        <Form.Control type="text" placeholder="Skills Required" />
      </Form.Group>        
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  )
}
export default Hire;
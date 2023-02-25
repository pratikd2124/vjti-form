import React, { useState} from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Skills from '../../Employeeform/Skills';

const Hire = (props) => {
  return (
      <>
      <Form>
      <Form.Group className="mb-3" controlId="jobtitle">
        <Form.Label>Company Name</Form.Label>
        <Form.Control value={props.userinput.companyname} onChange={(e)=>{props.setUserInput({...props.userinput,companyname:e.target.value})}} type="text" placeholder="Job Title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="jobtitle">
        <Form.Label>Project Title</Form.Label>
        <Form.Control value={props.userinput.title} onChange={(e)=>{props.setUserInput({...props.userinput,title:e.target.value})}} type="text" placeholder="Job Title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="jobdec">
        <Form.Label>Job Desciption</Form.Label>
        <Form.Control value={props.userinput.desc} onChange={(e)=>{props.setUserInput({...props.userinput,desc:e.target.value})}} type="text" placeholder="Job Desciption" />
      </Form.Group>
      
        <Form.Group className="mb-3" controlId="jobdec">
        <Form.Label>Estimated Stipend offered</Form.Label>
        <Form.Control value={props.userinput.salary} onChange={(e)=>{props.setUserInput({...props.userinput,salary:e.target.value})}} type="text" placeholder="Salary Offered" />
      </Form.Group>
      
        <Form.Group className="mb-3" controlId="jobdec">
        <Form.Label>Skills Required</Form.Label>
        <Skills selectedSkills={props.selectedSkills} setSelectedSkills={props.setSelectedSkills} />
      </Form.Group>        
     
    </Form>
    </>
  )
}
export default Hire;
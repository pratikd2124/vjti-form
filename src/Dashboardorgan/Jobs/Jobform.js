import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Skillinput from '../../Employeeform/Skillinput';
import Skills from '../../Employeeform/Skills';


const Jobform = (props) => {
  const [show1, setShow1] = useState(false)
  const handleShow1 = () => setShow1(true)
  const handleClose1 = () => setShow1(false);

  const handleSubmit = async () => {
    handleClose1()
  }

  console.log(props.userInput,props.selectedSkills)
  
  return (
    <>
      <Form >
        <Form.Group className="mb-3" controlId="jobtitle">
          <Form.Label>Job Title</Form.Label>
          <Form.Control value={props.userInput.jobtitle} onChange={(e) => { props.setUserInput({ ...props.userInput, jobtitle: e.target.value }) }} type="text" placeholder="Job Title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="jobdec">
          <Form.Label>Job Desciption</Form.Label>
          <Form.Control value={props.userInput.jobdec} onChange={(e) => { props.setUserInput({ ...props.userInput, jobdec: e.target.value }) }} type="text" placeholder="Job Desciption" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="jobdec">
          <Form.Label>Job Location</Form.Label>
          <Form.Control value={props.userInput.jobloc} onChange={(e) => { props.setUserInput({ ...props.userInput, jobloc: e.target.value }) }} type="text" placeholder="Job Location" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="jobdec">
          <Form.Label>Salary Offered</Form.Label>
          <Form.Control value={props.userInput.salary} onChange={(e) => { props.setUserInput({ ...props.userInput, salary: e.target.value }) }} type="text" placeholder="Salary Offered" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="jobdec">
          <Form.Label>Job Type</Form.Label>
          <Form.Select value={props.userInput.jobtype} onChange={(e) => { props.setUserInput({ ...props.userInput, jobtype: e.target.value }) }} aria-label="Default select example">
            <option>Select Job Type</option>
            <option value="internship">Internship</option>
            <option value="parttime">Part Time</option>
            <option value="fulltime">Full Time</option>
          </Form.Select>
        </Form.Group>
        {/* <h4>Skills</h4> */}
          <div className="container p-2">
            {/*  --------------- skillinput --------------- */}
            <Skills selectedSkills={props.selectedSkills} setSelectedSkills={props.setSelectedSkills} />
            {/* <Skillinput selectedSkills={props.selectedSkills} setSelectedSkills={props.setSelectedSkills} /> */}
          </div>
          {/* <button className="btn btn-primary mx-2" type="button" onClick={handleShow1} >Add Skills</button> */}
      


      </Form>
    </>
  )
}

export default Jobform
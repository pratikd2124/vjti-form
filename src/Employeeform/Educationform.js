import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Educationform = (props) => {
  return (
    <div>
    <Form>
      <Form.Group className="mb-3" controlId="university">
        <Form.Label>School / University</Form.Label>
        <Form.Control onChange={(e)=>{props.setUserInput.name(e.target.value)}} value={props.userInput.name} type="text" placeholder="Enter School / University name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="degree">
        <Form.Label>Degree</Form.Label>
        <Form.Control type="text" onChange={(e)=>{props.setUserInput.degree(e.target.value)}} value={props.userInput.degree} placeholder="Ex. Bachelor's of..." />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="degree">
        <Form.Label>Field of study</Form.Label>
        <Form.Control type="text"  placeholder="Ex. Bachelor's of..." />
    </Form.Group>
              
    <Form.Group className="mb-3" controlId="startdt">
        <Form.Label>Start Date</Form.Label>
        <Form.Control type="date" onChange={(e)=>{props.setUserInput.startdate(JSON.stringify(e.target.value))}} value={props.userInput.startdate} placeholder="Enter end date" />
            {/* <Form.Select>
                      <option>Month</option>     
                      <option>January</option> 
                      <option>February</option> 
                      <option>March</option> 
                      <option>April</option> 
                      <option>May</option> 
                      <option>June</option> 
                      <option>July</option> 
                      <option>August</option> 
                      <option>September</option> 
                      <option>October</option>  
                      <option>November</option>  
                      <option>December</option> 
            </Form.Select> */}
        </Form.Group>
          
        <Form.Group className="mb-3" controlId="enddt">
        <Form.Label>End Date</Form.Label>
            <Form.Control type="date" onChange={(e)=>{props.setUserInput.enddate(JSON.stringify(e.target.value))}} value={props.userInput.enddate} placeholder="Enter end date" />
        </Form.Group>
             
    <Form.Group className="mb-3" controlId="grade">
        <Form.Label>Grade</Form.Label>
        <Form.Control type="text" onChange={(e)=>{props.setUserInput.grade(e.target.value)}} value={props.userInput.grade} placeholder="A,B,C+ or 7.5, 8, 9..." />
    </Form.Group>        
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Educationform
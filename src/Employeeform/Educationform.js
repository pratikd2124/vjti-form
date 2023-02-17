import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Educationform = (props) => {
  return (
    <div>
    <Form>
      <Form.Group className="mb-3" controlId="university">
        <Form.Label>School / University</Form.Label>
        <Form.Control onChange={(e)=>{props.setuserInput({...props.userInput,name:e.target.value})}} defaultValue={props.userInput.name} type="text" placeholder="Enter School / University name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="degree">
        <Form.Label>Degree</Form.Label>
        <Form.Control type="text" onChange={(e)=>{props.setuserInput({...props.userInput,degree:e.target.value})}} defaultValue={props.userInput.degree} placeholder="Ex. Bachelor's of..." />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="degree">
        <Form.Label>Field of study</Form.Label>
        <Form.Control type="text" onChange={(e)=>{props.setuserInput({...props.userInput,category:e.target.value})}} defaultValue={props.userInput.category}  placeholder="Ex. Bachelor's of..." />
    </Form.Group>
              
    <Form.Group className="mb-3" controlId="startdt">
        <Form.Label>Start Date</Form.Label>
        <Form.Control type="date" onChange={(e)=>{props.setuserInput({...props.userInput,startdate:e.target.value})}} defaultValue={props.userInput.startdate} placeholder="Enter end date" />
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
            <Form.Control type="date" onChange={(e)=>{props.setuserInput({...props.userInput,enddate:e.target.value})}} defaultValue={props.userInput.enddate} placeholder="Enter end date" />
        </Form.Group>
             
    <Form.Group className="mb-3" controlId="grade">
        <Form.Label>Grade</Form.Label>
        <Form.Control type="text" onChange={(e)=>{props.setuserInput({...props.userInput,grade:e.target.value})}} defaultValue={props.userInput.grade} placeholder="A,B,C+ or 7.5, 8, 9..." />
    </Form.Group>        
     
    </Form>
    </div>
  )
}

export default Educationform
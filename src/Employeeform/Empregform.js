import React, { useState } from 'react';
import './emp.css'
import UploadCv from './UploadCv.js'
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Educationform from './Educationform.js';
import Skills from './Skills.js';
import Educationdeatil from './Educationdetail.js';
import Skillinput from './Skillinput';

const Empregform = () => {

    

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const handleShow1 = () => setShow1(true)
    const handleClose1 = () => setShow1(false);
  
    const [userinput, setuserinput] = useState([]);
    
  const [userInput, setUserInput] = useState({
    degree: "",
    startdate: "",
    enddate: "",
    name: "",
    grade: "",
    category:""
    
  })
  
  
  return (
      <div style={{background:'rgba(245,245,255,0.5)'}}> 
          
          <div className="card shadow p-3 col-md-8 mx-auto mt-5">
              
          <div className="form-group my-3">
                  <div className="">
                  {/* <UploadCv/> */}
                <label>Upload your CV:</label>
                <input type="file" className="form-control" aria-label="file example" />
            </div>      
        </div>
              <hr />
              
              <h4 className="text-center">OR</h4>

              <hr />
              
        <form>
          <div className="form-group">
            <label for="exampleInputName">Full Name</label>
                      <input type="text" name="fullname" className="form-control" id="userInputName" placeholder="Enter your name and surname"  />
              {/* <TextField id="standard-basic" label="Full Name" variant="standard" /> */}
                      
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1" required="required">Email address</label>
            <input type="email" name="email" className="form-control" id="userInputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" id="userInputpassword" aria-describedby="" placeholder="Enter password"/>
          </div>
        <div className="form-group">
            <label>Preferred Location / City</label>
            <input type="text" className="form-control" id="userInputcity" placeholder="Enter preffered city"/>       
        </div>
                  
        <hr />
        <div className="card shadow-sm p-4 m-2 my-3">
            <h4>Education</h4>
            <Educationdeatil/>
            <button  className="btn btn-primary mx-2" type="button" onClick={handleShow} >Add education details</button>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <Educationform setuserInput={setUserInput } userInput ={userInput} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Discard
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
          </Modal>
          
        <div className="card shadow-sm p-4 m-2 my-3">
            <h4>Skills</h4>
            <div className="container p-2">
            <Skillinput/>
            </div>
            <button className="btn btn-primary mx-2" type="button" onClick={handleShow1} >Add Skills</button>
        </div>
        <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Add skills</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Skills/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Discard
          </Button>
          <Button variant="primary" onClick={handleClose1}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
                  
          <button type="submit" className="btn btn-primary">Confirm</button>
        </form>
      </div> 
      
    </div>
    
  )
}

export default Empregform


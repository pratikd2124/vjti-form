import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Jobform from './Jobform.js'

const AddJobs = () => {

    const [show1, setShow1] = useState(false);
    
    const handleShow1 = () => setShow1(true)
    const handleClose1 = () => setShow1(false);

    const handleSubmit = async() =>{
        handleClose1()
    }
    
  return (
      <>
        <div classname="container mx-auto">
            <button className="btn btn-primary mx-2" type="button" onClick={handleShow1} >Add Jobs</button>
            <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                <Modal.Title>Add Jobs</Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                    <Jobform/>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose1}>
                    Discard
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
      </div>
      </>
  )
}

export default AddJobs
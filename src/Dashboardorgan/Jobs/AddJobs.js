import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Jobform from './Jobform.js'

const AddJobs = (props) => {

    const [show1, setShow1] = useState(false);

    const handleShow1 = () => setShow1(true)
    const handleClose1 = () => setShow1(false);
    const url = "http://localhost:5000/user/jobs"


    const [userinput, setUserInput] = useState({
        jobtitle: "",
        jobdec: "",
        jobloc: "",
        salary: "",
        jobtype: ""
    });

    const [selectedSkills, setSelectedSkills] = useState([]);


    const handleSubmit = () => {
        const json = {
            jobtitle: userinput.jobtitle,
                desc: userinput.jobdec,
                location: userinput.jobloc,
                salary: userinput.salary,
                jobType: userinput.jobtype,
                skills: selectedSkills,
                emailid:JSON.parse(localStorage.getItem("user-vjti")).email
        }
        fetch(url + "/addJob", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                job: json
            })
        }).then((res) => {
            res.json().then(data=>{
                console.log(data)
                handleClose1()
                props.handleGet()
                alert("Job Added Successfully")	
            })
        })
       
    }





    return (
        <>
            <div classname="container mx-auto " >
                <button className="btn btn-primary mx-2" type="button" onClick={handleShow1} >Add Jobs</button>
                <Modal show={show1} onHide={handleClose1} style={{ marginTop: "5%" }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Jobs</Modal.Title>
                    </Modal.Header>
                    <Modal.Body scrollable>
                        <Jobform userInput={userinput} setUserInput={setUserInput} selectedSkills={selectedSkills} setSelectedSkills={setSelectedSkills} />
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
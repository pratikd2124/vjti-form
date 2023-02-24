import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Jobform from './Jobform.js'

const EditJob = (props) => {

    
    const handleClose1 = () => props.setShow1(false);
    const url = "http://localhost:5000/user/jobs"


    const [userinput, setUserInput] = useState({
        jobtitle: props.data.jobtitle,
        jobdec: props.data.jobdesc,
        jobloc: props.data.location,
        salary: props.data.salary,
        jobtype: props.data.jobtype
    });

    const [selectedSkills, setSelectedSkills] = useState(props.data.skills);


    const handleSubmit = () => {
        const json = {
            jobtitle: userinput.jobtitle,
            desc: userinput.jobdec,
            location: userinput.jobloc,
            salary: userinput.salary,
            jobType: userinput.jobtype,
            skills: selectedSkills
        }
        fetch(url + "/updateJob/"+props.data._id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                job: json
            })
        }).then((res) => {
            res.json().then(data => {
                console.log(data)
                handleClose1()
                props.handleGet()
                alert("Job Edited Successfully")
            })
        })

    }

    return (
        <>
            <div classname="container mx-auto " >
                <Modal show={props.show1} onHide={handleClose1} style={{ marginTop: "5%" }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Job</Modal.Title>
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

export default EditJob
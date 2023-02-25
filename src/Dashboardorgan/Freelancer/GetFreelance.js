import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Hire from './Hire.js'

const GetFreelance = (props) => {

    const [show1, setShow1] = useState(false);

    const handleShow1 = () => setShow1(true)
    const handleClose1 = () => setShow1(false);

    const url = "http://localhost:5000/user/jobs"


    const [userinput, setUserInput] = useState({
        companyname: "",
        title: "",
        desc: "",
        salary: "",
    });

    const [selectedSkills, setSelectedSkills] = useState([]);


    const handleSubmit = async () => {
        const json = {
            companyname: userinput.companyname,
            title: userinput.title,
            desc: userinput.desc,
            salary: userinput.salary,
            skills: selectedSkills,
            emailid: JSON.parse(localStorage.getItem("user-vjti")).email
        }
        fetch(url + "/addFreelancer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                freelancer: json
            })
        }).then((res) => {
            res.json().then(data => {
                console.log(data)
                handleClose1()
                handleGet()
                alert("Job Added Successfully")
            })
        })

    }

    const handleGet = () => {
        fetch(url + "/getfreelancerbyemail/" + JSON.parse(localStorage.getItem("user-vjti")).email, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json().then(data => {
            props.setdata([...props.data, { ...data.data }])
        }))
    }



    return (
        <>
            <div classname="container mx-auto">
                <button className="btn btn-primary mx-2" type="button" onClick={handleShow1} >Hire A Freelancer</button>
                <Modal size="lg" aria-labelledby="contained-modal-title-vcenter"
                    centered show={show1} onHide={handleClose1}>
                    <Modal.Header closeButton>
                        <Modal.Title>Hire A Freelancer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Hire selectedSkills={selectedSkills} setSelectedSkills={setSelectedSkills} userinput={userinput} setUserInput={setUserInput} />
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

export default GetFreelance
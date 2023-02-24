import React, { useState } from 'react';
import './emp.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Educationform from './Educationform.js';
import Skills from './Skills.js';
import Educationdeatil from './Educationdetail.js';
import Skillinput from './Skillinput';
import { useNavigate } from 'react-router-dom';

const Empregform = () => {

  const navigate = useNavigate()

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShow1 = () => setShow1(true)
  const handleClose1 = () => setShow1(false);

  const [userinput, setuserinput] = useState([]);

  const [userInput, setUserInput] = useState({
    

    laocation: "",
    degree: "",
    startDate: "",
    endDate: "",
    name: "",
    grade: "",
    category: ""
  })

  const handlePushEductaion = () => {
    if (userInput.name === "" || userInput.degree === "" || userInput.startDate === "" || userInput.endDate === "") {
      alert("Please fill all the fields")
      return
    }
    setuserinput([...userinput, { university: userInput.name, degree: userInput.degree, startDate: userInput.startDate, endDate: userInput.endDate, grade: userInput.grade, category: userInput.category }])
    setUserInput({
      laocation: "",
      degree: "",
      startDate: "",
      endDate: "",
      name: "",
      grade: "",
      category: ""
    })
    handleClose()
  }


  const handleSubmit = async () => {
    handleClose1()
  }

  const handlePreview = (e) => {
    e.preventDefault()
    navigate("/preview", { state: { userInput:userinput, selectedSkills } })
  }

  const [selectedSkills, setSelectedSkills] = useState([])
  const user = JSON.parse(localStorage.getItem('user-vjti'))

  console.log(userinput)

  return (
    <div style={{ background: 'rgba(245,245,255,0.5)' }}>

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
            <input type="text" disabled value={user.username} name="fullname" className="form-control" id="userInputName" placeholder="Enter your name and surname" />
            {/* <TextField id="standard-basic" label="Full Name" variant="standard" /> */}

          </div>
          <div className="form-group">
            <label for="exampleInputEmail1" required="required">Email address</label>
            <input type="email" disabled name="email" value={user.email} className="form-control" id="userInputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" disabled className="form-control" value={user.password || ""} id="userInputpassword" aria-describedby="" placeholder="Enter password" />
          </div>
          <div className="form-group">
            <label>Preferred Location / City</label>
            <input type="text" disabled className="form-control" id="userInputcity" placeholder="Enter preffered city" />
          </div>

          <hr />
          <div className="card shadow-sm p-4 m-2 my-3">
            <h4>Education</h4>
            <Educationdeatil userinput={userinput} />
            <button className="btn btn-primary mx-2" type="button" onClick={handleShow} >Add education details</button>
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Educationform setuserInput={setUserInput} userInput={userInput} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Discard
              </Button>
              <Button variant="primary" onClick={handlePushEductaion}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <div className="card shadow-sm p-4 m-2 my-3">
            <h4>Skills</h4>
            <div className="container p-2">
              {/*  --------------- skillinput --------------- */}
              <Skillinput selectedSkills={selectedSkills} />
            </div>
            <button className="btn btn-primary mx-2" type="button" onClick={handleShow1} >Add Skills</button>
          </div>
          <Modal show={show1} onHide={handleClose1}>
            <Modal.Header closeButton>
              <Modal.Title>Add skills</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* --------------------- skills page ------------ */}
              <Skills selectedSkills={selectedSkills} setSelectedSkills={setSelectedSkills} />
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

          <button onClick={(e) => { handlePreview(e) }} className="btn btn-primary">Preview</button>
        </form>
      </div>

    </div>

  )
}

export default Empregform


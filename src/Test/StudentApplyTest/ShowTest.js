import React, { useEffect, useState } from 'react'
import { Alert, Button, Card, Container } from 'react-bootstrap'
import ModalComponent from '../ModalComponent'
import { useNavigate } from 'react-router-dom'

const ShowTest = () => {

    const [question_sets, setquestionsets] = useState([])
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();

    const role = JSON.parse(localStorage.getItem("user-vjti")).role

    const url = "http://localhost:5000"

    useEffect(() => {
        fetch(url + "/user/test/get", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }

        })
            .then(res => res.json().then(data => {
                console.log(data)
                if (data.success) {
                    console.log(data);
                    setquestionsets(data.data);
                } else {
                    setquestionsets([])
                }
            }))
    }, [])

    const handlenavigate = (id, testname) => {
        navigate('/dotest', { state: { testid: id, testname: testname } })
    }

    
  return (
    <Container >

            <h3 className='mt-2' style={{ textAlign: "center", cursor: "pointer" }}><u>Assessments</u></h3>
            
            {/* create list of question set with timestamp using react-bootstrap */}
            {question_sets.length > 0 ? question_sets?.map(question_set => {
                return (
                    <>
                    {/* <Card className="mt-2 mb-2" style={{ cursor: "pointer" }} key={question_set._id}  >
                        <p className='ms-2'>Exam Title : <h3>{question_set.testname || "Test Name"}</h3></p>
                        <p className='ms-2'>Duration : {question_set.duration || "00:00:00"}</p>
                        <p className='ms-2'>Category : {question_set.category || "Category"}</p>
                        <p className='ms-2'>Level : {question_set.level || "Level"}</p>
                        <p className='ms-2'>Score per question : {question_set.score || "1"}</p>
        
                    </Card> */}
                     <div className="col-xl-12 col-lg-4 mb-4">
                     <div className="card text-primary-emphasis bg-info-subtle border-primary-subtle rounded-3  w-75 h-100 p-2">
                         <div className="card-body d-flex flex-column align-items-center">
                             <h4 class="card-title">Exam Title :<b>     {question_set.testname || "Test Name"}</b></h4>
                                    <p className="fw-semibold">Duration :       {question_set.duration || "00:00:00"}  </p>
                                    <p className="fw-semibold"> Category :      {question_set.category || "Category"}</p>
                                    <p className='card-text'>Level :       {question_set.level || "Level"}</p> 
                                    <p className='fw-bolder'>Score per question :   {question_set.score || "1"}</p>

                             <button onClick={() => { handlenavigate(question_set._id,question_set.testname) }} className="btn btn-primary border-white mt-auto">Start Test</button>
                         </div>
                     </div>
                 </div>
                    </>
                    
                )
            }
            ) : <Alert className='mt-2' variant='primary'>Nothing to show here</Alert>}
        </Container>
  )
}

export default ShowTest
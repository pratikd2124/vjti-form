import React, { useEffect, useState } from 'react';
import { Container, Button, Form, FormGroup, FormControl, FormLabel, Modal, Card, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import ModalComponent from '../ModalComponent';

function ViewTest() {
    const [question_set, setquestionset] = useState("")
    const [question_sets, setquestionsets] = useState([])

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();
    const url = "http://localhost:5000"
    
    const authorid = JSON.parse(localStorage.getItem("user-vjti"))._id
    useEffect(() => {
        fetch(url + "/user/test/getauthor/"+authorid, {
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
            
    }, [authorid])

    // function handleaddquestion() {
    //     let json = Object.assign({ "question_set_name": question_set });
    //     fetch(url + "/add_new_question_set", {
    //         method: "POST",
    //         body: JSON.stringify(json),
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {

    //             console.log(data)
    //             fetch(url + "/show_question_sets", {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json"
    //                 }

    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     if (data.Error) {
    //                         setquestionsets([])
    //                     }
    //                     console.log(data);
    //                     setquestionsets(data);
    //                     handleClose()
    //                 })
    //         })

    // }

    function handlenavigate(id,title) {
        navigate("/addtest", { state: {testid:id,title:title} });
    }


    const [testname, settestname] = useState("")
    const [category, setcategory] = useState("")
    const [level, setlevel] = useState("")
    const [duration, setduration] = useState("")
    const [score, setScore] = useState("")

    const role = JSON.parse(localStorage.getItem("user-vjti")).role
    const jsonModal = [
        {
            "label": "Test Name",
            "type": "text",
            "ftype": "control",
            "varSet": settestname,
            "dvalue": testname
        },
        {
            "label": "Field/Category",
            "type": "text",
            "ftype": "control",
            "varSet": setcategory,
            "dvalue": category

        },
        {
            "label": "Level",
            "type": "text",
            "ftype": "select",
            "varSet": setlevel,
            "options": [
                {
                    "label": "Select Level",
                    "value": ""
                },
                {
                    "label": "Easy",
                    "value": "Easy"
                },
                {
                    "label": "Medium",
                    "value": "Medium"
                },
                {
                    "label": "Hard",
                    "value": "Hard"
                }
            ],
            "dvalue": level

        },
        {
            "label": "Duration in minutes",
            "type": "number",
            "ftype": "control",
            "varSet": setduration,
            "dvalue": duration

        },
        {
            "label": "Per Question Score",
            "type": "number",
            "ftype": "control",
            "varSet": setScore,
            "dvalue": score
        }
    ]

    console.log(testname, category, level, duration, score)

    const handleaddTest = () => {
        if (testname && category && level && duration && score) {
            console.log("yeah submitted")
            const test = {
                testname: testname,
                category: category,
                level: level,
                duration: duration,
                score: score,
                authorid: authorid,
            }
            fetch(url + "/user/test/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    test
                })
            }).then(res => res.json().then(data => {
                console.log(data)
                if (data.data) {

                    fetch(url + "/user/test/get", {
                        method: "GET"
                    }).then((res) => {
                        res.json().then((res) => {
                            handleClose()
                            if (data.success) {
                                alert("Course added successfully")
                                console.log(res.data)
                                setquestionsets(res.data)
                            }
                            else {
                                alert("Something went wrong")
                            }

                        })
                    })

                }
            }))

        }
        else {
            alert("Please add all fields")
        }
    }


    return (
        <Container >

            <h3 className='mt-2' style={{ textAlign: "center", cursor: "pointer" }}><u>Assessments</u></h3>
            {role === "employee" && <div className='d-flex'><Button className="mt-2 me-2" onClick={() => { handleShow() }}>Add Question Set</Button></div>}
            <ModalComponent size={"lg"} modalHeader={"Add New Test"} modalJson={jsonModal} show={show} handleaddquestion={handleaddTest} handleClose={handleClose} handleShow={handleShow} />

            {/* create list of question set with timestamp using react-bootstrap */}
            {question_sets.length > 0 ? question_sets?.map(question_set => {
                return (
                    <>
                    <div className="col-xl-12 col-lg-4 mb-4">
                     <div className="card mt-2  text-primary-emphasis bg-info-subtle border-primary-subtle rounded-3  w-75 h-100 p-2">
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
                        
                        {/* <Card className="mt-2 mb-2" style={{ cursor: "pointer" }} key={question_set._id} onClick={() => { handlenavigate(question_set._id,question_set.testname) }} >
                        <p className='ms-2'>Exam Title : <h3>{question_set.testname || "Test Name"}</h3></p>
                        <p className='ms-2'>Duration : {question_set.duration || "00:00:00"}</p>
                        <p className='ms-2'>Category : {question_set.category || "Category"}</p>
                        <p className='ms-2'>Level : {question_set.level || "Level"}</p>
                        <p className='ms-2'>Score per question : {question_set.score || "1"}</p>
        
                    </Card> */}
                    </>
                    
                    
                )
            }
            ) : <Alert className='mt-2' variant='primary'>Nothing to show here</Alert>}
        </Container>
    )
}

export default ViewTest;

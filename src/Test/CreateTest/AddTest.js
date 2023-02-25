
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, FormCheck, FormLabel, Row } from "react-bootstrap";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import ModalComponent from '../ModalComponent';
import './AddTest.css';

function AddTest(props) {
  const role = JSON.parse(localStorage.getItem("user-vjti")).role
  const [loading, setisloading] = useState(true)
  const { state } = useLocation()

  const [question, setquestion] = useState("")
  const [opt1, setopt1] = useState("")
  const [opt2, setopt2] = useState("")
  const [opt3, setopt3] = useState("")
  const [opt4, setopt4] = useState("")
  const [ansopt, setansopt] = useState("")
  const [titlePaper, settitlePaper] = useState(state.title || "Untitled Paper")

  const url = "http://localhost:5000"

  const [Hrs, setHrs] = useState("")
  const [Min, setMin] = useState("")

  const [quest, setquest] = useState([]);

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editShow, seteditShow] = useState(false)
  const editHandleClose = () => seteditShow(false);
  const editHandleShow = () => seteditShow(true);

  const [isActiveState, setisActiveState] = useState(false)

  useEffect(() => {
    fetch(url + "/user/test/getquestions/" + state.testid, {
      method: "GET"
    }).then((res) => {
      res.json().then((res) => {
        console.log(res.data)
        setquest(res.data)

      })
    })

    fetch(url + "/user/test/getduration/" + state.testid, {
      method: "GET"
    }).then((res) => {
      res.json().then((res) => {
        console.log(res.data)
        setisActiveState(res.data.isActive)
        var num = res.data.duration;
        var hours = (num / 60);
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
        setHrs(rhours)
        setMin(rminutes)
        setisloading(false)
      })
    })

  }, [state.testid, isActiveState])



  const handleaddquestion = () => {
    console.log(question, opt1, opt2, opt3, opt4, ansopt)
    if (question === "" || opt1 === "" || opt2 === "" || opt3 === "" || opt4 === "" || ansopt === "") return alert("Please fill all the fields")
    const questions = {
      "testid": state.testid,
      "question": question,
      "opt1": opt1,
      "opt2": opt2,
      "opt3": opt3,
      "opt4": opt4,
      "ans": ansopt
    }


    fetch(url + "/user/test/addquestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "question": questions,
      })
    })
      .then(res => res.json()
      ).then((datas) => {
        if (datas.success) {

          fetch(url + "/user/test/getquestions/" + state.testid, {
            method: "GET"
          }).then((res) => {
            res.json().then((res) => {
              console.log(res.data)
              setquest(res.data)

              if (res.data.length) {
                alert("Question Added successfully")
                handleClose()
              }
            })
          })
        }
        if (datas.error) {
          alert(datas.message)
          handleClose()
        }
      })

  }

  useEffect(() => { console.log(quest) }, [quest])
  const [queseditid, setqueseditid] = useState("")

  const handleeditquestion = () => {
    if (question === "" || opt1 === "" || opt2 === "" || opt3 === "" || opt4 === "" || ansopt === "") return alert("Please fill all the fields")
    console.log(question, opt1, opt2, opt3, opt4, ansopt)
    let json = { "question": question, "opt1": opt1, "opt2": opt2, "opt3": opt3, "opt4": opt4, "ans": ansopt, "testid": state.testid };
    fetch(url + "/user/test/updatequestion/" + queseditid, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "question": json,
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          fetch(url + "/user/test/getquestions/" + state.testid, {
            method: "GET"
          }).then((res) => {
            res.json().then((res) => {
              console.log(res.data)
              setquest(res.data)
              setansopt("")
              setopt1("")
              setopt2("")
              setopt3("")
              setopt4("")
              setquestion("")
              alert("Question Edited successfully")

            })
          })

        }
        else{
          alert(data.error)
        }
      })
    editHandleClose()
  }


  const handleRemove = (id) => {
    fetch(url + "/user/test/deletequestion/" + id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then(res => res.json().then(data => {
        if (!data.success) return alert(data.error)
        fetch(url + "/user/test/getquestions/" + state.testid, {
          method: "GET"
        }).then((res) => {
          res.json().then((res) => {
            console.log(res.data)
            setquest(res.data)
            alert("Question Deleted successfully")
          })
        })

      }))


  }

  const jsonModal = [
    {
      "label": "Question",
      "type": "text",
      "ftype": "control",
      "varSet": setquestion,
      "dvalue": question
    },
    {
      "label": "Option 1",
      "type": "text",
      "ftype": "control",
      "varSet": setopt1,
      "dvalue": opt1

    },
    {
      "label": "Option 2",
      "type": "text",
      "ftype": "control",
      "varSet": setopt2,
      "dvalue": opt2
    },
    {
      "label": "Option 3",
      "type": "text",
      "ftype": "control",
      "varSet": setopt3,
      "dvalue": opt3
    },
    {
      "label": "Option 4",
      "type": "text",
      "ftype": "control",
      "varSet": setopt4,
      "dvalue": opt4
    },
    {
      "label": "Answer",
      "type": "text",
      "ftype": "select",
      "varSet": setansopt,
      "options": [
        {
          "label": "Select Answer",
          "value": ""
        },
        {
          "label": "Option 1",
          "value": "opt1"
        },
        {
          "label": "Option 2",
          "value": "opt2"
        },
        {
          "label": "Option 3",
          "value": "opt3"
        },
        {
          "label": "Option 4",
          "value": "opt4"
        }],
      "dvalue": ""
    }
  ]

  const editJsonModal = [
    {
      "label": "Question",
      "type": "text",
      "ftype": "control",
      "varSet": setquestion,
      "dvalue": question
    },
    {
      "label": "Option 1",
      "type": "text",
      "ftype": "control",
      "varSet": setopt1,
      "dvalue": opt1

    },
    {
      "label": "Option 2",
      "type": "text",
      "ftype": "control",
      "varSet": setopt2,
      "dvalue": opt2
    },
    {
      "label": "Option 3",
      "type": "text",
      "ftype": "control",
      "varSet": setopt3,
      "dvalue": opt3
    },
    {
      "label": "Option 4",
      "type": "text",
      "ftype": "control",
      "varSet": setopt4,
      "dvalue": opt4
    },
    {
      "label": "Answer",
      "type": "text",
      "ftype": "select",
      "varSet": setansopt,
      "options": [
        {
          "label": "Option 1",
          "value": "opt1"
        },
        {
          "label": "Option 2",
          "value": "opt2"
        },
        {
          "label": "Option 3",
          "value": "opt3"
        },
        {
          "label": "Option 4",
          "value": "opt4"
        }],
      "dvalue": ansopt
    }
  ]
  const [title, setTitle] = useState("")
  const [titleshow, setTitleshow] = useState(false)
  const titlehandleShow = () => setTitleshow(true)
  const titlehandleClose = () => setTitleshow(false)
  const handletitleaddquestion = () => {
    if (title === "") return alert("Please fill all the fields")

    fetch(url + "/user/test/addtitle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        testid: state.testid,
        title: title
      })
    })
      .then(res => res.json().then(data => {
        if (data.data) {
          console.log(data)
          settitlePaper(data.data.name)

          alert("Title Added successfully")
          setTitleshow(false)
        }
      }))




  }

  const titlejsonModal = [
    {
      "label": "Question Set Title",
      "type": "text",
      "ftype": "control",
      "varSet": setTitle,
    }
  ]

  const handleSwitch = (checked) => {
    fetch(url + "/user/test/updateisActive/" + state.testid + "/"+checked, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json()
        .then((datas) => {
          console.log(datas)
          if (datas.error) {
            alert(datas.error)
          }
          else {
            fetch(url + "/user/test/getduration/" + state.testid, {
              method: "GET"
            }).then((res) => {
              res.json().then((res) => {
                console.log(res.data)
                setisActiveState(res.data.isActive)
                var num = res.data.duration;
                var hours = (num / 60);
                var rhours = Math.floor(hours);
                var minutes = (hours - rhours) * 60;
                var rminutes = Math.round(minutes);
                setHrs(rhours)
                setMin(rminutes)
                setisloading(false)
                if(res.data.isActive){
                  alert("Test is now Active")
                }else{
                  alert("Test is now Inactive")
                }
              })
            })
          }
        }))
  }

  const handleTime = (Hrs, Min) => {
    console.table(Hrs)
    fetch(url + "/user/test/addtesttimelimit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "testid": state.testid,
        "hr": Hrs,
        "min": Min
      })
    }).then(res => res.json().then(data => {
      if (data.data) {
        fetch(url + "/user/test/getactivetitletimelimit/" + state.testid, {
          method: "GET"
        }).then((res) => {
          res.json().then((res) => {
            console.log(res.data)
            if (res.data) {
              setisActiveState(res.data.active)
              setHrs(res.data.timelimit.hr)
              setMin(res.data.timelimit.min)
              settitlePaper(res.data.name)
              alert("Time updated successfully")
            }
          })
        })

      }
      else if (data.body) {
        alert("Invalid parameter try again")
      }
    }))
  }

const navigate = useNavigate()

  return (
    <Container>
      <Button onClick={()=>{role === "employee" ? navigate("/dashboard") : navigate("/organization")}}>Back</Button>
      <h3 className='mt-2' style={{ textAlign: "center", cursor: "pointer" }} onClick={role === "employee" && titlehandleShow}>{titlePaper} Test</h3>

      <hr/>
      {role === "employee" &&
        <>
        <div className='container p-2'>
        <Button style={{ float: "right", marginRight: "20%" }} className="mt-2 me-2" onClick={() => { handleShow(); setansopt(""); setopt1(""); setopt2(""); setopt3(""); setopt4(""); setquestion(""); }}>Add Questions</Button>
          <br />

          <Row>
            <Col>
              <Form.Label>Hrs : </Form.Label>
              <Form.Control type="number" defaultValue={Hrs} value={Hrs} onChange={(e) => { setHrs(e.target.value) }} disabled />
              {/* <option value={"0"}>0</option>
                <option value={"1"}>1</option>
                <option value={"2"}>2</option>
                <option value={"3"}>3</option>
                <option value={"4"}>4</option>
                <option value={"5"}>5</option>
              </Form.Select> */}
            </Col>
            <Col>
              <Form.Label>Mins : </Form.Label>
              <Form.Control type="number" defaultValue={Min} value={Min} onChange={(e) => { setMin(e.target.value) }} disabled />
              {/* {Hrs !== "0" && <option value={"0"}>00</option>}
                <option value={"5"}>5</option>
                <option value={"10"}>10</option>
                <option value={"15"}>15</option>
                <option value={"20"}>30</option>
                <option value={"25"}>45</option>

              </Form.Control> */}
            </Col>
            <Col>
              {/* <Button style={{ marginTop: "3vh" }} onClick={() => { handleTime(Hrs, Min) }}>Update</Button> */}
            </Col>
          </Row>


          <Row style={{ marginTop: "2%", marginBottom: "2%" }}>
            <Col>
              {!loading ? <Form.Check type="switch" defaultChecked={isActiveState} label="Live Mode" onChange={(e) => { handleSwitch(e.target.checked); setisActiveState(e.target.checked) }} /> : ""}
            </Col>
          </Row>
        </div>
          

        </>
      }
      <ModalComponent size={"lg"} modalHeader={"Add Question"} modalJson={jsonModal} show={show} handleaddquestion={handleaddquestion} handleClose={handleClose} handleShow={handleShow} />
      <ModalComponent size={"lg"} modalHeader={"Add Question Title"} modalJson={titlejsonModal} show={titleshow} handleaddquestion={handletitleaddquestion} handleClose={titlehandleClose} handleShow={titlehandleShow} />
      <ModalComponent size={"lg"} modalHeader={"Edit Question"} modalJson={editJsonModal} show={editShow} handleaddquestion={handleeditquestion} handleClose={editHandleClose} handleShow={editHandleShow} />
      {/* <FormControl className='mt-2' type="text" style={{ width: "50%" }} placeholder='Search by question Keyword ' onChange={(e) => { setfilterValue(e.target.value) }} /> */}
      <>

        {quest?.length > 0 ? quest?.map((data) => (
          <>
          {/* <Card key={data._id} style={{ marginTop: "1%", marginBottom: "1%" }} className='p-2 w-75 mx-2'>
            
            {role === "employee" && !loading && <div style={{ textAlign: "right" }}>
              <Button disabled={isActiveState} onClick={() => {
                editHandleShow();
                setqueseditid(data._id);
                setquestion(data["question"]);
                setopt1(data.opt1);
                setopt2(data.opt2);
                setopt3(data.opt3);
                setopt4(data.opt4);
                setansopt(data.ans)
              }} variant='primary' className=' ms-2'>Edit</Button>
              <Button disabled={isActiveState} className='ms-2 me-2' variant='danger' onClick={() => { handleRemove(data._id) }} >Remove</Button></div>}
            
              <FormLabel ><h5 className='mt-2 p-2'>Q. {data["question"]}</h5></FormLabel>
              <div className='container p-3 '>
            <FormCheck type='radio' checked={data.ans ? data.ans === "opt1" : false} label={data.opt1} defaultValue={data.opt1} />

            <FormCheck type='radio' checked={data.ans ? data.ans === "opt2" : false} label={data.opt2} defaultValue={data.opt2} />

            <FormCheck type='radio' checked={data.ans ? data.ans === "opt3" : false} label={data.opt3} defaultValue={data.opt3} />

            <FormCheck type='radio' checked={data.ans ? data.ans === "opt4" : false} label={data.opt4} defaultValue={data.opt4} />
            </div>
            

            </Card> */}
            <div class="container-test mt-sm-5 my-1">
    <div class="question ml-sm-5 pl-sm-5 pt-2">
        <div class="py-2 h5"><b>Q. {data["question"]}</b></div>
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3 p-2" id="options">
                  <label class="options">{data.opt1}
                <input type="radio" checked={data.ans ? data.ans === "opt1" : false} defaultValue={data.opt1} ClassName="radio" />
                <span class="checkmark"></span>
            </label>
            <label class="options">{data.opt2}
                <input type="radio" checked={data.ans ? data.ans === "opt2" : false} defaultValue={data.opt2} ClassName="radio"/>
                <span class="checkmark"></span>
            </label>
            <label class="options">{data.opt3}
                <input type="radio" checked={data.ans ? data.ans === "opt3" : false} defaultValue={data.opt3} ClassName="radio"/>
                <span class="checkmark"></span>
            </label>
            <label class="options">{data.opt4}
                <input type="radio" checked={data.ans ? data.ans === "opt4" : false} defaultValue={data.opt4} ClassName="radio"/>
                <span class="checkmark"></span>
            </label>
        </div>
    </div>
    <div class="d-flex align-items-center pt-3 p-2 w-100">
        <div id="prev">
            <button class="btn btn-primary m-2" disabled={isActiveState} onClick={() => {
                editHandleShow();
                setqueseditid(data._id);
                setquestion(data["question"]);
                setopt1(data.opt1);
                setopt2(data.opt2);
                setopt3(data.opt3);
                setopt4(data.opt4);
                setansopt(data.ans)
              }}>Edit</button>
        </div>
        <div class="ml-auto mr-sm-5">
            <button class="btn btn-danger m-2" disabled={isActiveState} onClick={() => { handleRemove(data._id) }}>Remove</button>
        </div>
    </div>
</div>
          </>
          
          

        )) : ""}
      </>
    </Container>
  )

}

export default AddTest;

import React, { useEffect } from 'react'
import { useState } from 'react'
import { Alert, Button, Container } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'

function DoTest(props) {
  const [useruid, setuseruid] = useState(JSON.parse(localStorage.getItem("user-vjti"))._id)
  const navigate = useNavigate()

  const { state } = useLocation()

  const url = "http://localhost:5000"
  useEffect(() => {
    fetch(url + "/show_active_sets_candidate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "uid": useruid
      })
    }).then(res => res.json()).then(data => {
      if (data.Error) return alert(data.Error)

    })
  }, [useruid, props.Cques_id])

  const handleStartTest = () => {
    fetch(url + "/user/test/updateteststart/" + state.testid + "/" + useruid, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => res.json()).then(data => {
      if (data.error) return alert(data.error)
      console.log(data)
      if(data.data.isFinish) return alert("You have already finished the test")

      localStorage.setItem("testdate", data.data.teststartedon)
      // convert min to hrs and min
      var num = data.test.duration;
      var hours = (num / 60);
      var rhours = Math.floor(hours);
      var minutes = (hours - rhours) * 60;
      var rminutes = Math.round(minutes);
      navigate("/applytest", { state: { testid: state.testid,min:rminutes,hrs:rhours,duration:data.test.duration } })

    })
    // navigate("/applytest", { state: { testid: state.testid } })

  }

  return (
    <Container>
      <h3 style={{ textAlign: "center" }}>Information Test </h3>
      <Alert variant="success">Please read the following instructions carefully before starting the test.<br />
        <ul>
          <li>Please don't reload page while test is going on</li>
          <li>Please don't close the tab while test is going on</li>
          <li>Please don't press back button while test is going on</li>
          <li>It's Time based examination </li>
          <li>If any mentioned activity is noted your response will autosubmit</li>
        </ul>
        <Button style={{ textAlign: "center" }} onClick={() => { handleStartTest() }}>Start</Button>
      </Alert>
    </Container>
  )
}

export default DoTest
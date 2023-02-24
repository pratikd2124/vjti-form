
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Otpreg = () => {

  // const [countDown, setCountDown] = React.useState(0);
  // const [runTimer, setRunTimer] = React.useState(false);

  // React.useEffect(() => {
  //   let timerId;

  //   if (runTimer) {
  //     setCountDown(60 * 5);
  //     timerId = setInterval(() => {
  //       setCountDown((countDown) => countDown - 1);
  //     }, 1000);
  //   } else {
  //     clearInterval(timerId);
  //   }

  //   return () => clearInterval(timerId);
  // }, [runTimer]);

  // React.useEffect(() => {
  //   if (countDown < 0 && runTimer) {
  //     console.log("expired");
  //     setRunTimer(false);
  //     setCountDown(0);
  //   }
  // }, [countDown, runTimer]);

  // const togglerTimer = () => setRunTimer((t) => !t);

  // const seconds = String(countDown % 60).padStart(2, 0);
  // const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);

  // // return (
  // //   <div className="App">
  // //     <div>
  // //       Time: {minutes}:{seconds}
  // //     </div>

  // //     <button type="button" onClick={togglerTimer}>
  // //       {runTimer ? "Stop" : "Start"}
  // //     </button>
  // //   </div>
  // // );
  const intervalRef = useRef(null);
  const [timer, setTimer] = useState('0:00');
  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return {
      total, minutes, seconds
    };
  }

  const [isExpired, setisExpired] = useState(false);
  function startTimer(deadline) {
    let { total, minutes, seconds } = getTimeRemaining(deadline);
    if (total >= 0) {
      setTimer(

        (minutes > 9 ? minutes : '0' + minutes) + ':' +
        (seconds > 9 ? seconds : '0' + seconds)
      )
    } else {
      clearInterval(intervalRef.current);
    }
    if (minutes === 0 && seconds === 0) {
      setisExpired(true);
    }
  }
  // let json = { 'min': props.timedata.minutes, 'hr': props.timedata.hours, 'sec': secs }

  function clearTimer(endtime) {
    setTimer(0 + ":00");
    if (intervalRef.current) clearInterval(intervalRef.current);
    const id = setInterval(() => {
      startTimer(endtime);
    }, 1000)
    intervalRef.current = id;
  }



  function getDeadlineTimer() {
    let deadline = new Date();

    deadline.setHours(deadline.getHours() + parseInt(0));
    console.log(parseInt(0));

    var currentDate = new Date();
    var storedDate = new Date(localStorage.getItem('date'));
    var diff = (currentDate - storedDate);
    var totalSeconds = (5 * 60) - (diff / 1000);
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = Math.floor(totalSeconds % 60);
    console.log(minutes + ' minutes and ' + seconds + ' seconds');

    deadline.setMinutes(deadline.getMinutes() + parseInt(localStorage.date ? minutes <= 5 && minutes >= 0 ? minutes : 0 : 5));
    deadline.setSeconds(deadline.getSeconds() + parseInt(localStorage.date ? minutes <= 5 && minutes >= 0 ? seconds : 0 : 0));
    console.log(deadline)

    return deadline;
  }

  useEffect(() => {
    clearTimer(getDeadlineTimer());
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [])

  const [otp, setOtp] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submit")

    const user = JSON.parse(localStorage.getItem("user-vjti"))
    
    console.log(user._id)


    fetch("http://localhost:5000/user/verifyOTP", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        otp,
        userid: user._id
      })
    }).then(res => res.json().then((data) => {
      console.log(data)
      if (data.success) {
        localStorage.removeItem("date")
        localStorage.removeItem("user-vjti")
        localStorage.setItem('user-vjti', JSON.stringify(data.data))
        alert("Email verified")
        const role = JSON.parse(localStorage.getItem("user-vjti")).role
        if (role === "employee") {
          navigate("/")
        }else{
          navigate("/dashboard")
        }
      } else {
        alert(data.error)
      }
    }))
  }

  const handleResendOTP = (e) => {
    e.preventDefault()
    console.log("resend otp")
    const user = JSON.parse(localStorage.getItem("user-vjti"))
    
    console.log(user._id)

    fetch("http://localhost:5000/user/resendOTP", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userid: user._id
      })
    }).then(res => res.json().then((data) => {
      console.log(data)
      if (data.success) {
        localStorage.removeItem("date")
        clearTimer(getDeadlineTimer())
        localStorage.setItem('date', new Date());
        alert("OTP sent")
      } else {
        alert(data.error)
      }
    }))
  }


  return (
    <div className="container card mx-auto border-1 shadow" style={{ "width": "70%" }}>
      <div className="text-center py-2">
        <h3>OTP Verification</h3>
      </div>
      <form>
        <div className="alert alert-success text-center mx-auto  col-md-5" role="alert">
          Verification Email has been sent
        </div>
        <div className="form-group col-md-5 mx-auto py-1 ">
          <label for="otp" className="h5">Enter Otp to verify email <b>{timer}</b></label>
          <input type="number" onChange={(e) => { setOtp(e.target.value) }} className="form-control" id="name" aria-describedby="" placeholder="Enter otp" />
        </div>

        <div className="text-center p-4">
          <button onClick={(e) => { handleSubmit(e) }} className="btn btn-primary w-50">Submit</button>
        </div>
        <div className="text-center p-4">
          <button onClick={(e) => { handleResendOTP(e) }} className="btn btn-link w-50">Resend Otp</button>
        </div>

      </form>
    </div>
  )
}

export default Otpreg
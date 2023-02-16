
import React, { useState, useRef, useEffect } from 'react'

const Otpreg = () => {
  
  const [countDown, setCountDown] = React.useState(0);
  const [runTimer, setRunTimer] = React.useState(false);

  React.useEffect(() => {
    let timerId;

    if (runTimer) {
      setCountDown(60 * 5);
      timerId = setInterval(() => {
        setCountDown((countDown) => countDown - 1);
      }, 1000);
    } else {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [runTimer]);

  React.useEffect(() => {
    if (countDown < 0 && runTimer) {
      console.log("expired");
      setRunTimer(false);
      setCountDown(0);
    }
  }, [countDown, runTimer]);

  const togglerTimer = () => setRunTimer((t) => !t);

  const seconds = String(countDown % 60).padStart(2, 0);
  const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);
  
  // return (
  //   <div className="App">
  //     <div>
  //       Time: {minutes}:{seconds}
  //     </div>

  //     <button type="button" onClick={togglerTimer}>
  //       {runTimer ? "Stop" : "Start"}
  //     </button>
  //   </div>
  // );

  return (
    <div className="container card mx-auto border-1 shadow" style={{ "width": "70%" }}>
          <div className="text-center py-2">
              <h3>OTP Verification</h3>
          </div>
          <form>
              <div class="alert alert-success text-center mx-auto  col-md-5" role="alert">
                Verification Email has been sent 
            </div>
            <div class="form-group col-md-5 mx-auto py-1 ">
                <label for="otp" class="h5">Enter Otp to verify email <b>{minutes}:{seconds}</b></label>
                <input type="number" class="form-control" id="name" aria-describedby="" placeholder="Enter otp"/>
            </div>

              <div class="text-center p-4">
                <button type="submit" class="btn btn-primary w-50">Submit</button>
            </div>
        <div class="text-center p-4">
                <button type="submit" class="btn btn-link w-50">Resend Otp</button>
              </div>
            <div class="text-center p-4">
            <button type="button" onClick={togglerTimer}>
             {runTimer ? "Stop" : "Start"}
            </button>
            </div>
          </form>
    </div>
  )
}

export default Otpreg
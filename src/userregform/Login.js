import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submit")
    fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then(res => res.json().then((data) => {
      console.log(data)
      if (data.success) {
        localStorage.setItem('user-vjti', JSON.stringify(data.data))
        localStorage.role = data.data.role
        alert("Login Successful")
        if (data.data.role === "employee") {
          navigate("/dashboard")
        } else {
          navigate("/organization")
        }
      } else {
        alert(data.error)
      }
    }))
  }

  return (
    <div className="container card mx-auto border-1 shadow" style={{ "width": "70%" }}>
      <div className="text-center py-2">
        <h3>Login</h3>
      </div>
      <form>

        <div class="form-group col-md-5 mx-auto  py-1 ">
          <label for="exampleInputEmail1" class="h5" >Email address</label>
          <input type="email" class="form-control" onChange={(e) => {
            setEmail(e.target.value)
          }} id="exampleInputEmail1" value={email} aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div class="form-group col-md-5 mx-auto  py-1 ">
          <label for="Password1" class="h5" >Password</label>
          <input type="password" class="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} id="pass" placeholder="Password" />
        </div>

        <div class="text-center p-4">
          <button onClick={(e) => {
            handleSubmit(e)
          }} class="btn btn-primary w-50">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login
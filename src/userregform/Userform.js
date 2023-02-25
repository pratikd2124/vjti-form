import React from 'react'
import { useNavigate } from 'react-router-dom';

const Userform = () => {
  const [userInput, setUserInput] = React.useState({
    name: "",
    email: "",
    password: "",
    cnfpassword: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, cnfpassword } = userInput;

    if (name && email && password && cnfpassword) {

      if (password === cnfpassword) {

        fetch("http://localhost:5000/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username:name,
            email,
            password,
            role: "employee"
          })
        }).then(res => res.json().then((data) => {
          console.log(data)
          if (data.success) {
            localStorage.setItem("user-vjti", JSON.stringify(data.data))
            // store current date in local storage
            localStorage.setItem('date', new Date());
            navigate("/otp")
          } else {
            alert(data.error)
          }
        }))


      } else {
        alert("Password not matched")
      }

    } else {
      alert("Please fill all the fields")
    }

  }

  const navigate = useNavigate()
  return (
    <>
      <body style={{background:'rgba(245,245,245,0.8)'}}>
      <div className="container card mx-auto border-1 shadow " style={{width:'70%', maxWidth:'700px',backgroundColor:'#0c008c',color:'white', borderRadius:'10px'}}>
      <div className="text-center py-2">
        <h3>Sign Up User</h3>
      </div>
      <form>
        <div className="form-group col-md-5 mx-auto py-1 p-2">
          <label for="name" className="h5">Name</label>
          <input type="text" onChange={handleChange} className="form-control" id="name" aria-describedby="" name="name" placeholder="Enter First name & last name" />
        </div>
        <div className="form-group col-md-5 mx-auto  py-1 p-2">
          <label for="exampleInputEmail1" className="h5">Email address</label>
          <input type="email" onChange={handleChange} className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="Enter email" />

        </div>
        <div className="form-group col-md-5 mx-auto  py-1 p-2">
          <label for="Password1" className="h5">Password</label>
          <input type="password" onChange={handleChange} className="form-control" id="pass" name="password" placeholder="Password" />
        </div>
        <div className="form-group col-md-5 mx-auto  py-1 p-2">
          <label for="Password2" className="h5">Confirm Password</label>
          <input type="password" onChange={handleChange} className="form-control" id="cnfpass" name="cnfpassword" placeholder="Confirm Password" />
        </div>

        <div className="text-center p-4">
          <button type="submit" className="btn btn-primary w-50" onClick={(e) => { handleSubmit(e) }}>Submit</button>
        </div>

        <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="/login"
          className="fw-bold text-body"><u>Login here</u></a></p>
      </form>
    </div>
      </body>
    
    </>
    
  )
}

export default Userform
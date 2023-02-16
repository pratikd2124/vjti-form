import React from 'react'

const Login = () => {
  return (
    <div className="container card mx-auto border-1 shadow" style={{ "width": "70%" }}>
          <div className="text-center py-2">
              <h3>Login</h3>
          </div>
          <form>
            
            <div class="form-group col-md-5 mx-auto  py-1 ">
                <label for="exampleInputEmail1" class="h5">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div class="form-group col-md-5 mx-auto  py-1 ">
                <label for="Password1" class="h5">Password</label>
                <input type="password" class="form-control" id="pass" placeholder="Password"/>
              </div>
             
              <div class="text-center p-4">
                <button type="submit" class="btn btn-primary w-50">Submit</button>
              </div>
            </form>
    </div>
  )
}

export default Login
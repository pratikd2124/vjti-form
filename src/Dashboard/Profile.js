import React, { useState,useEffect } from 'react'
import Chip from '@mui/material/Chip';
import { useLocation, useNavigate } from 'react-router-dom';

const Profile = () => {
    const params = useLocation();
  console.log(params?.state)
  const navigate = useNavigate()

  const handleSubmitEducation = () => {
    fetch("http://localhost:5000/user/employee/education/addeducation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        educations: params.state.userInput,
        userid: JSON.parse(localStorage.getItem('user-vjti'))._id
      })
    }).then(res => res.json().then((data) => {
      console.log(data)
      if (data.success) {
        fetch("http://localhost:5000/user/employee/skills/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            skills: params.state.selectedSkills,
            userid: JSON.parse(localStorage.getItem('user-vjti'))._id
          })
        }).then(res => res.json().then((data) => {
          console.log(data)
          if (data.success) {
            alert("User details saved successfully")
            navigate("/dashboard")
          } else {
            alert(data.error)
          }
        }))
        
      } else {
        alert(data.error)
      }
    }))

    }

    const [skills,setskills] = useState([])
    const url = "http://54.64.228.28:9000/user/employee/skills"
    useEffect(() => {
        fetch(url + "/get/" + JSON.parse(localStorage.getItem("user-vjti"))._id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            res.json().then((res) => {
                console.log(res.data.skills);
                if (res.success) {
                    setskills(res.data.skills)
                }
            })
        })        
    },[])
    
  return (
      <div >
          <h2>Profile</h2>
          <div class="container">
    <div class="main-body">
    
          
                    
    
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
                    <div class="mt-3">
                      <h4>{(JSON.parse(localStorage.getItem("user-vjti")).username)}</h4>
                      <p class="text-secondary mb-1">{(JSON.parse(localStorage.getItem("user-vjti")).email)}</p>
                      <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                      {/* <button class="btn btn-primary">Follow</button>
                      <button class="btn btn-outline-primary">Message</button> */}
                    </div>
                  </div>
                </div>
              </div>
                        </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {(JSON.parse(localStorage.getItem("user-vjti")).username)}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {(JSON.parse(localStorage.getItem("user-vjti")).email)}
                    </div>
                  </div>
                  <hr/>
                  
                  
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Bay Area, San Francisco, CA
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-12">
                      <button class="btn btn-info " >Edit</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row gutters-sm">
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3">Skills</h6>
                      <p></p>
                                          {/* <Chip label="Web Design" variant="outlined" /> */}
                                          {skills ? skills.map((data) => (<>
                                              <div className="container w-100">
                                              <button className="btn btn-outline-primary mx-3" disabled>{data}</button>
                                                <a class="btn btn-primary mx-3" target="__blank" href={`http://54.64.228.28/assesment/test/${JSON.parse(localStorage.getItem("user-vjti"))._id}/${data}`}>Take test</a>
                                              </div>     
                            <hr/>
                                          </>)) : ""}
                      
                        {/* <div className="container w-100 d-flex p-2">
                          <Chip label="NodeJs" variant="outlined" />
                            <a class="btn btn-primary ml-3" target="__blank" href="http://54.64.228.28/assesment/test//nodejs">Take test</a>
                                              
                       </div>
                      
                      <hr/>          
                        <div className="container p-2">
                         <Chip label="React JS" variant="outlined" />   
                         <a class="btn btn-primary " target="__blank" href="http://54.64.228.28/assesment/test/abcd/reactjs">Take test</a>           
                      </div>

                      <hr/>           
                      
                    <div className="container p-2">
                      <Chip label="Python" variant="outlined" />
                         <a class="btn btn-primary " target="__blank" href="http://54.64.228.28/assesment/test/abcd/python">Take test</a>           
                                              
                      </div>
                      <hr/>
                      
                        <div className="container p-2">
                            <Chip label="Django" variant="outlined" />
                         <a class="btn btn-primary " target="__blank" href="http://54.64.228.28/assesment/test/abcd/python">Take test</a>           
                                              
                      </div>
                      <hr/>             */}
                      
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3">Experience</h6>
                      <p>Project 1</p>
                      <hr/> 
                      <p>Project 2</p>
                      <hr/> 
                      <p>Project 3</p>
                      <hr/> 
                      <p>Project 4</p>
                      <hr/> 
                      <p>Project 5</p>
                      <hr/> 
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>

        </div>
    </div>
</div>

  )
}

export default Profile
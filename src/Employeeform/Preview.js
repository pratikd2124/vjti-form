import React from 'react'
import Table from 'react-bootstrap/Table';
import Skills from './Skills.js';
import { useLocation, useNavigate } from 'react-router-dom';
import Skillinput from './Skillinput.js';
import Educationdeatil from './Educationdetail.js';


const Preview = () => {
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
  return (
    <>
      <div className="card shadow p-3 col-md-8 mx-auto mt-5">
        <Table striped>
          <thead>
            <tr>

              <th>Fields</th>
              <th>Entered Queries</th>

            </tr>
          </thead>
          <tbody>
            <tr>

              <td>Name</td>
              <td>{JSON.stringify(JSON.parse(localStorage.getItem("user-vjti")).username)}</td>

            </tr>
            <tr>

              <td>Email address</td>
              <td>{JSON.stringify(JSON.parse(localStorage.getItem("user-vjti")).email)}</td>

            </tr>
            <tr>
              <td >Preferred Location / City</td>
              <td>{"LOcation"}</td>
            </tr>
            <tr>
              <td >Education</td>
              <td>
                <Educationdeatil userinput={params?.state?.userInput} />
              </td>
            </tr>

            <tr>
              <td >Skills</td>
              <td><Skillinput selectedSkills={params?.state?.selectedSkills} /></td>
            </tr>
          </tbody>
        </Table>
        <button type="submit" onClick={() => { handleSubmitEducation() }} className="btn btn-primary">Confirm</button>

      </div>

    </>
  )
}

export default Preview
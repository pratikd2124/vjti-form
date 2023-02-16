import React from 'react'
import Table from 'react-bootstrap/Table';

const Preview = () => {
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
          <td>Otto</td>
          
        </tr>
        <tr>
         
          <td>Email address</td>
          <td>Thornton</td>
          
        </tr>
        <tr>
          <td >Preferred Location / City</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td >Education</td>
           <td>cllg name </td>
                      </tr>    
                      <tr>
          <td ></td>
          <td>degree </td>
                      </tr>  
                      <tr>
          <td ></td>
          <td>startdate - end date </td>
        </tr>  
         <tr>
          <td >Skills</td>
          <td>skill name </td>
     </tr>     
        <tr>
          <td ></td>
          <td>skill name 2 </td>
        </tr>                  
      </tbody>
              </Table>
          <button type="submit" className="btn btn-primary">Confirm</button>
              
          </div>
          
      </>
  )
}

export default Preview
import React, { useEffect, useState } from "react";
import Jobcard from './Jobcard.js';
import Search from './Searchbar/Search.js';
const Jobsearch = () => {

    const [user, setUser] = useState([]);

//   const fetchData = () => {
//     return fetch("https://jsonplaceholder.typicode.com/users")
//           .then((response) => response.json())
//           .then((data) => setUser(data));
//   }

//   useEffect(() => {
//     fetchData();
//   }, [])
    
  return (
      <div className="container d-flex flex-column" >
          
          <Jobcard />
          
    </div>
  )
}

export default Jobsearch
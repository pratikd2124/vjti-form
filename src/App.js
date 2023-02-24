
import Navcomp from './Components/Navcomp.js';
import Userform from './userregform/Userform.js';
import Otpreg from './userregform/Otpreg.js';
import Empregform from './Employeeform/Empregform.js';
import Preview from './Employeeform/Preview.js';
import Dashboard from './Dashboard/Dashboard.js';
import Dashboardorgan from './Dashboardorgan/Dashboardorgan.js';

import {
  BrowserRouter as Router,
  Route,Routes,
} from "react-router-dom";

function App() {
  return (
    
      <div className="App">
      <Router>
        
        <Routes>
          <Route exact path="/" element={<Empregform />} />
          <Route exact path="/preview" element={<Preview/>} />
          <Route exact path="/signup" element={<Userform />} />
          <Route exact path="/otp" element={<Otpreg />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/organization" element={<Dashboardorgan />} />

          {/* <Route exact path="/posts" element={<JobPosts />} />
          <Route exact path="/inventory" element={<Inventory />} />
          <Route exact path="/contract" element={<Contract />} />

          {/---------- EMS -----------/}
          <Route exact path="/employeelist" element={<YourProfile />} />
          <Route exact path="/yourgoal" element={<YourGoal />} />
          <Route exact path="/taskmanager" element={<TaskManager />} />
          <Route exact path="/contractB2C" element={<ContractOfEmp />} />

          {/* --------- Candidate ----------- 
          <Route exact path="/candidateprofile" element={<CandidateProfile />} />

          <Route exact path="/customerdashboard" element={<Dashboard />} />
          <Route exact path="/yourhjobs" element={<YourJobs />} />
           
*/}


        </Routes>
      </Router>
      
        
        
      
        
    
    
      </div>
     
  );
}

export default App;

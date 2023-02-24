import React from 'react'
import './Careerpath.css';
const Careerpath = ({ data }) => {
  return (
      <>
       {/* <div className="timeline-item">
        <div className="timeline-item-content">
                  <p>{data}</p>
              <span className="circle" />
              </div>
    </div> */}
          <div className="timeline-container">
          <div className="timeline-item">
        <div className="timeline-item-content">
                  <p>{data}</p>
              <span className="circle" />
              </div>
    </div>
        </div>
         
      </>
  )
}

export default Careerpath
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Skills = () => {

    const skills = [
        "ReactJS",
        "NodeJS",
        "MongoDB",
        "ExpressJS",
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "Java",
        "C++",
        "C",
        "C#",
        "PHP",
        "SQL",
        "MySQL",
        "PostgreSQL",
        "NoSQL",
        "Git",
        "GitHub",
        "GitLab",
        "Jira",
        "Agile",
        "Scrum",
        "Kanban",
    
        "Communication",
        "Teamwork",
    
        "Leadership",
        "Problem Solving",
        "Critical Thinking",
        "Creativity",
        "Decision Making",
        "Time Management",
        "Adaptability",
        "Flexibility",
        "Stress Management",
        "Conflict Resolution",
        "Emotional Intelligence",
        "Self Motivation",
        "Self Confidence",
        "Self Awareness",
    
        "Analytical Skills",
        "Attention to Detail",
        "Organization",
        "Planning",
        "Prioritization",
        "Multi-Tasking",
        "Initiative",
        "Patience",
        "Persistence",
        "Perseverance",
        "Dedication",
        "Determination",
        "Resilience",
        "Integrity",
        "Honesty",
        "Dependability",
        "Accountability",
        "Reliability",
        "Trustworthiness",
        "Loyalty",
    
        "Adaptability",
        "Flexibility",
        "Stress Management",
    
        "Conflict Resolution",
        "Emotional Intelligence",
        "Self Motivation",
        "Self Confidence",
        "Self Awareness",
    
        "Analytical Skills",
        "Attention to Detail",
        "Organization",
        "Planning",
        "Prioritization",
        "Multi-Tasking",
    ];


  const [selectedtags, setSelected] = useState(skills);

  return (
    <div>
          <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={skills}
      sx={{ width: 300 }}
       renderInput={(params) =>
       <TextField {...params} label="Select relevant skills" />}
    />
    </div>
  )
}

export default Skills
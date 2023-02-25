import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import Listsearch from "./Listsearch.js";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Skills from "../../Employeeform/Skills.js";
import { Autocomplete, Button } from "@mui/material";

const Searchbar = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    border: '0.5px solid gray',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Search(props) {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

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

  return (
    <div className="main">

      <div className="search container bg-light w-100 shadow p-2 mb-3" sx={{ borderRadius: '20px' }}>
        {/* <Skills selectedSkills={props.selectedSkills} setSelectedSkills={props.setSelectedSkills} /> */}
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          defaultValue={props.selectedSkills}
          onChange={(event, opt) => { props.setSelectedSkills(opt) }}
          options={skills}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Skills" />}
        />
        <Button variant="contained" size="small" sx={{ ml: 'auto', px: 4, mt: 2 }} onClick={() => {
          props.handleSearch();
        }
        } >Apply Query</Button>
        {/* <Searchbar>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Searchbar> */}
      </div>

      {/* <Listsearch input={inputText} /> */}
    </div>
  );
}

export default Search;
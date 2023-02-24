import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { Download } from "react-feather";

import Editor from "../Editor/Editor";
import Resume from "../Resumegenerate/Resume";

import styles from "./Body.module.css";

function Body() {
  const colors = ["#020DF9", "#EA0AF1", "#098913", "#5F5B5B", "#02F5F1", "#F8001E", "#E9EC05", "#641E16"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  const resumeRef = useRef();
  const [color,setcolor] = useState("")
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Resume Builder using ReactJS</p>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {/* {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={`${styles.color} ${activeColor === item ? styles.active : ""
                }`}
              onClick={() => setActiveColor(item)}
            />
          ))} */}
          <label for="exampleColorInput" class="form-label">Color picker</label>
          <input type="color" class="form-control form-control-color" id="exampleColorInput" onChange={(e)=>{setcolor(e.target.value); console.log(e.target.value)}} value={color} defaultValue={"#020DF9"} title="Choose your color"></input>
        </div>
        <ReactToPrint
          trigger={() => {
            return (
              <button>
                Download <Download />
              </button>
            );
          }}
          content={() => resumeRef.current}
        />
      </div>
      <div className={styles.main}>
        <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />
        <Resume
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={color}
        />
      </div>
    </div>
  );
}

export default Body;

import React, { useState } from "react";
import "../SkillBar/SkillBar.css";
import { skillData } from "../../data";
export default function SkillBar() {
  const [skills, setSkills] = useState(skillData);

  return (
    <div className="container">
      <h1 className="title-text">React Progress Bar</h1>
      {skills.map((skill) => (
        <div key={skill.id} className="skill-box">
          <span className="title">{skill.name}</span>
          <div className="skill-bar">
            <span
              style={{
                width: `${skill.W}`,
                animationDelay: `${skill.costumAnimation}`,
              }}
              className="skill-per html"
            >
              <span className="tooltip">{skill.tooltip}</span>
            </span>
          </div>
        </div>
      ))}
      {/* <div className="skill-box">
        <span className="title">Css</span>
        <div className="skill-bar">
          <span className="skill-per css">
            <span className="tooltip">60%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">javascript</span>
        <div className="skill-bar">
          <span className="skill-per javascript">
            <span className="tooltip">50%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">Node js</span>
        <div className="skill-bar">
          <span className="skill-per nodejs">
            <span className="tooltip">70%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">React</span>
        <div className="skill-bar">
          <span className="skill-per react">
            <span className="tooltip">70%</span>
          </span>
        </div>
      </div> */}
    </div>
  );
}

import React from "react";

const Skills = ({ data }) => {
  return (
    <div className="section skills">
      <h2>Skills</h2>
      <ul>
        {data.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
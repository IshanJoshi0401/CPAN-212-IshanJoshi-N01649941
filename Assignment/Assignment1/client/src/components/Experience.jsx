import React from "react";

const Experience = ({ data }) => {
  return (
    <div className="section">
      <h2>Experience</h2>
      {data.map((exp, index) => (
        <div key={index} className="experience-item">
          <h4>{exp.title}</h4>
          <p>{exp.company} | {exp.duration}</p>
          <ul>
            {exp.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
import React from "react";

const Education = ({ data }) => {
  return (
    <div className="section">
      <h2>Education</h2>
      {data.map((edu, index) => (
        <div key={index} className="education-item">
          <h4>{edu.program}</h4>
          <p>{edu.institution}</p>
          <ul>
            {edu.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Education;
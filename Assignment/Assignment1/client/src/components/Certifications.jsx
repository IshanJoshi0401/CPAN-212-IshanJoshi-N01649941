import React from "react";

const Certifications = ({ data }) => {
  return (
    <div className="section certifications">
      <h2>Certifications</h2>
      <ul>
        {data.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
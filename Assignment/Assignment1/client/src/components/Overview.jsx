import React from "react";

const Overview = ({ data }) => {
  return (
    <div className="section">
      <h1>{data.name}</h1>
      <div className="contact-info">
        <p>Email: {data.email}</p>
        <p>Phone: {data.phone}</p>
        <p>Location: {data.location}</p>
      </div>
      <h2>Professional Summary</h2>
      <p className="summary">{data.summary}</p>
    </div>
  );
};

export default Overview;
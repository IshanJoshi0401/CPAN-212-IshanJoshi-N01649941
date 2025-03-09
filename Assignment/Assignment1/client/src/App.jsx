import React, { useEffect, useState } from "react";
import Overview from "./components/Overview";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [overview, setOverview] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/getOverview")
      .then((res) => res.json())
      .then((data) => setOverview(data));

    fetch("http://localhost:8000/getEdu")
      .then((res) => res.json())
      .then((data) => setEducation(data));

    fetch("http://localhost:8000/getExp")
      .then((res) => res.json())
      .then((data) => setExperience(data));

    fetch("http://localhost:8000/getCertifications")
      .then((res) => res.json())
      .then((data) => setCertifications(data));

    fetch("http://localhost:8000/getSkills")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <div className="container">
      <Overview data={overview} />
      <Certifications data={certifications} />
      <Education data={education} />
      <Experience data={experience} />
      <Skills data={skills} />
    </div>
  );
}

export default App;
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;

// Enable CORS for React app running on port 3000
app.use(cors());

// Dummy data for resume sections
const education = [
  {
    program: "Computer Science",
    institution: "University of Toronto, Toronto, Ontario",
    details: [
      "Specialized topics: AI, machine learning, data analytics, and cloud computing.",
      "Programming languages: Java, Python, JavaScript, and C++.",
    ],
  },
];

const experience = [
  {
    title: "Software Developer Intern",
    company: "Tech Corp Inc., Toronto, Ontario",
    duration: "05/2023 - 08/2023",
    details: [
      "Developed and maintained web applications using React and Node.js.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions.",
      "Implemented RESTful APIs for seamless integration with front-end systems.",
    ],
  },
  {
    title: "IT Support Specialist",
    company: "Global IT Solutions, Toronto, Ontario",
    duration: "09/2022 - 04/2023",
    details: [
      "Provided technical support to clients, resolving hardware and software issues.",
      "Managed and maintained IT infrastructure, ensuring high system availability.",
      "Assisted in the deployment of new software and hardware systems.",
    ],
  },
];

const overview = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "123-456-7890",
  location: "Toronto, ON",
  summary:
    "Highly motivated and detail-oriented software developer with experience in building scalable web applications. Proficient in JavaScript, React, and Node.js. Passionate about solving complex problems and delivering high-quality solutions.",
};

const certifications = [
  "Certified JavaScript Developer",
  "AWS Certified Solutions Architect",
  "Microsoft Certified: Azure Fundamentals",
];

const skills = [
  "Proficient in JavaScript, React, and Node.js.",
  "Experience with RESTful APIs and database management.",
  "Strong problem-solving and analytical skills.",
  "Excellent communication and teamwork abilities.",
];

// Endpoints
app.get("/getEdu", (req, res) => {
  res.json(education);
});

app.get("/getExp", (req, res) => {
  res.json(experience);
});

app.get("/getOverview", (req, res) => {
  res.json(overview);
});

app.get("/getCertifications", (req, res) => {
  res.json(certifications);
});

app.get("/getSkills", (req, res) => {
  res.json(skills);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
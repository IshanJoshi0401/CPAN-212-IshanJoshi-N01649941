/* Project setup: For the server
1 - new project folder
2 - open an integrated terminal
3 - run these commands:
    npm init -y
    npm i express nodemon
    (optional) -> go into package.json and add "type": "module" to enable import from 
*/

// [Please enable only ONE of these]
import express from "express"; // if you are using type: module
// const express = require("express"); // if using common JS (Default)
import cors from "cors";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../uploads/')
  },
  filename: function (req, file, cb) {
    const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniquePrefix + "-" + file.fieldname)
  }
})

const upload = multer({ storage: storage })

// create an express app
const app = express();
const PORT = process.env.PORT || 8000;

// middlelware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.send("Welcome to our server");
});

//send data
app.get("/data", (req, res) => {
  const data = {
    fname: "Ishan",
    laname: "Joshi",
  };

  res.send(data);
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("I got the data");
});

app.post("/fileform", upload.single("file"), (req,res) => {
  console,log(req.file)
  console.log(req.body)
  res.json("I recieved your information")
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

app.use("", (req, res) => {
  res.status(404).send("Page not found");
});
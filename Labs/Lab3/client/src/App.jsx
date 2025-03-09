import { useState } from "react";
import "./App.css"; // Import the CSS file

const App = () => {
  const [singleFile, setSingleFile] = useState(null);
  const [displayImage, setDisplayImage] = useState(null);
  const [displayImages, setDisplayImages] = useState([]);
  const [displayDogImage, setDisplayDogImage] = useState("");
  const [message, setMessage] = useState("");

  const handleSingleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSingleFile(e.target.files[0]);
    }
  };

  const fetchSingleFile = async () => {
    try {
      const response = await fetch(`http://localhost:8000/fetch/single`);
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setDisplayImage(imageUrl);
    } catch (error) {
      console.error("Error fetching single file:", error);
    }
  };

  const handleSubmitSingleFile = async (e) => {
    e.preventDefault();
    if (!singleFile) {
      setMessage("Please select a file before uploading.");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("file", singleFile);

      const response = await fetch(`http://localhost:8000/save/single`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Image upload failed");
      }
      setMessage("File uploaded successfully!");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const fetchMultipleFiles = async () => {
    try {
      const response = await fetch(`http://localhost:8000/fetch/multiple`);
      const data = await response.json();
      const filePromises = data.map(async (filename) => {
        const fileResponse = await fetch(
          `http://localhost:8000/fetch/file/${filename}`
        );
        const fileblob = await fileResponse.blob();
        const imageUrl = URL.createObjectURL(fileblob);
        return imageUrl;
      });

      const imageUrls = await Promise.all(filePromises);
      setDisplayImages(imageUrls);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDogImage = async () => {
    try {
      const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
      const data = await response.json();
      setDisplayDogImage(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const saveDogImage = async () => {
    try {
      const fileResponse = await fetch(displayDogImage);
      const blob = await fileResponse.blob();
      const formData = new FormData();
      formData.append("file", blob, "dog-image.jpg");
      await fetch(`http://localhost:8000/save/single`, {
        method: "POST",
        body: formData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Lab 03 - Ishan Joshi</h1>
      <p className="message">{message}</p>
      <div className="card">
        <h2>Fetch Single Random Image</h2>
        <button onClick={fetchSingleFile} className="btn">Fetch Single File</button>
        {displayImage && <img src={displayImage} alt="Display" className="image" />}
      </div>

      <div className="card">
        <h2>Upload Single File</h2>
        <form onSubmit={handleSubmitSingleFile}>
          <input type="file" onChange={handleSingleFileChange} className="file-input" />
          <button type="submit" className="btn">Upload Single File</button>
        </form>
      </div>

      <div className="card">
        <h2>Fetch Multiple Files</h2>
        <button onClick={fetchMultipleFiles} className="btn">Fetch Multiple Files</button>
        <div className="image-grid">
          {displayImages.map((imageUrl, index) => (
            <img key={index} src={imageUrl} className="image" />
          ))}
        </div>
      </div>

      <div className="card">
        <h2>Fetch Dog Image</h2>
        <button onClick={fetchDogImage} className="btn">Fetch Dog Image</button>
        {displayDogImage && (
          <div>
            <img src={displayDogImage} className="image" />
            <button onClick={saveDogImage} className="btn">Save it</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

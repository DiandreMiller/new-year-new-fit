import React, { useState } from 'react';
import axios from 'axios';

const UploadPhotoComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFormSubmit = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      axios
        .post(`${process.env.REACT_APP_BACKEND_API}/upload`, formData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div>
      <h2>Upload Photo</h2>

      <input type="file" onChange={handleFileUpload} />

      <button onClick={handleFormSubmit}>Upload</button>
    </div>
  );
};

export default UploadPhotoComponent;

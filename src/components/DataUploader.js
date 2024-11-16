import React, { useState } from 'react';
import { uploadData } from '../api';

const DataUploader = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            await uploadData(formData);
            alert("Data uploaded successfully");
        } catch (error) {
            console.error("Error uploading data:", error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload Data</button>
        </div>
    );
};

export default DataUploader;

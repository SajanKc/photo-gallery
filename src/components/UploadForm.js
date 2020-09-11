import React, { useState } from 'react';
import '../css/UploadForm.css';
import ProgressBar from './ProgressBar';

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg', 'image/svg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        console.log(selected);
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError("Please select an image file with extension (png, jpeg or svg)");
        }
    }

    return (
        <div className="upload">
            <form>
                <label>
                    <input type="file" onChange={changeHandler} />
                    <span>+</span>
                </label>
                <div className="output">
                    {error && <div className="error">{error}</div>}
                    {file && <div className="success">{file.name}</div>}
                    {file && <ProgressBar file={file} setFile={setFile}/>}
                </div>
            </form>
        </div>
    )
}

export default UploadForm;
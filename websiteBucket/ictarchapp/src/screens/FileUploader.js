import React  from 'react'

const FileUploader = ({onFileSelectSuccess, onFileSelectError}) => {


    const handleFileInput = (e) => {
        // handle validations
        const file = e.target.files[0];
        onFileSelectSuccess(file);
      };

    return (
        <div className="file-uploader">
            <input type="file" className='form-control' onChange={handleFileInput} id="input"/>
        </div>
    )
}

export default FileUploader;
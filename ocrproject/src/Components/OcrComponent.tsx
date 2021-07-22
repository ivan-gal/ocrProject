import UploadFile from './UploadFile';
import FileList from './FileList';
import Convert from './Convert';
import EditText from './EditText';
import { useState } from 'react';

const OcrComponent = () => {
  const [files, setFiles] = useState<string[]>([]);
  const [preview, setPreview] = useState<string[]>([]);
  const [steps, setSteps] = useState<number>(0);
  return (
    <div className="ocr-component-container">
      <div className="main-container">
        <h1>Convierte tus imagenes a texto mediante OCR</h1>
        <div className="container-fluid">
          <ul className="list-unstyled multi-steps">
            <li className={!steps ? 'is-active' : ''}>Sube tu archivo</li>
            <li className={steps === 1 ? 'is-active' : ''}>Edita tu texto</li>
            <li className={steps > 1 ? 'is-active' : ''}>Descarga</li>
          </ul>
        </div>
        {!steps && (
          <div className="upload-container">
            <UploadFile
              setFiles={setFiles}
              files={files}
              setPreview={setPreview}
              setSteps={setSteps}
              preview={preview}
            />

            <FileList
              preview={preview}
              setPreview={setPreview}
              setFiles={setFiles}
              files={files}
              setSteps={setSteps}
            />
          </div>
        )}
        {steps === 1 && (
          <div className="edit-container">
            <EditText setSteps={setSteps} />
          </div>
        )}
        {steps > 1 && <Convert />}
      </div>
    </div>
  );
};

export default OcrComponent;

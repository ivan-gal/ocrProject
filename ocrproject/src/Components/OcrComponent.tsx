import UploadFile from './UploadFile';
import FileList from './FileList';
import Convert from './Convert';
import EditText from './EditText';
import { useState } from 'react';

const OcrComponent = () => {
  const [files, setFiles] = useState<string[]>([]);
  const [preview, setPreview] = useState<string[]>([]);
  return (
    <div className="ocr-component-container">
      <h1>Convierte tus imagenes a texto mediante OCR</h1>
      <div className="main-container">
        <div className="container-fluid">
          <br />
          <br />
          <ul className="list-unstyled multi-steps">
            <li className="is-active">Sube tu archivo</li>
            <li>Edita tu texto</li>
            <li>Descarga</li>
          </ul>
        </div>
        <div className="upload-container">
          <UploadFile
            setFiles={setFiles}
            files={files}
            setPreview={setPreview}
            preview={preview}
          />
          <FileList
            preview={preview}
            setPreview={setPreview}
            setFiles={setFiles}
            files={files}
          />
        </div>
        <div className="edit-container">
          <h2>Edita tu texto</h2>
          <EditText />
        </div>
      </div>
      <Convert />
    </div>
  );
};

export default OcrComponent;

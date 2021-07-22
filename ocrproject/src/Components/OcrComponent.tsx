import UploadFile from './UploadFile';
import FileList from './FileList';
import Convert from './Convert';
import EditText from './EditText';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const OcrComponent = () => {
  const [files, setFiles] = useState<string[]>([]);
  const [preview, setPreview] = useState<string[]>([]);
  const [steps, setSteps] = useState<number>(0);
  return (
    <div className="ocr-component-container">
      <div className="main-container">
        <h1>Conversor OCR</h1>
        <div className="flex-container">
          <div className="container-fluid">
            <ul className="list-unstyled multi-steps">
              <li className={!steps ? 'is-active' : ''}>Sube tu archivo</li>
              <li className={steps === 1 ? 'is-active' : ''}>Edita tu texto</li>
              <li className={steps > 1 ? 'is-active' : ''}>Descarga</li>
            </ul>
          </div>
          <CSSTransition
            in={!steps}
            timeout={500}
            classNames={'upload-container'}
            unmountOnExit={true}
          >
            <div className="upload-container">
              <UploadFile
                setFiles={setFiles}
                files={files}
                setPreview={setPreview}
                setSteps={setSteps}
                preview={preview}
              />
            </div>
          </CSSTransition>

          <CSSTransition
            in={steps === 1}
            timeout={{ exit: 400, enter: 500 }}
            classNames={'edit-container'}
            appears={true}
            unmountOnExit={true}
          >
            <div className="edit-container">
              <EditText setSteps={setSteps} />
            </div>
          </CSSTransition>
          {steps > 1 && <Convert setSteps={setSteps} />}
        </div>
      </div>
    </div>
  );
};

export default OcrComponent;

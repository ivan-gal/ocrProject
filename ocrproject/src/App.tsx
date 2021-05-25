import { useState } from 'react';
import './App.css';
import UploadFile from './Components/UploadFile';
import FileList from './Components/FileList'
import Convert from './Components/Convert';

function App() {
    const [files, setFiles] = useState<string[]>([])
    const [preview, setPreview] = useState<string[]>([])

  return (
    <div className="App">
      <h1>Conviert tus imagenes a documentos.</h1>
      <UploadFile setFiles={setFiles} files={files} setPreview={setPreview} preview={preview}/>
      <FileList preview={preview} setPreview={setPreview} setFiles={setFiles} files={files}/> 
      <Convert />
    </div>
  );
}

export default App;

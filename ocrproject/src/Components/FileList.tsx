
interface FileListInterface {
    files : string[];
    setFiles: (files : string[]) => void;
    preview: string[];
    setPreview: (preview : string[]) => void;
}

const FileListMenu : React.FC<FileListInterface> = ({preview , setPreview, setFiles, files}) => {

   return( <div className='file-preview-list'>{preview && preview.map((file : string, i: number) => 
    <div key= {i}className="file-preview">
        <div>{i}</div>
        <div className="file-preview-img" style={{backgroundImage : `url(${file})`}}></div>
        <button onClick={() => {
            setPreview(preview.filter((_ : string, j : number) => i !== j))
            setFiles(files.filter((_ : string, j : number)  => i !== j))
            }}> x</button></div>
        )
}</div>)
}


export default FileListMenu
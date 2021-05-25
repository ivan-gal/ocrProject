
interface UploadFileInterface {
    files : string[];
    setFiles: (files : []) => void;
    preview: string[];
    setPreview: (preview : []) => void;
}

const UploadFile : React.FC<UploadFileInterface> = ({files, setFiles, setPreview, preview}) => {


    const handleFile  = (e : any) => {
        const allFiles  =[...files, ...(Array.from(e.target.files) as [])] as [];
        if (!allFiles.length) return;
         setFiles(allFiles)
         const allPreviews = [...preview, ...allFiles.map((f: string) => URL.createObjectURL(f))] as [];

        setPreview(allPreviews)



    }
    return (<div>
        <label >Sube tu archivo.
            <input type="file" onChange={(e) => handleFile(e)} multiple/>
        </label>
    </div>)
}

export default UploadFile
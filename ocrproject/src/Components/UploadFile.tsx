import uploadCloud from '../img/cloud-upload.svg';

interface UploadFileInterface {
  files: string[];
  setFiles: (files: []) => void;
  preview: string[];
  setPreview: (preview: []) => void;
  setSteps: (steps: number) => void;
}

const UploadFile: React.FC<UploadFileInterface> = ({
  files,
  setFiles,
  setPreview,
  preview,
  setSteps,
}) => {
  const handleFile = (e: any) => {
    const allFiles = [...files, ...(Array.from(e.target.files) as [])] as [];
    if (!allFiles.length) return;
    setFiles(allFiles);
    const allPreviews = [
      ...preview,
      ...allFiles.map((f: string) => URL.createObjectURL(f)),
    ] as [];

    setPreview(allPreviews);
  };

  const handleOnclick = async () => {
    // const formData = new FormData();

    // formData.append('docImg', files[0]);

    // const res = await fetch('http://poi-api.trek-quest.com/login', {
    //   method: 'POST',
    //   body: formData,
    // });
    setSteps(1);
  };
  return (
    <div className="upload-file-container">
      <label className="upload-file-label">
        <img src={uploadCloud} alt="" />
        <input type="file" onChange={(e) => handleFile(e)} multiple />
      </label>
      <button className="btn fourth" onClick={handleOnclick}>
        Convertir
      </button>
    </div>
  );
};

export default UploadFile;

import docxIcon from '../img/docx.svg';
import Select from 'react-select';

interface ConvertInterface {
  setSteps: (steps: number) => void;
}
const Convert: React.FC<ConvertInterface> = ({ setSteps }) => {
  const options = [
    { value: 'docx', label: 'Documento de Word' },
    { value: 'odt', label: 'Documento en formato odt' },
    { value: 'pdf', label: 'Documento en formato PDF' },
  ];
  return (
    <div className="convert-docs">
      <label htmlFor="">
        Formato
        <Select options={options} />
      </label>
      <div className="buttons-back-next">
        <button className="btn fourth back" onClick={() => setSteps(1)}>
          Atras
        </button>
        <button className="btn fourth last" onClick={() => setSteps(2)}>
          Descargar
        </button>
      </div>
    </div>
  );
};

export default Convert;

interface EditTextInterface {
  setSteps: (steps: number) => void;
}

const EditText: React.FC<EditTextInterface> = ({ setSteps }) => {
  return (
    <div className="edit-text-container">
      <div className="textarea-div">
        <textarea></textarea>
      </div>
      <div className="buttons-back-next">
        <button className="btn fourth back" onClick={() => setSteps(0)}>
          Atras
        </button>
        <button className="btn fourth forward" onClick={() => setSteps(2)}>
          Confirmar texto
        </button>
      </div>
    </div>
  );
};

export default EditText;

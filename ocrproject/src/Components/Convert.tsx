
const Convert : React.FC = () => {

    return (
        <div className='convert-docs'>
            <label htmlFor="">Tipo de formato
                <select name='format-type'>
                <option>.docx</option>
                <option>.odt</option>
                <option>.pdf</option>
                </select>
            </label>
            <label htmlFor="">En un único documento
                <input type="checkbox" />
            </label>
        </div>
    )

}

export default Convert
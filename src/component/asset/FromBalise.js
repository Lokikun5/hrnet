function FromBalise ({labelname,inputType, value, onChange }) {
    return (
        <div>
            <label>{labelname}</label>
            <input type={inputType} value={value} onChange={onChange}/>
        </div>
    );
}

export default FromBalise;
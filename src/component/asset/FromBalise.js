function FromBalise ({labelname,inputType }) {
    return (
        <div>
            <label>{labelname}</label>
            <input type={inputType}/>
        </div>
    );
}

export default FromBalise;
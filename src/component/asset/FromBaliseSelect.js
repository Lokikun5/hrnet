function FromBaliseSelect({ labelname, options,value, onChange }) {
    return (
        <div className="base-flex-col mt-1">
            <label>{labelname}</label>
            <select name={labelname.toLowerCase().replace(" ", "_")} value={value} onChange={onChange}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}

export default FromBaliseSelect;

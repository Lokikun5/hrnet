import PropTypes from 'prop-types';
function FromBalise ({labelname,inputType, value, onChange }) {
    return (
        <div>
            <label>{labelname}</label>
            <input type={inputType} value={value} onChange={onChange}/>
        </div>
    );
}
FromBalise.propTypes = {
    labelname: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    onChange: PropTypes.func.isRequired
};
export default FromBalise;
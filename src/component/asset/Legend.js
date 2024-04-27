import PropTypes from 'prop-types';
function Legend ({legendTitle}) {
    return(
        <legend>{legendTitle}</legend>
    )
}
Legend.propTypes = {
    legendTitle: PropTypes.string.isRequired
};
export default Legend;
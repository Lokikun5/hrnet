import PropTypes from 'prop-types';

function ValidationMessage({ message }) {
    return <p>{message}</p>;
}

ValidationMessage.propTypes = {
    message: PropTypes.string.isRequired
};

export default ValidationMessage;

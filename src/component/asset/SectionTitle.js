import PropTypes from 'prop-types';
function SectionTitle ({title}){
   return (
       <h2>{title}</h2>
   );
}
SectionTitle.propTypes = {
   title: PropTypes.string.isRequired
};
export default SectionTitle;
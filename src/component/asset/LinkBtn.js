import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import "../../style/base/btn.scss";
function LinkBtn ({slug, linkName}) {
    return( <Link className="link" to={`/${slug}`}>{linkName}</Link>);
}
LinkBtn.propTypes = {
    slug: PropTypes.string.isRequired,
    linkName: PropTypes.string.isRequired
};
export default LinkBtn
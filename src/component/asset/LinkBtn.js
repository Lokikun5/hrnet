import {Link} from "react-router-dom";
import "../../style/base/btn.scss";
function LinkBtn ({slug, linkName}) {
    return( <Link className="link" to={`/${slug}`}>{linkName}</Link>);
}
export default LinkBtn
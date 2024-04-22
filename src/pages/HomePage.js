import Header from "../component/Header";
import LinkBtn from "../component/asset/LinkBtn";
import DatasFrom from "../component/datas-components/DatasFrom";
function HomePage () {
    return(
        <div className="base-flex-col">
            <Header title={"HRnet"}/>
            <LinkBtn slug={"employee-list"} linkName={"View Current Employees"}/>
            <DatasFrom/>
        </div>
    );
}
export default HomePage;
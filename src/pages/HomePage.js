import Header from "../component/Header";
import LinkBtn from "../component/asset/LinkBtn";
import DatasFrom from "../component/datas-components/DatasFrom";
import settings from "../data_setting/settings";
function HomePage () {
    return(
        <div className="base-flex-col">
            <Header title={settings.HomePage.page_title}/>
            <LinkBtn slug={"data-list"} linkName={settings.HomePage.link_name}/>
            <DatasFrom/>
        </div>
    );
}
export default HomePage;
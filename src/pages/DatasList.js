import Header from "../component/Header";
import React from 'react';
import LinkBtn from "../component/asset/LinkBtn";
import DatasListTable from "../component/datas-components/DatasListTable";
import settings from "../data_setting/settings";
function DatasList () {

    return(
        <div className="base-flex-col">
            <Header title={settings.DatasList.page_title}/>
            <DatasListTable/>
            <LinkBtn slug={""} linkName={settings.DatasList.link_name}/>
        </div>

    );
}
export default DatasList;
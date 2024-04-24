import Header from "../component/Header";
import React from 'react';
import LinkBtn from "../component/asset/LinkBtn";
import DatasListTable from "../component/datas-components/DatasListTable";
import { useSelector } from 'react-redux';
import settings from "../data_setting/settings";
function DatasList () {
    const items = useSelector(state => state.items.list);

    return(
        <div className="base-flex-col">
            <Header title={settings.DatasList.page_title}/>
            <DatasListTable items={items}/>
            <LinkBtn slug={""} linkName={settings.DatasList.link_name}/>
        </div>

    );
}
export default DatasList;
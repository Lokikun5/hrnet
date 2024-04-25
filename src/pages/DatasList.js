import Header from "../component/Header";
import React from 'react';
import LinkBtn from "../component/asset/LinkBtn";
import DatasListTable from "../component/datas-components/DatasListTable";
import { useSelector } from 'react-redux';
import settings from "../data_setting/settings";
function DatasList () {
    const items = useSelector(state => state.items.list);
console.log(items)
    const columnConfigs = [
        { key: 'firstData', title: settings.DatasList.th_title1 },
        { key: 'secondData', title: settings.DatasList.th_title2 },
        { key: 'selectDate', title: settings.DatasList.th_title3 },
        { key: 'seventhData', title: settings.DatasList.th_title4 },
        { key: 'selectDate2', title: settings.DatasList.th_title5 },
        { key: 'fieldsetValue.thirdData', title: settings.DatasList.th_title6 },
        { key: 'fieldsetValue.fourthData', title: settings.DatasList.th_title7 },
        { key: 'fieldsetValue.fifthData', title: settings.DatasList.th_title8 },
        { key: 'fieldsetValue.sixthData', title: settings.DatasList.th_title9 }
    ];

    return(
        <div className="base-flex-col">
            <Header title={settings.DatasList.page_title}/>
            <DatasListTable items={items} columnConfigs={columnConfigs}/>
            <LinkBtn slug={""} linkName={settings.DatasList.link_name}/>
        </div>

    );
}
export default DatasList;
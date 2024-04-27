import PropTypes from 'prop-types';
import Header from "../component/Header";
import LinkBtn from "../component/asset/LinkBtn";
import DataListTable from 'react-data-list-table-hrnet';
//import DatasListTable from '../component/datas-components/DatasListTable'
import { useSelector } from 'react-redux';
import settings from "../data_setting/settings";

function DatasList() {
    const items = useSelector(state => state.items.list);

    const columnConfigs = [
        { key: 'firstName', title: settings.DatasList.th_title1 },
        { key: 'lastName', title: settings.DatasList.th_title2 },
        { key: 'birthDayDate', title: settings.DatasList.th_title3 },
        { key: 'department', title: settings.DatasList.th_title4 },
        { key: 'startDayDate', title: settings.DatasList.th_title5 },
        { key: 'fieldsetValue.street', title: settings.DatasList.th_title6 },
        { key: 'fieldsetValue.city', title: settings.DatasList.th_title7 },
        { key: 'fieldsetValue.state', title: settings.DatasList.th_title8 },
        { key: 'fieldsetValue.zipCode', title: settings.DatasList.th_title9 }
    ];

    return (
        <div className="base-flex-col">
            <Header title={settings.DatasList.page_title}/>
            <DataListTable items={items} columnConfigs={columnConfigs}/>
            <LinkBtn slug={""} linkName={settings.DatasList.link_name}/>
        </div>
    );
}
DatasList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    columnConfigs: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }))

};

export default DatasList;
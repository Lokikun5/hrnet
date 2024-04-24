import "../../style/base/table-main.scss";
import settings from "../../data_setting/settings";
function TableMain({ items, handleSort, sortConfig }) {
    const renderSortArrow = (key) => {
        //change the position of the arrow depending on the sort method
        const isActive = sortConfig.key.endsWith(key);
        let arrowContent = '';
        let arrowClass = 'arrow neutral';

        if (isActive) {
            arrowContent = sortConfig.direction === 'ascending' ? '↑' : '↓';
            arrowClass = `arrow ${sortConfig.direction}`;
        } else {
            arrowContent = '↕'; // Neutral symbol indicating that sorting is possible but not active
        }

        return <span className={arrowClass}>{arrowContent}</span>;
    };
    console.log(items);
    if (items.length === 0) {
        return <div className="base-flex mx">No data available in table</div>;
    }

    return (
        <table>
            <thead>
            <tr>
                <th className="sortable" onClick={() => handleSort('firstData')}>
                    {settings.DatasList.th_title1}
                    {renderSortArrow('firstData')}
                </th>
                <th className="sortable" onClick={() => handleSort('secondData')}>
                    {settings.DatasList.th_title2}
                    {renderSortArrow('secondData')}
                </th>
                <th className="sortable" onClick={() => handleSort('selectDate')}>
                    {settings.DatasList.th_title3}
                    {renderSortArrow('selectDate')}
                </th>
                <th className="sortable" onClick={() => handleSort('seventhData')}>
                    {settings.DatasList.th_title4}
                    {renderSortArrow('seventhData')}
                </th>
                <th className="sortable" onClick={() => handleSort('selectDate2')}>
                    {settings.DatasList.th_title5}
                    {renderSortArrow('selectDate2')}
                </th>
                <th className="sortable" onClick={() => handleSort('thirdData')}>
                    {settings.DatasList.th_title6}
                    {renderSortArrow('thirdData')}
                </th>
                <th className="sortable" onClick={() => handleSort('fourthData')}>
                    {settings.DatasList.th_title7}
                    {renderSortArrow('city')}
                </th>
                <th className="sortable" onClick={() => handleSort('fifthData')}>
                    {settings.DatasList.th_title8}
                    {renderSortArrow('fifthData')}
                </th>
                <th className="sortable" onClick={() => handleSort('sixthData')}>
                    {settings.DatasList.th_title9}
                    {renderSortArrow('sixthData')}
                </th>
            </tr>
            </thead>
            <tbody>
            {items.map((item, index) => (
                <tr key={index}>
                    <td>{item.firstData}</td>
                    <td>{item.secondData}</td>
                    <td>{item.selectDate}</td>
                    <td>{item.seventhData}</td>
                    <td>{item.selectDate2}</td>
                    <td>{item.fieldsetValue.thirdData}</td>
                    <td>{item.fieldsetValue.fourthData}</td>
                    <td>{item.fieldsetValue.fifthData}</td>
                    <td>{item.fieldsetValue.sixthData}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
export default TableMain;
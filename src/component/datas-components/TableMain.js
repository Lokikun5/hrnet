import "../../style/base/table-main.scss";

function TableMain({ items, columnConfigs, handleSort, sortConfig }) {
    const renderSortArrow = (key) => {
        const isActive = sortConfig.key ? sortConfig.key.endsWith(key) : false;
        let arrowContent = '↕'; // Neutral symbol indicating that sorting is possible but not active
        let arrowClass = 'arrow neutral';

        if (isActive) {
            arrowContent = sortConfig.direction === 'ascending' ? '↑' : '↓';
            arrowClass = `arrow ${sortConfig.direction}`;
        }

        return <span className={arrowClass}>{arrowContent}</span>;
    };

    const getValueByPath = (item, path) => {
        return path.split('.').reduce((acc, part) => acc && acc[part], item);
    };

    if (items.length === 0) {
        return <div className="base-flex mx">No data available in table</div>;
    }

    return (
        <table>
            <thead>
            <tr>
                {columnConfigs.map((config, index) => (
                    <th key={index} className="sortable"
                        onClick={() => handleSort(config.key)}>
                        {config.title}
                        {renderSortArrow(config.key)}
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {items.map((item, index) => (
                <tr key={index}>
                    {columnConfigs.map((config) => (
                        <td key={config.key}>{getValueByPath(item, config.key)}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default TableMain;

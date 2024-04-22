import "../../style/base/table-main.scss";
function TableMain({ employees, handleSort, sortConfig }) {
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
    console.log(employees);
    if (employees.length === 0) {
        return <div className="base-flex mx">No data available in table</div>;
    }

    return (
        <table>
            <thead>
            <tr>
                <th className="sortable" onClick={() => handleSort('firstName')}>
                    First Name
                    {renderSortArrow('firstName')}
                </th>
                <th className="sortable" onClick={() => handleSort('lastName')}>
                    Last Name
                    {renderSortArrow('lastName')}
                </th>
                <th className="sortable" onClick={() => handleSort('startDate')}>
                    Start Date
                    {renderSortArrow('startDate')}
                </th>
                <th className="sortable" onClick={() => handleSort('department')}>
                    Department
                    {renderSortArrow('department')}
                </th>
                <th className="sortable" onClick={() => handleSort('dateOfBirth')}>
                    Date of Birth
                    {renderSortArrow('dateOfBirth')}
                </th>
                <th className="sortable" onClick={() => handleSort('street')}>
                    Street
                    {renderSortArrow('street')}
                </th>
                <th className="sortable" onClick={() => handleSort('city')}>
                    City
                    {renderSortArrow('city')}
                </th>
                <th className="sortable" onClick={() => handleSort('state')}>
                    State
                    {renderSortArrow('state')}
                </th>
                <th className="sortable" onClick={() => handleSort('zipCode')}>
                    Zip Code
                    {renderSortArrow('zipCode')}
                </th>
            </tr>
            </thead>
            <tbody>
            {employees.map((employee, index) => (
                <tr key={index}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.startDate}</td>
                    <td>{employee.department}</td>
                    <td>{employee.dateOfBirth}</td>
                    <td>{employee.address.street}</td>
                    <td>{employee.address.city}</td>
                    <td>{employee.address.stateAbbreviation}</td>
                    <td>{employee.address.zipCode}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
export default TableMain;
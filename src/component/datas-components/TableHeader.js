import "../../style/table.scss";
function TableHeader({ onEntriesChange, onSearchChange }) {
    return (
        <div className="table-header base-flex gap-header">
            <div className="gap-table1 base-flex">
                Show
                <select onChange={onEntriesChange}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                entries
            </div>
            <div className="gap-table1 base-flex">
                Search:
                <input type="text" onChange={onSearchChange} />
            </div>
        </div>
    );
}
export default TableHeader;
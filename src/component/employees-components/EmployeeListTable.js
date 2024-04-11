import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import TableHeader from "../employees-components/TableHeader"
import TableMain from "./TableMain";
import TableFooter from "./TableFooter";
import { paginate } from "../../method/pagination";
import { reorderSort } from "../../method/reorder";
import { searchEmployees } from "../../method/search";

function EmployeeListTable () {
    const employees = useSelector(state => state.employees.employees);
    console.log(employees)

    const [currentPage, setCurrentPage] = useState(1);
    const [entries, setEntries] = useState(10);
    const [paginatedEmployees, setPaginatedEmployees] = useState([]);
    const [sortConfig, setSortConfig] =
        useState({ key: 'startDate', direction: 'ascending' });
    const [search, setSearch] = useState("");

    useEffect(() => {
        const filteredEmployees = searchEmployees(employees, search);
        const sortedEmployees = reorderSort(filteredEmployees, sortConfig.key, sortConfig.direction);
        setPaginatedEmployees(paginate(sortedEmployees, entries, currentPage));
    }, [employees, currentPage, entries, sortConfig, search]);

    const handleEntriesChange = (e) => {
        setEntries(e.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleSort = (key) => {
        let sortKey = key;
        if (key === 'city' || key === 'street' || key === 'state' || key === 'zipCode') {
            sortKey = `address.${key}`;
        }

        const direction = sortConfig.key === sortKey && sortConfig.direction === 'ascending'
            ? 'descending'
            : 'ascending';
        setSortConfig({ key: sortKey, direction });
    };
    const handleSearch = (e) => {
        setSearch(e.target.value);
        console.log(search);
    }
    return(
        <section>
            <TableHeader onEntriesChange={handleEntriesChange}
                         onSearchChange={handleSearch} />
            <TableMain employees={paginatedEmployees}
                       handleSort={handleSort}
                       sortConfig={sortConfig}/>
            <TableFooter currentPage={currentPage}
                         pageSize={entries}
                         totalItems={employees.length}
                         onPageChange={handlePageChange} />
        </section>);
}
export default EmployeeListTable;
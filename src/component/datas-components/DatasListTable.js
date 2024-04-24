import React, { useState, useEffect } from 'react';
import TableHeader from "./TableHeader";
import TableMain from "./TableMain";
import TableFooter from "./TableFooter";
import { paginate } from "../../method/pagination";
import { reorderSort } from "../../method/reorder";
import { searchItems } from "../../method/search";

function DatasListTable({ items }) {

    const [currentPage, setCurrentPage] = useState(1);
    const [entries, setEntries] = useState(10);
    const [paginatedItems, setPaginatedItems] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: 'selectDate', direction: 'ascending' });
    const [search, setSearch] = useState("");

    useEffect(() => {
        const filteredItems = searchItems(items, search);
        const sortedItems = reorderSort(filteredItems, sortConfig.key, sortConfig.direction);
        setPaginatedItems(paginate(sortedItems, entries, currentPage));
    }, [items, currentPage, entries, sortConfig, search]);

    const handleEntriesChange = (e) => {
        setEntries(e.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleSort = (key) => {
        const fieldKeys = {
            'firstData': 'firstData',
            'secondData': 'secondData',
            'selectDate': 'selectDate',
            'selectDate2': 'selectDate2',
            'thirdData': 'fieldsetValue.thirdData',
            'fourthData': 'fieldsetValue.fourthData',
            'fifthData': 'fieldsetValue.fifthData',
            'sixthData': 'fieldsetValue.sixthData',
            'seventhData': 'seventhData'
        };

        let sortKey = fieldKeys[key] || key;

        const direction = sortConfig.key === sortKey && sortConfig.direction === 'ascending' ? 'descending' : 'ascending';
        setSortConfig({ key: sortKey, direction });
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    return (
        <section>
            <TableHeader onEntriesChange={handleEntriesChange}
                         onSearchChange={handleSearch} />
            <TableMain items={paginatedItems}
                       handleSort={handleSort}
                       sortConfig={sortConfig} />
            <TableFooter currentPage={currentPage}
                         pageSize={entries}
                         totalItems={items.length}
                         onPageChange={handlePageChange} />
        </section>
    );
}
export default DatasListTable;
function TableFooter({ currentPage, pageSize, totalItems, onPageChange }) {
    const totalPages = Math.ceil(totalItems / pageSize);

    const onPreviousClick = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const onNextClick = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const firstItemIndex = (currentPage - 1) * pageSize + 1;
    const lastItemIndex = Math.min(firstItemIndex + pageSize - 1, totalItems);

    return (
        <div className="base-flex-between">
            <div className="pagination-info">
                Showing {firstItemIndex} to {lastItemIndex} of {totalItems} entries
            </div>
            <div className="base-flex gap-table1">
                <button onClick={onPreviousClick} disabled={currentPage === 1}>Previous</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={onNextClick} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
}

export default TableFooter;
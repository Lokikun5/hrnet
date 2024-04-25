function reorderSort(array, sortKey, direction) {
    if (!sortKey) {
        console.error("Sort key is undefined.");
        return array;
    }

    return [...array].sort((a, b) => {
        let aValue = a, bValue = b;

        for (const key of sortKey.split('.')) {
            aValue = aValue && aValue[key];
            bValue = bValue && bValue[key];
        }

        if (aValue < bValue) {
            return direction === 'ascending' ? -1 : 1;
        } else if (aValue > bValue) {
            return direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });
}
export { reorderSort };
function reorderSort(array, sortKey, direction) {
    console.log(sortKey);
    return [...array].sort((a, b) => {
        let aValue = a, bValue = b;

        // Access deeply nested values
        for (const key of sortKey.split('.')) {
            aValue = aValue[key];
            bValue = bValue[key];
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
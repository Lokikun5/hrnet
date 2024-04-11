function reorderSort(array, sortKey, direction) {
    const keys = sortKey.split('.');
console.log(keys);
    const sorted = [...array].sort((a, b) => {

        const aValue = keys.length > 1 ? keys.reduce((o, k) => (o || {})[k], a) : a[sortKey];
        const bValue = keys.length > 1 ? keys.reduce((o, k) => (o || {})[k], b) : b[sortKey];

        if (aValue < bValue) {
            return direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
            return direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    return sorted;
}
export {reorderSort}
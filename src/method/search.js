function searchItems(items, searchWord) {
    if (!searchWord) return items;

    return items.filter(item => {
        return Object.values(item).some(value => {
            if (typeof value === 'object') {
                // Assumes sub-objects don't have further nested objects
                return Object.values(value).some(subValue =>
                    subValue.toString().toLowerCase().includes(searchWord.toLowerCase())
                );
            }
            return value.toString().toLowerCase().includes(searchWord.toLowerCase());
        });
    });
}
export { searchItems };
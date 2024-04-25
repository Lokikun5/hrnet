function extractPaths(obj, prefix = '') {
    return Object.keys(obj).reduce((acc, key) => {
        const fullPath = prefix ? `${prefix}.${key}` : key;
        if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
            acc = acc.concat(extractPaths(obj[key], fullPath));
        } else {
            acc.push(fullPath);
        }
        return acc;
    }, []);
}
export {extractPaths};
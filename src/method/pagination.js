 function paginate (array, pageSize, pageNumber) {
     const startIndex = (pageNumber - 1) * pageSize;
     return array.slice(startIndex, startIndex + pageSize);

}
export {paginate}
function searchEmployees (employees, searchWord) {
    if(!searchWord)return employees;

    return employees.filter(employees =>{
        return Object.values(employees).some(value => {
            console.log(Object.values(employees))
            if (typeof value === 'object'){
                return Object.values(value)
                    .some(subValue => subValue.toString()
                    .toLowerCase()
                    .includes(searchWord.toLowerCase()));
            }
            return value.toString().toLowerCase().includes(searchWord.toLowerCase());
        });
    });
}
export {searchEmployees}
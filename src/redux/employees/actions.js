export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';

export const addEmployee = (employee) => {
    return {
        type: ADD_EMPLOYEE,
        payload: employee,
    };
};

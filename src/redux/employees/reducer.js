import { ADD_EMPLOYEE } from './actions';

const initialState = {
    employees: [],
};

const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EMPLOYEE:
            return {
                ...state,
                employees: [...state.employees, action.payload],
            };
        default:
            return state;
    }
};

export default employeesReducer;

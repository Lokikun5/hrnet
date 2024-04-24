import { ADD_NEW_ITEM } from './actions';

const initialState = {
    list: [],
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_ITEM:
            return {
                ...state,
                list: [...state.list, action.payload],
            };
        default:
            return state;
    }
};

export default dataReducer;
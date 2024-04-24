export const ADD_NEW_ITEM = 'ADD_NEW_ITEM';

export const addNewItem = (item) => {
    return {
        type: ADD_NEW_ITEM,
        payload: item,
    };
};

import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './redux_method/reducer';

const store = configureStore({
    reducer: {
        items: dataReducer,
    },
});

export default store;

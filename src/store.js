import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './redux/cartSlice';

const store = configureStore({
    reducer: {
        user: cartSlice,
    },
});

export default store;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    carts: [],
    quantity: 0,
    total: 0,
};

const cartSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        AddCart: (state, action) => {
            const find = state.carts.findIndex((item) => item.id === action.payload.id);
            if (find >= 0) {
                state.carts[find].quantity += 1;
            } else {
                const tempvar = { ...action.payload, quantity: 1 };
                state.carts.push(tempvar);
            }
        },

        GetTotal: (state) => {
            let amount = 0;
            let total = 0;
            state.carts.forEach((item) => {
                amount += item.quantity;
                total += item.quantity * item.price;
            });
            state.quantity = amount;
            state.total = total;
        },

        RemoveCart: (state, action) => {
            state.carts = state.carts.filter((item) => item.id !== action.payload);
        },

        Increase: (state, action) => {
            state.carts = state.carts.map((carts) => {
                if (carts.id === action.payload) {
                    return { ...carts, quantity: carts.quantity + 1 };
                }
                return carts;
            });
        },

        Decrease: (state, action) => {
            state.carts = state.carts
                .map((carts) => {
                    if (carts.id === action.payload) {
                        return { ...carts, quantity: carts.quantity - 1 };
                    }
                    return carts;
                })
                .filter((item) => item.quantity !== 0);
        },
    },
});

export const { AddCart, GetTotal, Increase, Decrease, RemoveCart, LoadCurrentProduct } = cartSlice.actions;
export default cartSlice.reducer;

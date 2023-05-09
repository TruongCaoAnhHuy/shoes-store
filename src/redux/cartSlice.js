import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    carts: [],
    quantity: 0,
    total: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        AddCart: (state, action) => {
            const currentUser = localStorage.getItem('user2');
            if (currentUser) {
                const find = state.carts.findIndex(
                    (item) => item.id === action.payload.id && item.size === action.payload.size,
                );
                if (find >= 0) {
                    state.carts[find].quantity += action.payload.quantity;
                    alert('Add to cart success !!');
                } else {
                    const tempvar = { ...action.payload };
                    state.carts.push(tempvar);
                    alert('Add to cart success !!');
                }
            } else {
                alert('Login please !');
                return;
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
                if (
                    carts.id === action.payload[0] &&
                    carts.name === action.payload[1] &&
                    carts.size === action.payload[2]
                ) {
                    return { ...carts, quantity: carts.quantity + 1 };
                }
                return carts;
            });
        },

        Decrease: (state, action) => {
            state.carts = state.carts
                .map((carts) => {
                    if (
                        carts.id === action.payload[0] &&
                        carts.name === action.payload[1] &&
                        carts.size === action.payload[2]
                    ) {
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

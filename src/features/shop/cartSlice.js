import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState:{
        value:{
            user: "userLogged",
            updatedAt: new Date().toLocaleDateString(),
            total: null,
            items: []
        }
    },
    reducers: {
        addItem: (state, action) => {
            const gameRepeated = state.value.items.find(
                (item) => item.id === action.payload.id
            );
            if (gameRepeated) {
                const itemsUpdated = state.value.items.map((item) => {
                    if (item.id === action.payload.id) {
                        item.quantity = action.payload.quantity;
                        return item;
                    }
                    return item;
                });
                const total = itemsUpdated.reduce(
                    (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
                    0
                );
                state.value = {
                    ...state.value,
                    items: itemsUpdated,
                    total,
                    updatedAt: new Date().toLocaleString(),
                };
            } else {
                state.value.items.push(action.payload);
                const total = state.value.items.reduce(
                    (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
                    0
                );
                state.value = {
                    ...state.value,
                    total,
                    updatedAt: new Date().toLocaleString(),
                };
            }
        },
        removeItem: (state, action) => {
            const newItems = state.value.items.filter((item) => item.id !== action.payload.id);
            const total = newItems.reduce(
                (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
                0
            );
            state.value = {
                ...state.value,
                items: newItems,
                total,
                updatedAt: new Date().toLocaleString()
            }
        },
        emptyCart: (state) => {
            state.value = {
                user: "userLogged",
                updatedAt: new Date().toLocaleDateString(),
                total: null,
                items: []
            }
        }
    }
})

export const {addItem, removeItem, emptyCart} = cartSlice.actions;

export default cartSlice.reducer;
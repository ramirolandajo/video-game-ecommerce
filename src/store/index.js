import {configureStore} from "@reduxjs/toolkit";
import shopReducer from "../features/shop/shopSlice";
import cartReducer from "../features/shop/cartSlice";
import {shopApi} from "../services/shopService";
import {setupListeners} from "@reduxjs/toolkit/query";
export default configureStore({
    reducer: {
        shopReducer,
        cartReducer,
        [shopApi.reducerPath]: shopApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(shopApi.middleware)
})

setupListeners(configureStore.dispatch);

import {configureStore} from "@reduxjs/toolkit";
import shopReducer from "../features/shop/shopSlice";
import cartReducer from "../features/shop/cartSlice";
import authReducer from "../features/auth/authSlice";
import {shopApi} from "../services/shopService";
import {setupListeners} from "@reduxjs/toolkit/query";
import {authApi} from "../services/authService";
import {userApi} from "../services/userService";
export default configureStore({
    reducer: {
        shopReducer,
        cartReducer,
        authReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(shopApi.middleware).concat(authApi.middleware).concat(userApi.middleware)
})

setupListeners(configureStore.dispatch);

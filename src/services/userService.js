import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {base_url} from "../firebase/database";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({baseUrl: base_url}),
    endpoints: (builder) => ({
        getOrders: builder.query({
            query: (user) => `orders.json?orderBy="user"&equalTo="${user}"`
        }),
        getProfileImage: builder.query({
            query: (localId) => `profileImages/${localId}.json`,
        }),
        postProfileImage: builder.mutation({
            query: ({ localId, image }) => ({
                url: `profileImages/${localId}.json`,
                method: "PUT",
                body: {
                    image: image,
                },
            }),
        })
    })
})

export const {useGetOrdersQuery, useGetProfileImageQuery, usePostProfileImageMutation} = userApi
import { base_url } from "../firebase/database";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({ baseUrl: base_url}),
    endpoints: (builder) => ({
            getGames: builder.query({
                query: () => 'games.json'
            }),
            getGamesByGenre: builder.query({
                query: (genres) => `games.json?orderBy="genres"&equalTo="${genres}"`
            }),
            getGenres: builder.query({
                query: () => 'genres.json'
            }),
            postOrder: builder.mutation({
                query: ({...order}) => ({
                    url: 'orders.json',
                    method: 'POST',
                    body: order
                })
            }),
            getOrders: builder.query({
                query: () => "orders.json"
            })
        }
    )
})

export const { useGetGamesQuery, useGetGamesByGenreQuery, useGetGenresQuery, usePostOrderMutation, useGetOrdersQuery } = shopApi

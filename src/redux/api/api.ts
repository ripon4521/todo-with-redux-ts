import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'basaApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com'}),
    endpoints: (builder) => ({
        getTodos:builder.query ({
            query: () => ({
                method: 'GET',
                url:'/todos'
            }),

        })


        // getTodos: {
        //     method: 'GET',
        //     query: () => ({
        //         endpoint: '/todos'
        //     }),
        // },
        // addTodo: {
        //     method: 'POST',
        //     query: (title, description) => ({
        //         endpoint: '/todos',
        //         body: JSON.stringify({title, description})
        //     }),
        // },
        // deleteTodo: {
        //     method: 'DELETE',
        //     query: (id) => ({
        //         endpoint: `/todos/${id}`
        //     }),
        // },
        // updateTodo: {
        //     method: 'PUT',
        //     query: (id, title, description) => ({
        //         endpoint: `/todos/${id}`,
        //         body: JSON.stringify({title, description})
        //     }),
        // },
    })

    

})


export const { useGetTodosQuery } = baseApi;
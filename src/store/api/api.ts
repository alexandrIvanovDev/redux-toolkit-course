import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const api = createApi({
    reducerPath: 'recipeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    tagTypes: ['Recipe'],
    endpoints: () => ({})
})
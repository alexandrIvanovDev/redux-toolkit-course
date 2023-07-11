import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RecipeType} from '../favorite/favorite-slice.ts';


export const recipesApi = createApi({
    reducerPath: 'recipeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    tagTypes: ['Recipe'],
    endpoints: (builder) => ({
        getRecipes: builder.query<Array<RecipeType>, string>({
            query: () => `/recipes`,
            providesTags: () => ['Recipe']
        }),
        getRecipeById: builder.query<RecipeType, number>({
            query: (id) => `/recipes/${id}`,
        }),
        addRecipe: builder.mutation<RecipeType, RecipeType>({
            query: (recipe) => ({
              url: '/recipes',
              method: 'POST',
              body: recipe
            }),
            invalidatesTags: ['Recipe']
        }),
    }),
})

export const {useGetRecipesQuery, useGetRecipeByIdQuery, useAddRecipeMutation} = recipesApi
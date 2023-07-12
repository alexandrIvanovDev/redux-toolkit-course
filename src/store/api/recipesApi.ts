import {RecipeType} from '../favorite/favorite-slice.ts';
import {api} from './api.ts';


export const recipesApi = api.injectEndpoints({
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
        deleteRecipe: builder.mutation<RecipeType, number>({
            query: (id) => ({
                url: `/recipes/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['Recipe']
        }),
        changeRecipe: builder.mutation<RecipeType, RecipeType>({
            query: (recipe) => ({
                url: `/recipes/${recipe.id}`,
                method: 'PUT',
                body: recipe
            }),
            invalidatesTags: ['Recipe']
        }),
    }),
})

export const {useGetRecipesQuery, useGetRecipeByIdQuery, useAddRecipeMutation, useDeleteRecipeMutation, useChangeRecipeMutation} = recipesApi
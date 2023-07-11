import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: [] as InitialStateType,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<RecipeType>) => {
            const isExist = state.some(item => item.id === action.payload.id)
            if (isExist) {
                const index = state.findIndex(f => f.id === action.payload.id)
                state.splice(index, 1)
            } else {
                state.push(action.payload)
            }
        }
    }
})


type InitialStateType = Array<RecipeType>

export type RecipeType = {
    id: number
    title: string
    img: string
}
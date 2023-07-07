import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {favoriteSlice} from './favorite/favorite-slice.ts';

const rootReducer = combineReducers({
    favorite: favoriteSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootStateType = ReturnType<typeof rootReducer>
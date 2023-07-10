import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {favoriteSlice} from './favorite/favorite-slice.ts';
import {usersSlice} from './user/users-slice.ts';

const rootReducer = combineReducers({
    favorite: favoriteSlice.reducer,
    users: usersSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer
})

export const rootActions = {...favoriteSlice.actions, ...usersSlice.actions}

export type RootStateType = ReturnType<typeof rootReducer>
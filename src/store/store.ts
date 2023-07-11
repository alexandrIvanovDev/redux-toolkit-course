import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {favoriteSlice} from './favorite/favorite-slice.ts';
import {usersSlice} from './user/users-slice.ts';
import * as userActions from './user/users-actions.ts';

const rootReducer = combineReducers({
    favorite: favoriteSlice.reducer,
    users: usersSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer
})

export const rootActions = {...favoriteSlice.actions, ...userActions}

export type RootStateType = ReturnType<typeof rootReducer>
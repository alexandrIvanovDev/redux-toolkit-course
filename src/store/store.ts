import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {favoriteSlice} from './favorite/favorite-slice.ts';
import {usersSlice} from './user/users-slice.ts';
import * as userActions from './user/users-actions.ts';
import {recipesApi} from './api/recipesApi.ts';

const rootReducer = combineReducers({
    favorite: favoriteSlice.reducer,
    users: usersSlice.reducer,
    [recipesApi.reducerPath]: recipesApi.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(recipesApi.middleware)
})

export const rootActions = {...favoriteSlice.actions, ...userActions}

export type RootStateType = ReturnType<typeof rootReducer>
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {favoriteSlice} from './favorite/favorite-slice.ts';
import {usersSlice} from './user/users-slice.ts';
import * as userActions from './user/users-actions.ts';
import {api} from './api/api.ts';

// const logger = createLogger({collapsed: true})

const rootReducer = combineReducers({
    favorite: favoriteSlice.reducer,
    users: usersSlice.reducer,
    [api.reducerPath]: api.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export const rootActions = {...favoriteSlice.actions, ...userActions}

export type RootStateType = ReturnType<typeof rootReducer>
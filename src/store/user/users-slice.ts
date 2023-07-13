import {createSlice} from '@reduxjs/toolkit';
import {getUserById} from './users-actions.ts';


export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        user: {} as UserType,
        isLoading: false,
        error: null
    } as InitialStateType,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getUserById.pending, state => {
            state.isLoading = true
        })
        builder.addCase(getUserById.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
        })
        builder.addCase(getUserById.rejected, (state, action: any) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export type UserType = {
    id: number
    name: string
    username: string
    email: string
}

type InitialStateType = {
    user: UserType
    isLoading: boolean
    error: null | string
}
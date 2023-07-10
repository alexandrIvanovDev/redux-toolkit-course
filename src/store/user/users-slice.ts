import {createSlice} from '@reduxjs/toolkit';
import {getUserById} from './users-actions.ts';


export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        selectedUser: {} as UserType,
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
            state.selectedUser = action.payload
        })
        builder.addCase(getUserById.rejected, (state, action) => {
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
    users: Array<UserType>
    selectedUser: UserType
    isLoading: boolean
    error: null | string
}
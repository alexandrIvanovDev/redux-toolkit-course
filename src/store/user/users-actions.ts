import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {UserType} from './users-slice.ts';


export const getUserById = createAsyncThunk('users/getUserById',
    async (userId: number, {rejectWithValue}) => {
        try {
            return await axios.get<UserType>(`https://jsonplaceholder.typicode.com/users/${userId}`)
                .then(res => res.data)
        } catch (e) {
            return rejectWithValue('')
        }
    })
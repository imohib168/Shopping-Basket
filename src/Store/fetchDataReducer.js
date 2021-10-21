import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// Creating an async thunk function
export const fetchBasketData = createAsyncThunk(
    'posts/getPosts', async () => {
        const res = await axios('https://fakestoreapi.com/products?limit=9');
        return res.data;
    }
)

// Slice
const fetchDataReducer = createSlice({
    name: 'fetchBasketData',
    initialState: {
        loading: false,
        basket: [],
        error: ''
    },
    extraReducers: {
        [fetchBasketData.pending]: (state) => {
            return {
                ...state,
                loading: true,
            }
        },
        [fetchBasketData.fulfilled]: (state, action) => {
            return {
                ...state,
                loading: false,
                basket: action.payload,
            }
        },
        [fetchBasketData.rejected]: (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        },
    }
})

export default fetchDataReducer.reducer;
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postsServices} from "../../services";

let initialState = {
    posts: [],
    errors: null,
    lading: null,
    selectedPost: null
};

const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await postsServices.getAll();
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const getById = createAsyncThunk(
    'postSlice/getById',
    async ({id}, thunkAPI) => {
        try {
            const {data} = await postsServices.getById(id);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedPost = action.payload;
            })
            .addCase(getById.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })
            .addCase(getById.pending, (state) => {
                state.loading = true;
            })
    }
});

const {reducer: postReducer} = postSlice;

const postsActions = {getAll, getById}

export {postReducer, postsActions};
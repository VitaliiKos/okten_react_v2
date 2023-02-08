import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postsServices} from "../../services";

let initialState = {
    posts: [],
    errors: null,
    lading: null,
    selectedPost: null,
    postComments: null
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
const getPostComments = createAsyncThunk(
    'postSlice/getPostComments',
    async ({id}, thunkAPI) => {
        try {
            const {data} = await postsServices.getPostComments(id);
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
        // setCarForUpdate: (state, action) => {
        //     state.carForUpdate = action.payload;
        // },
        setSelectedPost: (state, action) => {
            state.selectedPost = action.payload;
        },

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
            .addCase(getPostComments.fulfilled, (state, action) => {
                state.loading = false;
                state.postComments = action.payload;
            })
            .addCase(getPostComments.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })
            .addCase(getPostComments.pending, (state) => {
                state.loading = false;
            })

    }
});

const {reducer: postReducer, actions: {setSelectedPost}} = postSlice;

const postsActions = {getAll, getById, getPostComments, setSelectedPost}

export {postReducer, postsActions};
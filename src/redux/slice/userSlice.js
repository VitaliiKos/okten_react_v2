import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {usersServices} from "../../services";

const initialState = {
    users: [],
    errors: null,
    loading: null,
    selectedUser: null,
    userPosts: null
};

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await usersServices.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const getById = createAsyncThunk(
    'userSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await usersServices.getById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);
const getUserPosts = createAsyncThunk(
    'userSlice/getUserPosts',
    async ({id}, thunkAPI) => {
        try {
            const {data} = await usersServices.getUserPosts(id);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);


const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        },
        // clearPosts: (state) => {
        //     state.userPosts = null;
        // }
    },
    extraReducers:
        builder => builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
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
                state.selectedUser = action.payload;
            })
            .addCase(getById.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })
            .addCase(getById.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUserPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.userPosts = action.payload;
            })
            .addCase(getUserPosts.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })
            .addCase(getUserPosts.pending, (state) => {
                state.loading = false;
            })
});

const {reducer: userReducer, actions: {setSelectedUser}} = userSlice;

const userActions = {getAll, setSelectedUser, getById, getUserPosts};

export {userReducer, userActions};
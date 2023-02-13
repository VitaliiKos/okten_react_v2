import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carsServices} from "../../services";

let initialState = {
    cars: [],
    errors: null,
    loading: null,
    carForUpdate: null,
    prevPage: null,
    nextPage: null
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await carsServices.getAll(page);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, thunkAPI) => {
        try {
            await carsServices.deleteById(id);
            thunkAPI.dispatch(getAll({page:1}));
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const createNew = createAsyncThunk(
    'carSlice/createNew',
    async ({car}, thunkAPI) => {
        try {
            await carsServices.addNew(car);
            thunkAPI.dispatch(getAll({page:1}));
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({carId, car}, thunkAPI) => {
        try {
            await carsServices.putById(carId, car);
            thunkAPI.dispatch(getAll({page:1}));
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload;
        },

    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.loading = false;
            const {prev, next, items} = action.payload;
            state.prevPage = prev;
            state.nextPage = next;
            state.cars = items;
        })
        .addCase(getAll.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload;
        })
        .addCase(getAll.pending, (state) => {
            state.loading = true;
        })
});

const {reducer: carReducer, actions: {setCarForUpdate}} = carSlice;
const carActions = {getAll, deleteCar, createNew, updateCar, setCarForUpdate};

export {carReducer, carActions};
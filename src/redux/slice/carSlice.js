import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carsServices} from "../../services";

let initialState = {
    cars: [],
    errors: null,
    loading: null,
    carForUpdate: null
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await carsServices.getAll();
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
            thunkAPI.dispatch(getAll());
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
            thunkAPI.dispatch(getAll());
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
            thunkAPI.dispatch(getAll());
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
            state.cars = action.payload;
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
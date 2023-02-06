const carActionTypes = {
    ADD: 'ADD',
    DELETE_BY_ID: 'DELETE_BY_ID',
    UPDATE_BY_ID: 'UPDATE_BY_ID',
    CAR_FOR_UPDATE: 'CAR_FOR_UPDATE'
};

const carActions = {
    ADD: (item) => ({type: carActionTypes.ADD, payload: item}),
    DELETE_BY_ID: (id) => ({type: carActionTypes.DELETE_BY_ID, payload: id}),
    UPDATE_BY_ID: (id, car) => ({type: carActionTypes.UPDATE_BY_ID, payload: {id, car}}),
    CAR_FOR_UPDATE: (item) => ({type: carActionTypes.CAR_FOR_UPDATE, payload: item}),

};

const initialCars = () => ({
    cars: [],
    carForUpdate: null
});

const myCarReducer = (state, action) => {
    switch (action.type) {
        case carActionTypes.ADD:
            const slice = state.cars.slice(-1);
            const id = slice.length ? slice[0].id + 1 : 0;
            state.cars.push({id, ...action.payload});
            return {...state};

        case carActionTypes.DELETE_BY_ID:
            const indexForDelete = state.cars.findIndex(value => value.id === action.payload);
            state.cars.splice(indexForDelete, 1);
            return {...state};

        case carActionTypes.UPDATE_BY_ID:
            const indexForUpdate = state.cars.findIndex(value => value.id === action.payload.id);
            state.cars[indexForUpdate] = {id: action.payload.id, ...action.payload.car}
            return {...state};

        case carActionTypes.CAR_FOR_UPDATE:
            state.carForUpdate = action.payload;
            return {...state};

        default :
            throw new Error();
    }
}

export {
    carActionTypes,
    carActions,
    initialCars,
    myCarReducer
}
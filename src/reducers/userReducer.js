const userActionTypes = {
    ADD: 'ADD',
    DELETE_BY_ID: 'DELETE_BY_ID',
    UPDATE_BY_ID: 'UPDATE_BY_ID',
    USER_FOR_UPDATE: 'USER_FOR_UPDATE'
}

const userActions = {
    ADD: (item) => ({type: userActionTypes.ADD, payload: item}),
    DELETE_BY_ID: (id) => ({type: userActionTypes.DELETE_BY_ID, payload: id}),
    UPDATE_BY_ID: (id, user) => ({type: userActionTypes.UPDATE_BY_ID, payload: {id, user}}),
    USER_FOR_UPDATE: (item) => ({type: userActionTypes.USER_FOR_UPDATE, payload: item}),
}

const initialUsers = () => ({
    users: [],
    userForUpdate: null
});

const myUserReducer = (state, action) => {
    switch (action.type) {
        case userActionTypes.ADD:
            const slice = state.users.slice(-1);
            const id = slice.length ? slice[0].id + 1 : 0
            state.users.push({id, ...action.payload})
            return {...state}

        case userActionTypes.DELETE_BY_ID:
            const indexForDelete = state.users.findIndex(value => value.id === action.payload);
            state.users.splice(indexForDelete, 1);
            return {...state};

        case userActionTypes.UPDATE_BY_ID:
            const indexForUpdate = state.users.findIndex(value => value.id === action.payload.id);
            state.users[indexForUpdate] = {id: action.payload.id, ...action.payload.user};
            return {...state};

        case userActionTypes.USER_FOR_UPDATE:
            state.userForUpdate = action.payload;
            return {...state};
        default :
            throw new Error();
    }
}

export {
    userActionTypes,
    initialUsers,
    myUserReducer,
    userActions
}
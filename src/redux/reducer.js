
import { LOGIN, LOGOUT, SETTOKEN } from './action'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';

const defaultState = {
    userName: '',
    phone: '',
    token: ''
}

const reducers = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN:
            let count = state.const + 1;
            return {...state,const:count};
        case LOGOUT:
            return state.const -= 1;
        case SETTOKEN:
        console.log('token88',{...state,token:action.token})
        return {...state,token:action.token}
        default:
            return state
    }
}

export default createStore(reducers,applyMiddleware(thunk));











import { LOGIN, LOGOUT, SETUSERINFO, SETPLAYERINFO } from './action'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';

// 
const defaultState = {
    phone: '',
    token: '',
    name: '',
    // 是否有球员信息
    isPlayerInfo: '',
    isBallTeam: false

}
const playerInfo = {

}
const reducers = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN:
            let count = state.const + 1;
            return { ...state, const: count };
        case LOGOUT:
            return state.const -= 1;
        case SETUSERINFO:
            console.log({ ...state, ...action.userData }, 'setuserinfo')
            return { ...state, ...action.userData }
        case SETPLAYERINFO:
            return { ...state }
        default:
            return state
    }
}

export default createStore(reducers, applyMiddleware(thunk));










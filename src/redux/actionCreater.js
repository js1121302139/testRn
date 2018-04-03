
import { ToastAndroid } from 'react-navigation'

import { LOGIN, LOGOUT, SETTOKEN } from './action'
import { fetchData } from '../component/common/util';
import { Actions } from 'react-native-router-flux';

export function setToken(token) {
    return {
        type: SETTOKEN,
        token
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}

export function login(loginData) {
    return dispatch => {
        let _this = this;
        fetchData('member/login', 'POST', {
            data: {
                phone: loginData.phoneNum,
                code: loginData.code
            },
            fun_Success(resData) {
                if (resData.retCode === 0) {
                    dispatch(setToken(resData.data))
                    setStorageData('userInfo', { token: resData.data });
                    Actions.pop()
                } else {
                    ToastAndroid.show(resData.message, ToastAndroid.SHORT)
                }
            },
            fun_Error(err) {

            }
        })
    }
}
export default {
    login,
    logout
}








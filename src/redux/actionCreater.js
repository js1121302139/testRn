
import { ToastAndroid, DeviceEventEmitter } from 'react-navigation'

import { LOGIN, LOGOUT, SETUSERINFO, SENDMESSAGE, ISPLAYERINFO } from './action'
import { fetchData, setStorageData } from '../component/common/util';
import { Actions } from 'react-native-router-flux';

// 登出
export function logout() {
    return {
        type: LOGOUT
    }
}
// 设置用户信息
export function setUserInfo(userData) {
    return {
        type: SETUSERINFO,
        userData
    }
}
// 设置球员信息
// export function ISPLAYERINFO(playerInfoData){
//     return{
//         type:SETPLAYERINFO,
//         playerInfoData
//     }
// }
// 登录
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
                    dispatch(setUserInfo({
                        token:resData.data
                    }))
                    setStorageData('userInfo', { token: resData.data });                    
                    setTimeout(()=>{
                        Actions.pop({ refresh: ({ token: resData.data }) })
                    },300)
                } else {
                    ToastAndroid.show(resData.message, ToastAndroid.SHORT)
                }
            },
            fun_Error(err) {

            }
        })
    }
}

// 发送短信接口
export function sendMessage(sendData) {
    console.log(sendData)
    return dispatch => {
        let _this = this;
        fetchData('sms/sendSmsCode', 'GET', {
            data: {
                phone: sendData.phone,
                type: sendData.type
            },
            fun_Success(resData) {
                if (resData.retCode === retTrue) {
                    ToastAndroid('短信发送成功', ToastAndroid.SHORT)
                } else {
                    ToastAndroid(resData.message, ToastAndroid.SHORT)
                }
            },
            fun_Error(err) {
                console.log(err)
            }
        })
    }
}

// 获取用户信息
export function getUserInfo(token) {
    return dispatch => {
        let _this = this;
        fetchData('member/memberInfo', 'POST', {
            data: {
                memberToken: token
            },
            fun_Success(resData) {
                if (resData.retCode === retTrue) {
                    setStorageData('userInfo', {...resData.data});                    
                    dispatch(setUserInfo({
                       ...resData.data
                    }))
                } else {
                    Actions.login()
                    ToastAndroid.show(resData.message, ToastAndroid.SHORT)
                }
            },
            fun_Error(err) {

            }
        })
    }
}

// 修改和添加球员信息
export function upPlayerInfo(playerInfo){
   return dispatch=>{
       fetchData('player/basketball/info/update','post',{
           data:{

           },
           fun_Success(resData){
                if(resData.retCode===retTrue){
                    dispatch()
                }
           },
           fun_Error(){

           }
       })
   }
}

export default {
    login,
    logout,
    getUserInfo
}








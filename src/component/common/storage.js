import Storage from 'react-native-storage'
import { AsyncStorage, Dimensions } from 'react-native'
import { storageGet, storageSave } from './util';
const userInfo={
    phone:'', // 用户电话
    userName:'', // 用户姓名
    userAddress:'', // 用户地址
    userLoLa:{ // 用户经纬度
        longitude:'', // 经度
        latitude:'' // 纬度
    },
    token:''
};
// 系统信息
const sysInfo= {
    width:Dimensions.get('window').width,// 设备屏幕宽度
    height:Dimensions.get('window').height, // 设备屏幕高度
    sysVersion:'', // 系统版本
    softwareVersion:'' // 软件版本
}; 
storageGet('userInfo',getData=>{
    if(getData===false){
        storageSave('userInfo',userInfo);
    }
})
storageGet('sysInfo',getData=>{
    if(getData===false){
        storageSave('sysInfo',sysInfo);
    }
})










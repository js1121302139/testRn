import React, {Component} from 'react'
import Storage from 'react-native-storage'
import {fetchData, storageGet, storageSave, setStorageData, dataCheck} from './component/common/util'
import {Actions} from 'react-native-router-flux'
import {AsyncStorage} from 'react-native'
import {connect} from 'react-redux'

// 初始化本地存储库
const storage = new Storage({
    size: 10000,
    storageBackend: AsyncStorage, 
    defaultExpires: null
});

global.storage = storage;

// 打开页面方法
global.Actions = Actions;

// 网络数据方法
global.fetchData = fetchData;

// 本地数据存储方法
global.storageSave = storageSave;

// 本地数据获取方法
global.storageGet = storageGet;

// 更改本地数据
global.setStorageData = setStorageData;

// redux连接函数
global.reduxConnect = connect;

// 数据检测
global.dataCheck = dataCheck;



const apiDev = {
    ImgSrc: '',
    apiSrc: 'http://120.79.196.255:8080/stephen-api/',
    ossService: 'http://120.79.196.255:7080/'
}

const local = {
    ImgSrc: '',
    apiSrc: 'http://192.168.0.109:8080/stephen-api/'
}


// 打开页面

const openPage = (_this, pageName, pageData, action) => {
    _this.props.navigation.navigate(pageName, pageData, action);
};

// 获取路由传递的参数

const getRouteData = (_this) => _this.props.navigation.state.params;

// 网络请求

const fetchData = (url, method = 'POST', config, requireType = '') => {
    let UpperCaseMethod = method.toLocaleUpperCase();
    let FetchConfig = ''
    if (UpperCaseMethod === 'POST') {
        FetchConfig = {
            method: UpperCaseMethod,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(config.data)
        }
    } else {
        FetchConfig = {
            method
        }
        let dataArr = Object.entries(config.data);
        let dataStr = '?';
        dataArr.map(item => {
            dataStr += `${item.join('=')}&`;
        });
        url += dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
    }
    // 请求地址
    let queryUrl = ''
    switch (requireType) {
        case 'oss':
            queryUrl = apiDev.ossService + url
            break;
        default:
            queryUrl = apiDev.apiSrc + url
            break;
    }
    console.log(`请求地址：${queryUrl}, 请求参数：${JSON.stringify(config.data)}`)    
    fetch(queryUrl, FetchConfig).then(res => {
        if (res.ok) {
            return res.json();
        } else {
            throw res;
        }
    }).then(resJson => {
        console.log(`${url}请求返回数据:`, resJson)
        config.fun_Success(resJson)
    }).catch(err => {
        config.fun_Error(err)
    })
}

// 存储数据

const storageSave = (key, data) => {
    console.log(key, data)
    storage.save({
        key,
        data
    })
}

// 获取数据

const storageGet = (key, callBack) => {
    storage.load({
        key: key,
        autoSync: true,
        syncInBackground: true
    }).then(ret => {
        console.log(ret)
        callBack(ret)
    }).catch(err => {
        console.log(err)
        callBack(false)
        console.warn(err.message);
        switch (err.name) {
            case 'NotFoundError':
                // TODO;
                break;
            case 'ExpiredError':
                // TODO
                break;
        }
    })
}
// 更改本地数据
const setStorageData = (key, data) => {
    storageGet(key, ret => {
        if (ret === false) {
            console.log('键值错误或者键内容为空')
            return false;
        } else {
            // 更改数据
            console.log({ ...data })
            console.log({ ...ret, ...data }, '------')
            storageSave(key, { ...ret, ...data });
        }
    })
}


// 倒计时函数

const timeOut = (time, callBack) => {
    const timer = setInterval(() => {
        time--;
        if (time <= 0) {
            clearInterval(timer)
            callBack && callBack()
        }
    }, 1000)
}

// 数据校验函数
const dataCheck = (val, type) => {
    switch (type) {
        case 'phone':
            return val.length === 11 && val !== '';
        case 'number':
            return !isNaN(val);
        case 'msgCode':
            return val !== '' && val.length === 6;
        default:
            return val;
    }
}

// 检测数据是否为空
const checkDataIsNull = (data, continueKey = []) => {
    for (item in data) {
        if (continueKey.indexOf(data[item]) !== (-1)) {
            continue;
        }
        if (data[item] === '' || data[item] === null) {
            console.log(data)
            return false
        }
    }
    return true;
}

// Img is null
const ImgNull = (url) => {
    if (url === null || url === '') {
        return require('../../static/loginBg.png')
    } else {
        return { uri: url }
    }
}
export {
    openPage,
    getRouteData,
    fetchData,
    storageSave,
    storageGet,
    setStorageData,
    dataCheck,
    ImgNull,
    checkDataIsNull
}












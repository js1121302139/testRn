import { AppRegistry } from 'react-native';
import App from './App';
import store from './src/redux/reducer'
import { setUserInfo } from './src/redux/actionCreater'
import './src/Global'
import './src/component/common/storage'
import { storageGet } from './src/component/common/util';

storageGet('userInfo',red=>{
    if(red!==false){
        console.log(red,'red')
        store.dispatch(setUserInfo({
            ...red
        }))
    }
})
AppRegistry.registerComponent('testRn', () => App);  

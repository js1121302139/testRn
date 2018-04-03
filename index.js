import { AppRegistry } from 'react-native';
import App from './App';
import store from './src/redux/reducer'
import './src/Global'
storageGet('userInfo',data=>{
    console.log(data)
})

AppRegistry.registerComponent('testRn', () => App);  

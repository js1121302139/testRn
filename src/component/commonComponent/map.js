import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native'
import { MapView } from 'react-native-amap3d'
class Map extends Component {
    render() {
        return (
            <MapView
                style={{
                    width:Dimensions.get('window').width,// 设备屏幕宽度
                    height:Dimensions.get('window').height, // 设备屏幕高度
                }}
                coordinate={{
                    latitude: 39.90980,
                    longitude: 116.37296,
                }}
                zoomLevel={18}
                tilt={45}
                rotation={45}
                region={{
                    latitude: 39.90980,
                    longitude: 116.37296,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,}}
                mapType='navigation'
                showsIndoorMap
            />
        )
    }
}
export default Map
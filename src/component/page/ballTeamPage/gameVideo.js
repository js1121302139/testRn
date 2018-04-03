import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity} from 'react-native'

import Video  from 'react-native-video'
export default class GameVideo extends Component{
    render(){
        return(
            <View>
                <Video
                    resizeMode='cover'
                    repeat={false}
                    source={require('./video.mp4')}
                    style={styles.backgroundVideo}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundVideo: {
        height:100
    },
});




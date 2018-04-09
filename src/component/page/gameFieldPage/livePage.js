import React, { Component } from 'react'
import { View, Text,Image,StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Video from 'react-native-video'
import { Flex, List, WingBlank } from 'antd-mobile'
class LivePage extends Component {
    render() {
        const Item = List.Item
        return (
            <View>
                <Video
                    resizeMode='cover'
                    repeat={false}
                    source={require('./video.mp4')}
                    style={{
                        height: 100
                    }}
                />
                <WingBlank>
                    <Flex justify="between">
                        <Flex justify="center" direction="column">
                            <Image style={styles.ballTeamImg} source={ImgNull('')} />
                            <Text>篮网</Text>
                        </Flex>
                        <Flex direction="column">
                            <Text>3.7 11:30已结束</Text>
                            <Flex>
                                <Text>101</Text>
                                <Text>-</Text>
                                <Text>114</Text>
                            </Flex>
                        </Flex>
                        <Flex justify="center" direction="column">
                            <Image style={styles.ballTeamImg} source={ImgNull('')} />
                            <Text>篮网</Text>
                        </Flex>
                    </Flex>
                </WingBlank>
            </View>
        )
    };
}
const styles = StyleSheet.create({
    ballTeamImg:{
        width:50,
        height:50,
        borderRadius: 25,
    }
})

export default connect(state => (state))(LivePage)
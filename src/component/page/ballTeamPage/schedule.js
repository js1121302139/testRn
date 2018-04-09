import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native'
import {
    Flex,
    Button
} from 'antd-mobile'
import { Actions } from 'react-native-router-flux';
export default class Schedule extends Component{
    render(){
        return(
            <View style={style.scheduleItem}>
                <Text style={style.Tit}>NBA | BesTv</Text>
                <Flex justify="between">
                    <View>
                        <Flex>
                            <View>
                                <Image style={style.ballTeamImg} source={{uri: 'https://www.baidu.com/img/bd_logo1.png'}}/>
                                <Text style={style.ballTeamName}>活塞</Text>
                            </View>
                            <Text style={style.source}>
                                55
                            </Text>
                        </Flex>
                    </View>
                    <View>
                        <Text>第3节</Text>
                        <Text>05:45</Text>
                        <Button type="warning" size="small" onClick={Actions.livePage}>
                            正在直播
                        </Button>
                    </View>
                    <View>
                        <Flex>
                            <Text style={style.source}>
                                55
                            </Text>
                            <View>
                                <Image style={style.ballTeamImg} source={{uri: 'https://www.baidu.com/img/bd_logo1.png'}}/>
                                <Text style={style.ballTeamName}>活塞</Text>
                            </View>
                        </Flex>
                    </View>
                </Flex>
            </View>
        )
    }
}

const style = StyleSheet.create({
    scheduleItem: {
        paddingVertical:15,
        paddingHorizontal: 40,
        backgroundColor:'#fff'
    },
    Tit:{
        textAlign:'center'
    },
    ballTeamImg:{
        width:60,
        height:60,
        borderRadius:30,
        marginBottom:5
    },
    source:{
      fontSize:22,
        marginHorizontal:15
    },
    ballTeamName:{
        fontSize:13,
        textAlign:'center',
        color:'#999'
    }

})
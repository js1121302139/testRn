import React,{ Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import { Flex, Button, WingBlank } from 'antd-mobile'

export default class IssuedChallenge extends Component{
    render(){
        return(
            <View style={style.challengeInfo}>
                <WingBlank>
                    <View>
                        <Text style={style.challengeCreate}>2018-05-04 19:00:00</Text>
                        <View style={style.subChallengeInfo}>
                            <Text style={style.challengeHall}>比赛球馆：xxxx</Text>
                            <Text style={style.challengeAddr}>比赛地点：xxxx</Text>
                            <Text style={style.challengeDate}>比赛时间：xxxx</Text>
                        </View>
                        <Flex justify="between">
                            <View></View>
                            <Flex>
                                <Text style={style.challengeSure}>已有5人签到 </Text>
                                <Button type="ghost" inline size="small">签到</Button>
                            </Flex>
                        </Flex>
                    </View>
                </WingBlank>
            </View>
        )
    }
}
const style = StyleSheet.create({
    challengeInfo:{
        paddingVertical:10,
        backgroundColor:"#fff",
        borderBottomWidth:1,
        borderBottomColor:'#333'
    },
    challengeCreate:{
        fontSize:12,
        color:'#333'
    },
    subChallengeInfo:{
        paddingLeft:44,
        paddingVertical:5
    },
    challengeHall:{
        fontSize:14,
        color:'#333'
    },
    challengeAddr:{
        fontSize:14,
        color:'#333'
    },
    challengeDate:{
        fontSize:14,
        color:'#333'
    },
    challengeSure:{
        fontSize:12,
        color:'green'
    }
})
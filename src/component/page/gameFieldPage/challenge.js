import React,{ Component } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'

import { Flex, Button, WingBlank } from 'antd-mobile'
import { Actions } from 'react-native-router-flux';

export default class Challenge extends Component{
    render(){
        return(
            <View style={style.challengeBox}>
                <WingBlank>
                    <View>
                        <Text style={style.createDate}>2018-03-31 19:00:00</Text>
                        <Flex>
                            <View style={style.ballTeam}>
                                <Image style={style.ballTeamImg} source={{uri: 'https://www.baidu.com/img/bd_logo1.png'}}/>
                                <Text style={style.ballTeamName}>xx球队</Text>
                            </View>
                            <View style={style.challengeInfo}>
                                <Text style={style.infoTxt}>比赛地点：xxxxx</Text>
                                <Text style={style.infoTxt}>比赛时间：xxxxx</Text>
                                <Text style={style.infoTxt}>比赛人数：xxxxx</Text>
                                <Text style={style.infoTxt}>费用：xxxxx</Text>
                                <Text style={style.infoTxt}>赛制：xxxxx</Text>
                            </View>
                        </Flex>
                        <Flex justify="between">
                            <Text style={style.bottomTxt}></Text>
                            <Button type="ghost" inline size="small" onClick={Actions.challengeInfo}>发起挑战</Button>
                        </Flex>
                    </View>
                </WingBlank>
            </View>
        )
    }
}

const style=StyleSheet.create({
    challengeBox:{
        backgroundColor:'#fff',
        paddingVertical: 10
    },
    createDate:{
        fontSize:12,
        color:'#333',
        textAlign:'right'
    },
    ballTeam:{
        marginRight:25,
        display:'flex',
        justifyContent:'center'

    },
    ballTeamImg:{
        width:50,
        height:50,
        borderRadius:25
    },
    ballTeamName:{
        fontSize:13,
        textAlign:'center'
    },
    infoTxt:{
        fontSize:12,
        color:'#333'
    },
    bottomTxt:{
        fontSize:12,
        color:'green'
    }
})
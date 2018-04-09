import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'

import { Flex, Button, WingBlank } from 'antd-mobile'

export default class Challenge extends Component {
    render() {
        return (
            // <View style={style.challengeBox}>
            //     <WingBlank>
            //         <View>
            //             <Text style={style.createDate}>2018-03-31 19:00:00</Text>
            //             <Flex>
            //                 <View style={style.ballTeam}>
            //                     <Image style={style.ballTeamImg} source={{uri: 'https://www.baidu.com/img/bd_logo1.png'}}/>
            //                     <Text style={style.ballTeamName}>xx球队</Text>
            //                 </View>
            //                 <View style={style.challengeInfo}>
            //                     <Text style={style.infoTxt}>比赛地点：xxxxx</Text>
            //                     <Text style={style.infoTxt}>比赛时间：xxxxx</Text>
            //                     <Text style={style.infoTxt}>比赛人数：xxxxx</Text>
            //                     <Text style={style.infoTxt}>费用：xxxxx</Text>
            //                     <Text style={style.infoTxt}>赛制：xxxxx</Text>
            //                 </View>
            //             </Flex>
            //             <Flex justify="between">
            //                 <Text style={style.bottomTxt}>已有5人签到</Text>
            //                 <Button type="ghost" inline size="small">签到</Button>
            //             </Flex>
            //         </View>
            //     </WingBlank>
            // </View>
            <View styel={styles.challengeBox}>
                <WingBlank>
                    <Text>2018-5-1 19:00:00</Text>
                    <Flex justify="between">
                        <Flex direction="column">
                            <Text>
                                挑战球队
                        </Text>
                            <Image style={styles.teamImg} source={ImgNull('')} />
                            <Text>
                                xxx球队
                        </Text>
                        </Flex>
                        <Text>VS</Text>
                        <Flex direction="column">
                            <Text>
                                挑战球队
                        </Text>
                            <Image style={styles.teamImg} source={ImgNull('')} />
                            <Text>
                                xxx球队
                        </Text>
                        </Flex>
                    </Flex>
                    <Flex direction="column" align="start">
                        <Text>比赛时间:2018-05-04 19:00:00</Text>
                        <Text>比赛地点:xxxxx</Text>
                    </Flex>
                    <Flex justify="between" >
                            <Text style={styles.bottomTxt}>已有5人签到</Text>
                            <Button type="ghost" inline size="small">签到</Button>
                        </Flex>
                </WingBlank>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    challengeBox: {
        paddingVertical: 10,
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f00'

    },
    createDate: {
        fontSize: 12,
        color: '#333',
        textAlign: 'right'
    },
    ballTeam: {
        marginRight: 25,
        display: 'flex',
        justifyContent: 'center'

    },
    teamImg: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    ballTeamName: {
        fontSize: 13,
        textAlign: 'center'
    },
    infoTxt: {
        fontSize: 12,
        color: '#333'
    },
    bottomTxt: {
        fontSize: 12,
        color: 'green'
    }
})
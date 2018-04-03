import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'

import {
    Flex,
    WhiteSpace,
    WingBlank,
    Tabs,
    List
} from 'antd-mobile'

import AveragingData from './ballTeamPage/averagingData'
import IssuedChallenge from './ballTeamPage/IssuedChallenge'
import Challenge from './ballTeamPage/challenge'
import Schedule from './ballTeamPage/schedule'
import GameVideo from './ballTeamPage/gameVideo'
import Announcement from './ballTeamPage/announcement'

export default class BallGame extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [1]
        }
    }

    render() {
        const tabs = [
            {
                title: '资料'
            },
            {
                title: '发布挑战'
            },
            {
                title: '发起挑战'
            },
            {
                title: '赛程'
            },
            // {
            //     title: '视频'
            // },
            {
                title: '公告'
            }
        ]
        return (
            <View>
                <View style={style.teamInfo}>
                    <WingBlank>
                        <Flex>
                            <Image style={style.teamImg} source={{uri: 'https://www.baidu.com/img/bd_logo1.png'}}/>
                            <View style={style.teamRecord}>
                                <Text style={style.teamName}>兄弟萌队</Text>
                                <Flex justify="around">
                                    <Text style={style.result}>20胜</Text>
                                    <Text style={style.result}>20负</Text>
                                    <Text style={style.result}>连胜场次：8</Text>
                                </Flex>
                                <Text style={style.introduction}>简介。。。。。。。</Text>
                            </View>
                        </Flex>
                    </WingBlank>
                </View>
                <View style={{height: 1000}}>
                    <Tabs
                        tabs={tabs}
                        initialPage={0}
                    >
                        <View>
                            <AveragingData/>
                        </View>
                        <View>
                            <IssuedChallenge/>
                        </View>
                        <View>
                            <Challenge/>
                        </View>
                        <View>
                            <Schedule/>
                        </View>
                        <View>
                            {/*<GameVideo />*/}
                        </View>
                        <View>
                            <Announcement/>
                        </View>
                    </Tabs>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    teamInfo: {
        paddingVertical: 10,
        backgroundColor: '#fff'

    },
    teamImg: {
        height: 44,
        width: 44,
        marginRight: 15,
        borderRadius: 22
    },
    teamName: {
        fontSize: 16,
        marginBottom: 5
    },
    teamRecord: {},
    result: {
        fontSize: 12,
        marginRight: 5,
        color: '#333'
    },
    introduction: {
        fontSize: 14,

    }

})
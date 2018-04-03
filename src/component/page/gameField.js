import React, {Component} from 'react'
import {
    FlatList,
    View,
    Text,
    ToastAndroid,
    TouchableOpacity,
    findNodeHandle,
    UIManager
} from 'react-native'

import {Flex, Tabs} from 'antd-mobile'

import Challenge from './gameFieldPage/challenge'
import Schedule from './ballTeamPage/schedule'
import GameItem from './homePage/GameItem'
import BallTeamItem from './gameFieldPage/ballTeamItem'

const layout= (ref)=> {
    const handle = findNodeHandle(ref);

    return new Promise((resolve) => {
        UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
            resolve({
                x,
                y,
                width,
                height,
                pageX,
                pageY
            });
        });
    });
}

export default class Scroll extends Component {
    constructor(props) {
        super(props)

    }

    static navigationOptions = {
        header: null
    }

    render() {
        const tabs = [
            {
                title: '挑战赛'
            },
            {
                title: '赛事'
            },
            {
                title: '联赛'
            },
            {
                title: '球队'
            }
        ]
        return (
            <Tabs

                tabs={tabs}
            >
                <View ref="topBar">
                    <Challenge/>
                </View>
                <View>
                    <Schedule/>
                </View>
                <View>
                    <GameItem/>
                </View>
                <View>
                    <BallTeamItem/>
                </View>
            </Tabs>
        )

    }
    componentDidMount(){

    }
}

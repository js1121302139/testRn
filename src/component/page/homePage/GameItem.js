import React, {Component, PureComponent} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native'

import {
    WhiteSpace,
    WingBlank,
    Flex,
    SearchBar,
    Grid,
    PullToRefresh,
    DatePicker,
    Picker,
    List,
    Button
} from 'antd-mobile'
import { ImgNull } from '../../common/util';

export default class GameItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.title
        }
    }

    render() {
        const gameItem = StyleSheet.create({
            gameItemBox: {
                display: 'flex',
                backgroundColor: '#fff',
                marginBottom: 10,
                paddingVertical: 10
            },
            gameInfo: {
                display: 'flex',
                flex: 1,

            },
            titleTxt: {
                fontSize: 16,
                color:'#333'
            },
            gameTeam: {
                color: "#999",
                fontSize: 14
            },
            gameDate: {
                color: "#999",
                fontSize: 14,

            }
        })
        return (
            <TouchableHighlight onPress={()=>{Actions.leagueInfo()}}>
                <View style={gameItem.gameItemBox} >
                    <Image source={ImgNull('')}
                        style={{height: 150}}/>
                    <View>
                        <WingBlank size="sm">
                            <View style={gameItem.title}>
                                <Text style={gameItem.titleTxt}>福州大学新生篮球比赛(5vs{this.state.data})</Text>
                            </View>
                            <Flex justify="between">
                                <Text style={gameItem.gameTeam}>102参赛人员 10队伍</Text>
                                <Text style={gameItem.gameDate}>2018年3月26日 - 2018年3月31日</Text>
                            </Flex>
                        </WingBlank>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

}

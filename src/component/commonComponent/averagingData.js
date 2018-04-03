import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'

import {
    Flex,
    List,

    WingBlank
} from 'antd-mobile'

const ListItem = List.Item;

class Player extends Component {
    constructor(props){
        super(props)

    }
    render() {
        const style = StyleSheet.create({
            playerImg: {
                width: 45,
                height: 45,
                borderRadius: 10,
                marginRight: 10
            }
        })
        return (
            <WingBlank>
                <Flex>
                    <Image style={style.playerImg} source={{uri: 'https://www.baidu.com/img/bd_logo1.png'}}/>
                    <Flex.Item>
                        <Flex justify='between'>
                            <Text style={style.playerName}>{this.props.item.name}</Text>
                            <View>
                                <Text style={style.playerNum}>11号</Text>
                                <Text style={style.playerPostion}>大前锋</Text>
                            </View>
                        </Flex>
                    </Flex.Item>
                </Flex>
            </WingBlank>

        )
    }

}

export default class AveragingData extends Component {
    render() {
        return (
            <View>
                <List renderHeader="场均数据">
                    <WingBlank>
                        <View>
                            <Flex wrap="wrap" justify="between">
                                <View style={style.averagingData}>
                                    <Text style={style.aveCours}>115.5</Text>
                                    <Text style={style.aveCoursName}>得分</Text>
                                    <Text style={style.aveHonor}>联盟第一</Text>
                                </View>
                                <View style={style.averagingData}>
                                    <Text style={style.aveCours}>115.5</Text>
                                    <Text style={style.aveCoursName}>得分</Text>
                                    <Text style={style.aveHonor}>联盟第一</Text>
                                </View>
                                <View style={style.averagingData}>
                                    <Text style={style.aveCours}>115.5</Text>
                                    <Text style={style.aveCoursName}>得分</Text>
                                    <Text style={style.aveHonor}>联盟第一</Text>
                                </View>
                                <View style={style.averagingData}>
                                    <Text style={style.aveCours}>115.5</Text>
                                    <Text style={style.aveCoursName}>得分</Text>
                                    <Text style={style.aveHonor}>联盟第一</Text>
                                </View>
                                <View style={style.averagingData}>
                                    <Text style={style.aveCours}>115.5</Text>
                                    <Text style={style.aveCoursName}>得分</Text>
                                    <Text style={style.aveHonor}>联盟第一</Text>
                                </View>
                                <View style={style.averagingData}>
                                    <Text style={style.aveCours}>115.5</Text>
                                    <Text style={style.aveCoursName}>得分</Text>
                                    <Text style={style.aveHonor}>联盟第一</Text>
                                </View>
                            </Flex>
                            <View>

                            </View>
                        </View>
                    </WingBlank>
                </List>
                <List>
                    <ListItem extra='添加' platform={{color: '#999'}}>球队阵容</ListItem>
                    {[{name:'hhh'}].map(item=><Player key={item}rr item={item}/>)}
                </List>
            </View>
        )
    }
}
const style = StyleSheet.create({
    // 场均数据
    averagingData: {
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginBottom: 10
    },
    aveCours: {
        textAlign: 'center',
        fontSize: 16,
        color: '#000'
    },
    aveCoursName: {
        textAlign: 'center',
        fontSize: 14,
        color: '#333'
    },
    aveHonor: {
        textAlign: 'center',
        fontSize: 13,
        color: '#999'
    }
})
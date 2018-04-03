import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet
} from 'react-native'

import { List, Flex, WingBlank } from 'antd-mobile'
import ScrollView from '../../commonComponent/scroll'
class Item extends Component {
    render() {
        let itemData = this.props.itemData;
        const style = StyleSheet.create({
            goodItem: {
                paddingVertical: 12,
                backgroundColor:'#fff',
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBottomColor: '#ccc'
            },
            goodImg: {
                width: 100,
                height: 100,
                marginRight: 20
            },
            goodName: {
                fontSize: 24,
        
            },
            price: {
                color: '#f00',
                fontSize: 20
            },
            soldNum: {
                fontSize: 16
            },
            otherPrice: {
                fontSize: 16
            }
        
        })
        return (
            <View style={style.goodItem}>
                <WingBlank>
                    <Flex>
                        <Image style={style.goodImg} source={{ uri: 'https://www.baidu.com/img/bd_logo1.png' }} />
                        <View direction="column">
                            <Text style={style.goodName}>xxxx{itemData}</Text>
                            <Flex>
                                <Text style={style.price}>¥8888</Text>
                                <Text style={style.soldNum}>已售8888件</Text>
                            </Flex>
                            <Flex>
                                <Text style={style.otherPrice}>京东：¥8888</Text>
                                <Text style={style.otherPrice}>天猫：¥8888</Text>
                            </Flex>
                        </View>
                    </Flex>
                </WingBlank>
            </View>
        )
    }
}
export default class Mell extends Component {
    render() {
        return (
            <ScrollView ListItem={Item} />
        )
    }
}



